import { Alert, DefaultMantineColor } from "@mantine/core";

interface Props {
  icon?: React.ReactNode;
  title?: string;
  color?: DefaultMantineColor;
}

function StatusCard({
  icon,
  title,
  color,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Alert icon={icon} title={title} color={color} variant="light" p="md">
      {children}
    </Alert>
  );
}

export default StatusCard;
