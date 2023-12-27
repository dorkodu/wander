import Emoji from '../custom/Emoji'
import StatusCard from './StatusCard'

function NoMemoriesCard() {
  return (
    <StatusCard icon={<Emoji emoji="💾" size={24} />} title="No memories">
      What have you been doing?
    </StatusCard>
  )
}

export default NoMemoriesCard
