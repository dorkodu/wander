import { IconEye, IconEyeOff } from "@tabler/icons-react";

interface VisibilityToggleIconProps {
  reveal: boolean;
  size: string | number;
}

export default function VisibilityToggle({ reveal, size }: VisibilityToggleIconProps) {
  if (reveal) return <IconEyeOff size={size} stroke={2.5} />
  return <IconEye size={size} stroke={2.5} />
}