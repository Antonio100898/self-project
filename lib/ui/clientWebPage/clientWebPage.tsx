import {
  AppPaper,
  WebPageLayout,
  THEME,
  themeRegular,
  SocialMediaLinks,
} from "@/lib/ui";
import { AppSection } from "@/lib/ui/section";
import { ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { IUserInfo, IUserWebData, NavItem, Section } from "@/lib/api/models";
import { IContactLink } from "@/lib/api/models/user-contacts-model";

type Props = {
  userData: {
    userInfo: IUserInfo;
    userWebData: IUserWebData;
    contacts: IContactLink[];
  };
};

export const ClientWebPage = (props: Props) => {
  //state of the client web page
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [sections, setSections] = useState<Section[] | null>(null);
  const [navItems, setNavItems] = useState<NavItem[] | null>(null);
  const [client, setClient] = useState<IUserInfo | null>(null);
  const [avatar, setAvatar] = useState("");
  const [links, setLinks] = useState<IContactLink[] | null>(null);

  const { userInfo, userWebData, contacts } = props.userData;

  useEffect(() => {
    setClient(userInfo);
    setSections(userWebData.sections);
    setNavItems(userWebData.navItems);
    setAvatar(userWebData.avatar);
    setLinks(contacts);
  }, [props]);

  //changing theme of the page (dark/light)
  const themeToggle = () => {
    if (isDarkTheme) setIsDarkTheme(false);
    if (!isDarkTheme) setIsDarkTheme(true);
  };

  if (client && links) {
    return (
      <ThemeProvider theme={themeRegular}>
        <ThemeProvider
          theme={() => THEME(isDarkTheme, userWebData.palette.primaryColor)} //THEME function accepts darkmode boolean and all color settings choosed by user in admin app, and creates theme
        >
          <WebPageLayout
            activities={client.activities}
            avatar={avatar}
            name={client.name}
            navItems={navItems}
            themeToggle={themeToggle}
            isDarkTheme={isDarkTheme}
          >
            {sections?.map((section) => (
              <AppSection
                isDarkTheme={isDarkTheme}
                header={section.header}
                id={section.header?.toLowerCase()}
              >
                <AppPaper>{section.content?.paragraph}</AppPaper>
              </AppSection>
            ))}
            <AppSection isDarkTheme={isDarkTheme} header="CONTACT" id="contact">
              <SocialMediaLinks socialMediaLinks={links} />
            </AppSection>
          </WebPageLayout>
        </ThemeProvider>
      </ThemeProvider>
    );
  } else {
    return <>wait a moment...</>;
  }
};
