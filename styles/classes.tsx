import { appBarHeight } from "@/lib/ui";

export const classes = {
  drawerHead: {
    height: appBarHeight || 60,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  drawerBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 400,
  }
};
