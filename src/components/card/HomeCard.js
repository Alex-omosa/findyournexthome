import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import ZoomOutMapOutlinedIcon from "@material-ui/icons/ZoomOutMapOutlined";
const useStyles = makeStyles((theme) => ({
  media: {
    borderRadius: 10,
  },
  h5: {
    fontWeight: 700,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  bodytxt: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 300,
    color: "rgb(169,169,169)",
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  focusVisible: {
    borderRadius: 5,
    padding: theme.spacing(1),
  },
  icons: {
    fill: "rgb(169,169,169)",
    marginRight: 5,
  },
  item: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));
function HomeCard({ img, title, price, size, bedRooms, bathroom }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.focusVisible}>
        <CardMedia
          className={classes.media}
          height="200"
          alt="Home"
          component="img"
          title="house image"
          image={img}
        />
        <Typography className={classes.h5} variant="h5" color="textPrimary">
          $ {price}
        </Typography>
        <Typography
          className={classes.bodytxt}
          variant="body1"
          color="textPrimary"
        >
          {title}
        </Typography>
        <Grid container>
          <Grid item xs={3} className={classes.item}>
            <BathtubOutlinedIcon className={classes.icons} />
            <Typography variant="body1" className={classes.bodytxt}>
              {bedRooms}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <KingBedOutlinedIcon className={classes.icons} />
            <Typography variant="body1" className={classes.bodytxt}>
              {bathroom}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <ZoomOutMapOutlinedIcon className={classes.icons} />
            <Typography variant="body1" className={classes.bodytxt}>
              {size} &sup2;ft
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default HomeCard;
