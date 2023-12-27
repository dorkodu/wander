import { LoadingOverlay } from "@mantine/core";
import { useDelay } from "../hooks";

interface Props {
  full?: boolean;
}

function OverlayLoader({ full }: Props) {
  const delay = useDelay();
  if (delay) return null;

  return (
    <LoadingOverlay
      visible={true}
      pos={full ? "fixed" : undefined}
      loaderProps={{ type: "dots" }}
    />
  );
}

export default OverlayLoader;
