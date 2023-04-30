import Dorkodu from "../types/dorkodu";

import { createStyles, Avatar, Text, Group, Stack, Badge, Box } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
  },
  name: {
    color: theme.colorScheme == "dark" ? theme.white : theme.colors.dark[9],
  },
}));

export function TheRingMember({ member }: { member: Dorkodu.TeamMember }) {
  const { classes, theme } = useStyles();

  const smolScreen = useMediaQuery("(min-width: 500px)");

  return (
    <Box maw={500}>
      <Group noWrap={smolScreen ? true : false} align="flex-start">
        <Avatar src={member.avatar} size={100} radius="lg" />
        <Stack spacing={0} mt={4}>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {member.title}
          </Text>
          <Text fz="xl" fw={700} className={classes.name}>
            {member.name}
          </Text>
          <Text fz="sm" weight={500} m={0} p={0} c="dimmed">
            {member.about}
          </Text>
          <Group spacing={5} mt={8}>
            {member.tags?.map((tag) => (
              <Badge radius={8} px={8} variant="gradient">
                {tag}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Group>
    </Box>
  );
}

export function TeamMember({ member }: { member: Dorkodu.TeamMember }) {
  const { classes, theme } = useStyles();

  return (
    <Box maw={500}>
      <Group noWrap>
        <Avatar src={member.avatar} size={76} radius="lg" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {member.title}
          </Text>

          <Text fz="xl" fw={650}>
            {member.name}
          </Text>

          <Group spacing={5} mt={3}>
            {member.tags?.map((tag) => (
              <Badge radius={8} px={8} variant="light">
                {tag}
              </Badge>
            ))}
          </Group>
        </div>
      </Group>
    </Box>
  );
}
