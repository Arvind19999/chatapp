import React from "react";
import { Grid } from "@mui/material";

import Header from "./Header";
import Title from "../shared/Title";
import ChatList from "../Specific/ChatList";
import { samepleChats } from "../constants/SampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const prams = useParams();
    const chatId  = prams.chatId;
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid item size={{ sm: 4,md:3}} height={"100%"} >
            <ChatList chats = {samepleChats} chatId={chatId}
            newMessagesAlert={[{
              chatId,
              count: 4,
            }]}
            onlineUsers={["1","2"]}/>
          </Grid>
          <Grid item size={{ xs:10,sm:6,md:5,lg:5 }} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item size={{md:4,lg:4 }} sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }} height={"100%"} >
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
