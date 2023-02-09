import { AppPaper } from "@/lib/ui";
import { AppSection } from "@/lib/ui/section";
import { List, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";

export default function Home() {
  const contactLinks = [];

  return (
    <>
      <AppSection header="MUSIC" id="music">
        <AppPaper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, et
          ullam. Sunt, reprehenderit. Sunt, dolor hic doloremque optio
          exercitationem commodi. Impedit, suscipit? Alias sit praesentium saepe
          odio ducimus, iste tempore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur unde rerum, in perspiciatis quam autem
          magnam? Ipsam dolorem quam sint architecto labore recusandae sed?
          Ratione dolore harum error expedita iste. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sunt explicabo architecto nihil ipsa?
          Animi libero excepturi explicabo fugit totam quibusdam, a molestias
          pariatur, quia voluptatibus fugiat natus tempore sit ducimus.
        </AppPaper>
      </AppSection>
      <AppSection header="EVENTS" id="events">
        <AppPaper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, et
          ullam. Sunt, reprehenderit. Sunt, dolor hic doloremque optio
          exercitationem commodi. Impedit, suscipit? Alias sit praesentium saepe
          odio ducimus, iste tempore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur unde rerum, in perspiciatis quam autem
          magnam? Ipsam dolorem quam sint architecto labore recusandae sed?
          Ratione dolore harum error expedita iste. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sunt explicabo architecto nihil ipsa?
          Animi libero excepturi explicabo fugit totam quibusdam, a molestias
          pariatur, quia voluptatibus fugiat natus tempore sit ducimus.
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
    </>
  );
}
