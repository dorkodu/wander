import { CSSObject, MantineTheme } from "@mantine/core";

export const widthLimit: CSSObject = {
  width: "100%",
  maxWidth: "360px",
  margin: "0 auto",
};

export const title = ($: MantineTheme) => ({
  letterSpacing: -1,
  lineHeight: 1.1,
  color: $.colorScheme == "dark" ? $.white : $.black,
});

export const fullWidth: CSSObject = { width: "100%" };

export const wrapContent: CSSObject = {
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
};

export const clickable: CSSObject = { cursor: "pointer" };

export const emoji: CSSObject = {
  height: "1em",
  width: "1em",
  margin: "0 .05em 0 .1em",
  verticalAlign: "-0.1em",
};
