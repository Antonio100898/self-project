import { AppPaper } from "@/lib/ui";
import { AppSection } from "@/lib/ui/section";
import { classes } from "@/styles/classes";
import { Box } from "@mui/material";

export default function Home() {
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
      <section className="section" id="events">
        <Box sx={classes.sectionHeader}>EVENTS</Box>
      </section>
      <section className="section" id="contact">
        <Box sx={classes.sectionHeader}>CONTACT</Box>
      </section>
    </>
  );
}
