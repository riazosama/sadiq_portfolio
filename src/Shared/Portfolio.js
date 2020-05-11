import React from "react";
import { withStyles } from "@material-ui/styles";
import sizes from "../styles/sizes";
import BallRacer from "../assets/images/ball_racer_1.png";
import BucketBall from "../assets/images/bucket_ball.png";
import CleanRoad from "../assets/images/clean_road.png";
import Cricket from "../assets/images/Cricket.png";
import Fidget from "../assets/images/fidget.io.png";
import Flippy from "../assets/images/flippy.png";
import Jet from "../assets/images/jet.io.png";
import PolySphere from "../assets/images/poly.png";
import StackFlow from "../assets/images/stackflow.png";
import SweetSmash from "../assets/images/sweetsmash.png";
import TubeRusher from "../assets/images/tuberusher.png";
import PortfolioItem from "./PortfolioItem";
import Config from "../config";

const styles = {
  Section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",

    [sizes.up("xs")]: {
      padding: "80px 0px 0",
    },
    [sizes.up("lg")]: {
      padding: "120px 0px 0",
    },
  },
};

const Portfolio = ({ classes }) => {
  return (
    <div className={classes.Section}>
      {Config.portfolio.map((item, index) => (
        <PortfolioItem key={index} {...item} />
      ))}
    </div>
  );
};

export default withStyles(styles)(Portfolio);
