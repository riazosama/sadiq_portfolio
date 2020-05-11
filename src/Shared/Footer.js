import React from "react";
import { withStyles } from "@material-ui/styles";
import sizes from "./../styles/sizes";
import Config from "../config";

const styles = {
  Footer: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 20px 40px",

    [sizes.up("xs")]: {
      padding: "40px 20px 0",
    },

    [sizes.up("lg")]: {
      padding: "60px 160px 0",
    },
  },
  ContactInfo: {
    display: "flex",
    flexDirection: "column",
    fontSize: "16px",
    width: "fit-content",

    "& a": {
      paddingRight: "10px",
      textDecoration: "none",
      borderBottom: "1px solid #e6e6e6",
      fontWeight: "300",
      lineHeight: "1.7",
      letterSpacing: ".2pt",
      color: "black",
    },

    [sizes.up("xs")]: {
      marginBottom: "20px",
    },
  },
  Contact: {
    fontSize: "16px",
    marginBottom: "20px",
    paddingTop: "20px",
    borderTop: "1px solid #eee",
    color: "royalblue",
  },
  CopyRight: {
    padding: "40px 20px 40px",

    "& p": {
      lineHeight: "1.7",
      letterSpacing: ".2pt",
      color: "#b6b9bf",
      fontSize: "14px",
    },

    [sizes.up("xs")]: {
      padding: "40px 20px 0",
    },

    [sizes.up("lg")]: {
      padding: "60px 160px 0",
    },
  },
};

const Footer = ({ classes }) => {
  return (
    <div>
      <div className={classes.Footer}>
        <p className={classes.Contact}>Contact Me</p>

        <div className={classes.ContactInfo}>
          <a href={`mailto:${Config.mail}`}>{Config.mail}</a>
          <a href={`tel:${Config.phone}`}>{Config.phone}</a>
        </div>
      </div>

      <div className={classes.CopyRight}>
        <p>
          © {new Date().getUTCFullYear()} {Config.title}
        </p>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
