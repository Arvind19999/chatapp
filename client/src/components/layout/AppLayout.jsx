import React from "react";
import { Grid } from "@mui/material";

import Header from "./Header";
import Title from "../shared/Title";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid item size={{ sm: 4,md:3}} height={"100%"} >
            First
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
