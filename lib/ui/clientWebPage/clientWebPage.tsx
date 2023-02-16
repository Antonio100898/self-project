import {
  AppPaper,
  WebPageLayout,
  THEME,
  themeRegular,
  ImageBox,
  SocialMediaLinks,
  SocialMedia,
} from "@/lib/ui";
import { AppSection } from "@/lib/ui/section";
import { ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { IUserInfo, IUserWebData, NavItem, Section } from "@/lib/api/models";

type Props = {
  userData: {
    userInfo: IUserInfo;
    userWebData: IUserWebData;
  };
};
export const ClientWebPage = (props: Props) => {
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

  const links = [
    {
      href: "https://www.instagram.com/",
      altStringIcon: "instagram_icon",
      socialMedia: "instagram",
    },
    {
      href: "https://www.facebook.com/",
      altStringIcon: "facebook_icon",
      socialMedia: "facebook" as SocialMedia,
    },
    {
      href: "https://www.whatsapp.com/",
      altStringIcon: "whatsapp_icon",
      socialMedia: "whatsapp" as SocialMedia,
    }
  ];

  return (
    <ThemeProvider theme={themeRegular}>
      <ThemeProvider
        theme={() => THEME(isDarkTheme, userWebData.palette.primaryColor)}
      >
        <WebPageLayout
          name={client?.name}
          navItems={navItems}
          themeToggle={themeToggle}
          isDarkTheme={isDarkTheme}
        >
          {sections?.map((section) => (
            <AppSection
              header={section.header}
              id={section.header?.toLowerCase()}
            >
              <AppPaper>{section.content?.paragraph}</AppPaper>
              <ImageBox src="/djImage1.jpg" alt="image_test" />
            </AppSection>
          ))}
          <AppSection header="CONTACT" id="contact">
            <SocialMediaLinks socialMediaLinks={links} />
          </AppSection>
        </WebPageLayout>
      </ThemeProvider>
    </ThemeProvider>
  );
};
