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
  },
  sectionHeader: {
    position: 'relative',
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 30,
    fontWeight: 'bold',
    mb: 6,
    mt: 2
  }
};
