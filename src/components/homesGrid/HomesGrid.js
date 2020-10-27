import React from "react";
import Grid from "@material-ui/core/Grid";
import HomeCard from "./../card/HomeCard";
function HomesGrid() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <HomeCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomesGrid;
