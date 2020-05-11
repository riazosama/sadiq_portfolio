import React from "react";
import { withStyles } from "@material-ui/styles";
import sizes from "../styles/sizes";
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
