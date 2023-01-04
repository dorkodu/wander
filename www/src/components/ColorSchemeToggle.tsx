import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      sx={(theme) => ({
        backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
        color: dark ? theme.colors.yellow[4] : theme.colors.blue[6],
      })}
    >
      {colorScheme === "dark" ? (
        <IconSun size={18} strokeWidth={2.5} />
      ) : (
        <IconMoonStars size={18} strokeWidth={2.5} />
      )}
    </ActionIcon>
  );
}
