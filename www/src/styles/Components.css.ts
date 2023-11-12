import { style } from "@vanilla-extract/css";
import { vanilla } from "@/styles/theme"

export const Sidebar = {
  Root: style({}),
  Card: style({
  }),
  Nav: style({
  }),
  NavLink: style({
    padding: "4px 10px",
    borderRadius: 10,
    fontWeight: 650,

    ":hover": {
      backgroundColor: vanilla.colors.gray.lightHover
    }
  }),
  NavLinkText: style({
    color: vanilla.colors.defaultColor,
    textDecoration: "underline",
  }),
  NavLinkIcon: style({
    color: vanilla.colors.dimmed,
  })
};

export const Hero = {
  Root: style({
    padding: 0,
    borderRadius: 10,
  }),
  Title: style({
    color: "white",

  }),
  Subtitle: style({
    display: "inline-block",
    padding: "2px 10px",
    color: vanilla.colors.white,
    backgroundColor: vanilla.colors.gray.light,
    borderRadius: 6,
    fontSize: 18,
    fontWeight: 600
  }),
  About: style({}),
};

export const Header = {
  Nav: style({}),
  NavLink: style({}),
};

export const Footer = {};

export const GitHub = {};

export const Contact = {};

export const Notes =  {
  Feed: style({
    display: "flex",
    flexDirection: "column",
  }),
}
