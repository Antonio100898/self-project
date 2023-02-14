import { AppPaper, Layout, THEME, themeRegular } from "@/lib/ui";
import { AppSection } from "@/lib/ui/section";
import { List, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import ListItem from "@mui/material/ListItem";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { ApiService } from "@/lib/api/api-service";
import { IUserInfo, IUserWebData, NavItem, Section } from "@/lib/api/models";

export async function getServerSideProps({ query }: any) {
  const response = await ApiService.fetchUserById(query.clientID); //initial request for the page of the user (by userid/username provided as query (query.clientID))

  if (!response?.data.data) {
    //if api service didnt return response.data.data, means that page of the provided user doesnt exist
    return {
      redirect: {
        permanent: true,
        destination: "/404",
      },
    };
  }
  // if response.data.data exists so we put this to props of the page
  return {
    props: {
      userData: {
        userInfo: response?.data.data.userInfo,
        userWebData: response?.data.data.userWebData,
      },
    }, 
  };
}

type Props = {
  userData: {
    userInfo: IUserInfo;
    userWebData: IUserWebData;
  };
};

export default function Home(props: Props) {
  //state of the app
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [sections, setSections] = useState<Section[] | null>(null);
  const [navItems, setNavItems] = useState<NavItem[] | null>(null);
  const [client, setClient] = useState<IUserInfo | null>(null);

  const { userInfo, userWebData } = props.userData;
  
  useEffect(() => {
    setClient(userInfo);
    setSections(userWebData.sections);
    setNavItems(userWebData.navItems);
  }, [props]);
  
  //changing theme of the page (dark/light)
  const themeToggle = () => {
    if (isDarkTheme) setIsDarkTheme(false);
    if (!isDarkTheme) setIsDarkTheme(true);
  };

  return (
    <ThemeProvider theme={themeRegular}>
      <ThemeProvider theme={() => THEME(isDarkTheme, userWebData.palette.primaryColor)}>
        <Layout name={client?.name} navItems={navItems} themeToggle={themeToggle} isDarkTheme={isDarkTheme}>
          {sections?.map((section) => (
            <AppSection
              header={section.header}
              id={section.header?.toLowerCase()}
            >
              <AppPaper>{section.content?.paragraph}</AppPaper>
            </AppSection>
          ))}
          <AppSection header="CONTACT" id="contact">
            <AppPaper>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Image
                      src="/instagram.png"
                      alt="instagram_icon"
                      width={40}
                      height={40}
                    />
                  </ListItemIcon>
                  <ListItemText>link here</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Image
                      src="/instagram.png"
                      alt="instagram_icon"
                      width={40}
                      height={40}
                    />
                  </ListItemIcon>
                  <ListItemText>link here</ListItemText>
                </ListItem>
              </List>
            </AppPaper>
          </AppSection>
        </Layout>
      </ThemeProvider>
    </ThemeProvider>
  );
}
