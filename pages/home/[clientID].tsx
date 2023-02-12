import { AppPaper, Layout, THEME, themeRegular } from "@/lib/ui";
import { AppSection } from "@/lib/ui/section";
import { List, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";

export async function getServerSideProps({ query }: any) {
  
  let res = await fetch(`http://localhost:3000/api/user-data/${query.clientID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();

  return {
    props: { data },
  };
}

export default function Home(props: { data: any }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeToggle = () => {
    if (isDarkTheme) setIsDarkTheme(false);
    if (!isDarkTheme) setIsDarkTheme(true);
  };

  return (
    <ThemeProvider theme={themeRegular}>
      <ThemeProvider theme={() => THEME(isDarkTheme)}>
        <Layout themeToggle={themeToggle} isDarkTheme={isDarkTheme}>
          <AppSection header="MUSIC" id="music">
            <AppPaper>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              et ullam. Sunt, reprehenderit. Sunt, dolor hic doloremque optio
              exercitationem commodi. Impedit, suscipit? Alias sit praesentium
              saepe odio ducimus, iste tempore! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequuntur unde rerum, in
              perspiciatis quam autem magnam? Ipsam dolorem quam sint architecto
              labore recusandae sed? Ratione dolore harum error expedita iste.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              explicabo architecto nihil ipsa? Animi libero excepturi explicabo
              fugit totam quibusdam, a molestias pariatur, quia voluptatibus
              fugiat natus tempore sit ducimus.
            </AppPaper>
          </AppSection>
          <AppSection header="EVENTS" id="events">
            <AppPaper>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              et ullam. Sunt, reprehenderit. Sunt, dolor hic doloremque optio
              exercitationem commodi. Impedit, suscipit? Alias sit praesentium
              saepe odio ducimus, iste tempore! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequuntur unde rerum, in
              perspiciatis quam autem magnam? Ipsam dolorem quam sint architecto
              labore recusandae sed? Ratione dolore harum error expedita iste.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              explicabo architecto nihil ipsa? Animi libero excepturi explicabo
              fugit totam quibusdam, a molestias pariatur, quia voluptatibus
              fugiat natus tempore sit ducimus.
            </AppPaper>
          </AppSection>
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
