import React from "react";
import { withStyles } from "@material-ui/styles";
import sizes from "./../styles/sizes";
import Config from "../config";

const styles = {
  Section: {
    padding: "40px 20px 40px",
    display: "flex",

    [sizes.up("xs")]: {
      padding: "40px 20px 0",
    },
    [sizes.up("lg")]: {
      padding: "60px 160px 0",
    },
  },

  Container: {
    display: "flex",
    flexDirection: "column",

    "& h1": {
      fontSize: "24px",
      lineHeight: "1.4",
      fontWeight: "500",
      letterSpacing: ".2pt",
    },

    "& h3": {
      fontSize: "16px",
      lineHeight: "1.8",
      letterSpacing: ".2pt",
      color: "#737780",
      fontWeight: "200",
    },

    [sizes.up("xs")]: {
      margin: "0 auto",
      width: "60%",
      justifyContent: "center",

      "& h1": {
        fontSize: "28px",
      },

      "& h3": {
        fontSize: "18px",
      },
    },

    [sizes.up("sm")]: {
      "& h1": {
        fontSize: "35px",
      },

      "& h3": {
        fontSize: "18px",
      },
    },
  },

  LinkedIn: {
    color: "#0077b4",
  },
};

const Opening = ({ classes }) => {
  return (
    <div className={classes.Section}>
      <div className={classes.Container}>
        <h1>
          I'm a Unity Game Developer who loves to code and communicate, always
          ready to test my limits
        </h1>

        <h3>
          Browse my profile on
          <a
            target={"_blank"}
            href={Config.opening.linkedIn}
            className={classes.LinkedIn}
          >
            {" "}
            LinkedIn
          </a>
          , checkout below the games I worked on in the past.
        </h3>
      </div>
    </div>
  );
};

export default withStyles(styles)(Opening);
