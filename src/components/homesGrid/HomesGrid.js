import React from "react";
import Grid from "@material-ui/core/Grid";
import Homes from "./../../data/data";
import HomeCard from "./../card/HomeCard";
function HomesGrid() {
  console.log(Homes);
  return (
    <div>
      <Grid container spacing={3}>
        {Homes.map((home, i) => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <HomeCard
              key={i}
              img={home.img}
              title={home.title}
              price={home.price}
              size={home.size}
              bedRooms={home.bedRooms}
              bathroom={home.bathroom}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomesGrid;
