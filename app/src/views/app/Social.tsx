import OnlyPremium from '#/components/cards/OnlyPremium'
import { Flex, Image } from '@mantine/core'

function Social() {
  return (
    <Flex direction="column" m="md">
      <div>
        <Image src="/images/trekie_SUPER_Badge.svg" h={50} w="auto" />
      </div>
      <OnlyPremium />
    </Flex>
  )
}

export default Social
