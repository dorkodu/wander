import Emoji from '../custom/Emoji'
import StatusCard from './StatusCard'

function NoGoalsCard() {
  return (
    <StatusCard icon={<Emoji emoji="🎯" size={24} />} title="No goals">
      Set up some targets!
    </StatusCard>
  )
}

export default NoGoalsCard
