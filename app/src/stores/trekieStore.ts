import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

import type { IUser, IHabit, IMemory, IGoal } from '@sdk/types'

import { util } from '#/lib/util'

import { useAppStore } from './appStore'

export interface TrekieStoreState {
  userId: string | undefined

  users: Record<string, IUser>
  habits: Record<string, IHabit>
  memories: Record<string, IMemory>
  goals: Record<string, IGoal>

  index: {
    usernameToUserId: Record<string, string>
    userIdToHabitIds: Record<string, string[]>
    userIdToMemoryIds: Record<string, string[]>
    userIdToGoalIds: Record<string, string[]>
  }
}

export interface TrekieStoreAction {
  auth: (user: IUser | undefined) => void
  logout: () => void

  addUser: (user: IUser) => void
  removeUser: (user: IUser) => void
  updateUser: (userId: string, username: string) => void

  followUser: (user: IUser) => void

  addHabit: (habit: IHabit) => void
  removeHabit: (habit: IHabit) => void
  updateHabit: (
    id: string,
    title: string,
    description: string,
    dailyTarget: number
  ) => void
  getHabits: (userId: string | undefined) => IHabit[]

  countHabit: (habit: IHabit, count: number) => void

  addMemory: (memory: IMemory) => void
  removeMemory: (memory: IMemory) => void
  getMemories: (userId: string | undefined) => IMemory[]

  favouriteMemory: (memory: IMemory) => void

  addGoal: (goal: IGoal) => void
  removeGoal: (goal: IGoal) => void
  getGoals: (userId: string | undefined) => IGoal[]

  updateStats: () => void

  reset: () => void
}

const initialState: TrekieStoreState = {
  userId: undefined,

  users: {},
  habits: {},
  memories: {},
  goals: {},

  index: {
    usernameToUserId: {},
    userIdToHabitIds: {},
    userIdToMemoryIds: {},
    userIdToGoalIds: {},
  },
}

