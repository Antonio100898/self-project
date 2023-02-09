import { appBarHeight, beige, tan } from "@/lib/ui";

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
  },
  sectionHeader: {
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 30,
    color: tan,
    fontWeight: 'bold',
    mb: 2
  }
};
