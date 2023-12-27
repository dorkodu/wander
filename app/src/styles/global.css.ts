import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  overflowY: "scroll",
  overscrollBehavior: "contain",
});

globalStyle("#root", {
  height: "100%",
});