export const useTrekieStore = create<TrekieStoreState & TrekieStoreAction>()(
  immer(
    persist(
      (set, get) => ({
        ...initialState,

        auth(user) {
          // If user has created an account before, they can use the app offline.
          // If they didn't, when provided user is undefined:
          // - auth will fail
          // - loader will be removed
          // - browser will navigate to join

          if (user) {
            set(s => {
              s.userId = user.id
            })
            get().addUser(user)
            get().updateStats()
          }

          useAppStore.setState(s => {
            s.loading.auth = false
          })
        },

        logout() {
          set(s => {
            s.userId = undefined
          })
          useAppStore.setState(s => {
            s.loading.auth = true
          })
        },

        addUser(user) {
          set(s => {
            s.users[user.id] = user
            s.index.usernameToUserId[user.username] = user.id
          })
        },

        removeUser(user) {
          set(s => {
            delete s.users[user.id]
            delete s.index.usernameToUserId[user.username]
          })
        },

        updateUser(userId, username) {
          set(s => {
            const user = s.users[userId]
            if (!user) return

            delete s.index.usernameToUserId[user.username]
            s.index.usernameToUserId[username] = user.id

            user.username = username
          })
        },

        followUser(user) {
          set(state => {
            const currentUserId = state.userId
            const currentUser = currentUserId && state.users[currentUserId]
            if (!currentUser) return

            const targetUserId = user.id
            const targetUser = targetUserId && state.users[targetUserId]
            if (!targetUser) return

            const newState = !targetUser.following

            targetUser.following = newState
            targetUser.followerCount += newState ? +1 : -1
            currentUser.followingCount += newState ? +1 : -1
          })
        },

        addHabit(habit) {
          set(s => {
            s.habits[habit.id] = habit
            if (!s.index.userIdToHabitIds[habit.userId])
              s.index.userIdToHabitIds[habit.userId] = []
            s.index.userIdToHabitIds[habit.userId]?.push(habit.id)

            const currentUserId = s.userId
            const currentUser = currentUserId && s.users[currentUserId]
            if (!currentUser) return

            if (currentUserId !== habit.userId) return
            currentUser.dailyXpTarget += habit.dailyTarget
          })
        },

        removeHabit(habit) {
          let updateStats = false

          set(s => {
            delete s.habits[habit.id]

            let userIdToHabitIds = s.index.userIdToHabitIds[habit.userId]
            if (!userIdToHabitIds) return

            s.index.userIdToHabitIds[habit.userId] = userIdToHabitIds.filter(
              habitId => habitId !== habit.id
            )

            const currentUserId = s.userId
            const currentUser = currentUserId && s.users[currentUserId]
            if (!currentUser || currentUser.id !== habit.userId) return

            updateStats = true

            const habitDailyCurrent =
              habit.heatmap[util.getDayDiff(habit.date, Date.now())] ?? 0
            const habitDailyTarget = habit.dailyTarget
            const habitCount = habit.count

            currentUser.totalXp -= habitCount
            currentUser.dailyXpCurrent -= Math.min(
              habitDailyCurrent,
              habitDailyTarget
            )
            currentUser.dailyXpTarget -= habitDailyTarget
          })

          if (updateStats) get().updateStats()
        },

        updateHabit(id, title, description, dailyTarget) {
          let updateStats = false

          set(s => {
            const habit = s.habits[id]
            if (!habit) return

            const user = s.users[habit.userId]
            if (!user) return

            updateStats = true

            const habitDailyCurrent =
              habit.heatmap[util.getDayDiff(habit.date, Date.now())] ?? 0
            const habitDailyTarget = dailyTarget

            const habitDailyTargetDiff = habitDailyTarget - habit.dailyTarget

            habit.title = title
            habit.description = description
            habit.dailyTarget = dailyTarget

            user.dailyXpCurrent = Math.min(habitDailyTarget, habitDailyCurrent)
            user.dailyXpTarget += habitDailyTargetDiff
          })

          if (updateStats) get().updateStats()
        },

        getHabits(userId) {
          if (!userId) return []

          const habits = get().habits
          const userIdToHabitIds = get().index.userIdToHabitIds

          const habitIds = userIdToHabitIds[userId]
          if (!habitIds) return []

          return habitIds
            .map(habitId => habits[habitId])
            .filter(Boolean) as IHabit[]
        },

        countHabit(habit, count) {
          let updateStats = false

          set(state => {
            const targetHabit = habit.id && state.habits[habit.id]
            if (!targetHabit) return

            const targetUser = state.users[habit.userId]
            if (!targetUser) return

            const dayDiff = util.getDayDiff(habit.date, Date.now())
            const habitCount = (targetHabit.heatmap[dayDiff] ?? 0) + count

            // Habit count can not be negative
            if (habitCount < 0) return

            updateStats = true

            targetHabit.count += count
            targetHabit.heatmap[dayDiff] = habitCount

            // If habit count has become 0, remove the property
            if (targetHabit.heatmap[dayDiff]! <= 0)
              delete targetHabit.heatmap[dayDiff]

            targetUser.totalXp += count
            targetUser.dailyXpCurrent += Math.max(
              Math.min(habit.dailyTarget - (habitCount - count), count),
              count
            )
          })

          if (updateStats) get().updateStats()
        },

        addMemory(memory) {
          set(s => {
            s.memories[memory.id] = memory
            if (!s.index.userIdToMemoryIds[memory.userId])
              s.index.userIdToMemoryIds[memory.userId] = []
            s.index.userIdToMemoryIds[memory.userId]?.push(memory.id)
          })
        },

        removeMemory(memory) {
          set(s => {
            delete s.memories[memory.id]

            let userIdToMemoryIds = s.index.userIdToMemoryIds[memory.userId]
            if (!userIdToMemoryIds) return

            s.index.userIdToMemoryIds[memory.userId] = userIdToMemoryIds.filter(
              memoryId => memoryId !== memory.id
            )
          })
        },

        getMemories(userId) {
          if (!userId) return []

          const memories = get().memories
          const userIdToMemoryIds = get().index.userIdToMemoryIds

          const memoryIds = userIdToMemoryIds[userId]
          if (!memoryIds) return []

          return memoryIds
            .map(memoryId => memories[memoryId])
            .filter(Boolean) as IMemory[]
        },

        favouriteMemory(memory) {
          set(state => {
            const targetMemoryId = memory.id
            const targetMemory =
              targetMemoryId && state.memories[targetMemoryId]
            if (!targetMemory) return

            const newState = !targetMemory.favourited

            targetMemory.favourited = newState
            targetMemory.favourites += newState ? +1 : -1
          })
        },

        addGoal(goal) {
          set(s => {
            s.goals[goal.id] = goal
            if (!s.index.userIdToGoalIds[goal.userId])
              s.index.userIdToGoalIds[goal.userId] = []
            s.index.userIdToGoalIds[goal.userId]?.push(goal.id)
          })
        },

        removeGoal(goal) {
          set(s => {
            delete s.goals[goal.id]

            let userIdToGoalIds = s.index.userIdToGoalIds[goal.userId]
            if (!userIdToGoalIds) return

            s.index.userIdToGoalIds[goal.userId] = userIdToGoalIds.filter(
              goalId => goalId !== goal.id
            )
          })
        },

        getGoals(userId) {
          if (!userId) return []

          const goals = get().goals
          const userIdToGoalIds = get().index.userIdToGoalIds

          const goalIds = userIdToGoalIds[userId]
          if (!goalIds) return []

          return goalIds.map(goalId => goals[goalId]).filter(Boolean) as IGoal[]
        },

        updateStats() {
          set(state => {
            const currentUserId = state.userId
            const currentUser = currentUserId && state.users[currentUserId]
            if (!currentUser) return

            const didStreakToday = util.isSameDay(
              currentUser.lastStreakDate,
              Date.now()
            )

            // If user is now above/equal to target xp and didn't do a streak today
            if (
              currentUser.dailyXpCurrent > 0 &&
              currentUser.dailyXpCurrent >= currentUser.dailyXpTarget &&
              !didStreakToday
            ) {
              currentUser.streaks++
              currentUser.lastStreakDate = Date.now()
            }
            // If user is now below target xp and did a streak today
            else if (
              (currentUser.dailyXpCurrent <= 0 ||
                currentUser.dailyXpCurrent < currentUser.dailyXpTarget) &&
              didStreakToday
            ) {
              currentUser.streaks--
              currentUser.lastStreakDate = undefined
            }

            // Handle user's last xp date
            if (!util.isSameDay(currentUser.lastXpDate, Date.now())) {
              currentUser.dailyXpCurrent = 0
              currentUser.lastXpDate = Date.now()
            }
          })
        },

        reset() {
          get().logout()
          set(initialState)
        },
      }),
      {
        name: 'trekie-store',
      }
    )
  )
)
