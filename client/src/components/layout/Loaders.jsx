import React from "react";

import { Grid, Skeleton,Stack } from "@mui/material";

export const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
      <Grid item size={{ sm: 4, md: 3 }} height={"100%"}>
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
      <Grid item size={{ xs: 10, sm: 6, md: 5, lg: 5 }} height={"100%"}>
        <Stack spacing={"1rem"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton variant="rounded" height={"5rem"} />
          ))}
        </Stack>
      </Grid>
      <Grid
        item
        size={{ md: 4, lg: 4 }}
        sx={{
          display: { xs: "none", md: "block" },
        }}
        height={"100%"}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};
