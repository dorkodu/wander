import {
  Box,
  Button,
  Card,
  Divider,
  Image,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import Emoji from '../custom/Emoji'

import * as PremiumStyles from '#/styles/views/Premium.css'
import {
  IconAdOff,
  IconArrowRight,
  IconMultiplier2x,
  IconUsersGroup,
} from '@tabler/icons-react'

function OnlyPremium() {
  return (
    <>
      <Paper shadow="sm" className={PremiumStyles.Banner.Root} my={20}>
        <Stack mb={20}>
          <Title className={PremiumStyles.Banner.Title} c="white">
            This premium feature is only available for Super Trekie subscribers
            :(
          </Title>
          <Text className={PremiumStyles.Banner.Text}>
            Do you like and enjoy Trekie? <b>Support</b> this passionate indie
            team only for <b>price of a coffee.</b>
          </Text>
          <Button size="lg" className={PremiumStyles.Banner.Button}>
            Try 1 Week For Free
          </Button>
        </Stack>
        <Box mt={30}>
          <List spacing="sm">
            {[
              [
                <IconAdOff />,
                'Ad-free',
                'No interruptions, full productivity.',
              ],
              [
                <IconMultiplier2x />,
                'Doubled Gains',
                'More coins, XP and items available.',
              ],
              [
                <IconUsersGroup />,
                'Groups',
                'Share common goals & habits with friends. Say hello to social productivity boost!',
              ],
            ].map(x => (
              <List.Item
                key={x[1]}
                icon={
                  <ThemeIcon variant="light" c="white" size={36}>
                    {x[0]}
                  </ThemeIcon>
                }
              >
                <Text fw={700} c="white" lh={1.1}>
                  {x[1]}
                </Text>
                <Text c="white">{x[2]}</Text>
              </List.Item>
            ))}
          </List>
        </Box>
      </Paper>
    </>
  )
}

export default OnlyPremium
