/**
 * Type of the "session" table in a SQL database.
 */
export interface ISession {
  id: number;
  userId: number;
  token: string;
}

// Type of the "user" table in a SQL database.
export interface IUser {
  id: number;
  username: string;
}

export interface IBlog {
  id: number;
  userId: number;
  content: string;
  likeCount: number;
}

export interface ILike {
  id: number;
  userId: number;
  blogId: number;
}

/**
 * In a SQL database, this would be the auto-increment primary key of the "session" table.
 * It's increased everytime a "session" is created.
 */
const sessionsIndex = 2;

/**
 * Example "session" data.
 */
const sessions: Array<ISession> = [
  { id: 0, userId: 0, token: "token_of_berk" },
  { id: 1, userId: 1, token: "token_of_doruk" },
]

/**
 * In a SQL database, this would be the auto-increment primary key of the "user" table.
 * It's increased everytime a "user" is created.
 */
const usersIndex = 2;

/**
 * Example "user" data.
 */
const users: Array<IUser> = [
  { id: 0, username: "berk" },
  { id: 1, username: "doruk" },
]

/**
 * In a SQL database, this would be the auto-increment primary key of the "blog" table.
 * It's increased everytime a "blog" is created.
 */
const blogsIndex = 5;

/**
 * Example "blog" data.
 */
const blogs: Array<IBlog> = [
  { id: 0, userId: 0, content: "hello world", likeCount: 1 },
  { id: 1, userId: 0, content: "goodbye world", likeCount: 1 },
  { id: 2, userId: 1, content: "testing", likeCount: 1 },
  { id: 3, userId: 1, content: "attention please", likeCount: 1 },
  { id: 4, userId: 1, content: "ceo of dorkodu", likeCount: 1 },
]

/**
 * In a SQL database, this would be the auto-increment primary key of the "like" table.
 * It's increased everytime a "like" is created.
 */
const likesIndex = 5;

/**
 * Example "like" data.
 */
const likes: Array<ILike> = [
  { id: 0, userId: 0, blogId: 2 },
  { id: 1, userId: 0, blogId: 3 },
  { id: 2, userId: 0, blogId: 4 },
  { id: 3, userId: 1, blogId: 0 },
  { id: 4, userId: 1, blogId: 1 },
]

/**
 * Example database data, as we don't have a SQL database running here.
 */
export const data = {
  sessions,
  users,
  blogs,
  likes,
  sessionsIndex,
  usersIndex,
  blogsIndex,
  likesIndex,
}
