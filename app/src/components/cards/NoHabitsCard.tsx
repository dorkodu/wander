import Emoji from '../custom/Emoji'
import StatusCard from './StatusCard'

function NoHabitsCard() {
  return (
    <StatusCard icon={<Emoji emoji="🌱" size={24} />} title="No habits">
      Time for new habits!
    </StatusCard>
  )
}

export default NoHabitsCard
