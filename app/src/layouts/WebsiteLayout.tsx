import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  MantineColor,
  Modal,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  px,
  rgba,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'

import { IconUsers } from '@tabler/icons-react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import * as Nav from '#/components/custom/Nav'

import { useTrekieStore } from '#/stores/trekieStore'

import * as LayoutStyle from '#/styles/Layout.css'
import * as WebsiteStyle from '#/styles/website/Website.css'

import { useThemed, theme, vanilla } from '#/styles/theme'
import Emoji from '#/components/custom/Emoji'
import ColorToggle from '#/components/util/ColorToggle'

function WebsiteLayout() {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  const navigate = useNavigate()
  const isWideScreen = useMediaQuery('(min-width: 768px)')

  const Header = (
    <Paper p={10} radius="lg">
      <Group justify="space-between">
        <div>
          <Image
            src={useThemed({
              light: '/images/trekie_Brand.svg',
              dark: '/images/trekie_Brand_White.svg',
            })}
            w="auto"
            h={60}
          />
        </div>

        <Paper py={4} px={10}>
          <Group gap={2}>
            {[
              ['Features', '/#features'],
              ['Premium', '/#premium'],
              ['Company', '/#company'],
              ['FAQ', '/#faq'],
            ].map(link => (
              <Anchor
                component={Link}
                //@ts-ignore
                to={link[1]}
                key={link[1]}
                className={WebsiteStyle.Header.Link}
              >
                {link[0]}
              </Anchor>
            ))}
          </Group>
        </Paper>

        <Group gap={8}>
          <Button>Get Started</Button>
          <ColorToggle size="xs" />
        </Group>
      </Group>
    </Paper>
  )

  const Footer = (
    <Paper className={WebsiteStyle.Footer.Root} withBorder shadow="xs">
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 4, md: 5 }}>
        <Stack>
          <Image src="/images/trekie_Icon.svg" h={64} w={64} display="block" />
        </Stack>

        <Stack gap={4} p={10}>
          <Text className={WebsiteStyle.Footer.ListTitle}>Product</Text>
          {[
            ['About', '/about'],
            ['Features', '/#features'],
            ['Pricing', '/#pricing'],
            ['Roadmap', '/#roadmap'],
            ['Method', '/#method'],
            ['FAQs', '/#faq'],
          ].map(link => (
            <Anchor
              component={Link}
              //@ts-ignore
              to={link[1]}
              key={link[1]}
              className={WebsiteStyle.Footer.Link}
            >
              {link[0]}
            </Anchor>
          ))}
        </Stack>

        <Stack gap={4} p={10}>
          <Text className={WebsiteStyle.Footer.ListTitle}>Resources</Text>
          {[
            ['Careers', 'https://dorkodu.com/jobs'],
            ['Press', '/press'],
            ['Contact', '/contact'],
            ['Help', '/help'],
            ['Blog', 'https://dorkodu.substack.com'],
          ].map(link => (
            <Anchor
              component={Link}
              //@ts-ignore
              to={link[1]}
              key={link[1]}
              className={WebsiteStyle.Footer.Link}
            >
              {link[0]}
            </Anchor>
          ))}
        </Stack>

        <Stack gap={4} p={10}>
          <Text className={WebsiteStyle.Footer.ListTitle}>Legal</Text>
          {[
            ['Terms', '/legal/terms'],
            ['Privacy', '/legal/privacy'],
            ['Company', 'https://dorkodu.com'],
          ].map(link => (
            <Anchor
              component={Link}
              //@ts-ignore
              to={link[1]}
              key={link[1]}
              classNames={{
                root: WebsiteStyle.Footer.Link,
              }}
            >
              {link[0]}
            </Anchor>
          ))}
        </Stack>

        <Stack gap={0} px={10} align="center">
          <Anchor display="block" href="https://dorkodu.com" target="_blank">
            <Image
              src="/images/dorkodu_Logo_Colorful.svg"
              w={150}
              m={10}
              h="auto"
              display="block"
            />
          </Anchor>
          <Text className={WebsiteStyle.Footer.DorkoduMotto} my={4} size="sm">
            Your Life Fulfillment Technology Company.
          </Text>
          <Text c="dimmed" fw={500}>
            Dorkodu &copy; {new Date().getFullYear()}
          </Text>
        </Stack>
      </SimpleGrid>
    </Paper>
  )

  return (
    <div className={LayoutStyle.Layout.Root}>
      {Header}
      <div className={LayoutStyle.Layout.Body}>
        <main className={LayoutStyle.Layout.Main}>
          {/* Paper can be a different element, but not likely */}
          <div>
            <Outlet />
          </div>
        </main>
      </div>
      {Footer}
    </div>
  )
}

export default WebsiteLayout
