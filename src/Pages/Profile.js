import React, { Component } from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import sizes from "../styles/sizes";
import { withStyles } from "@material-ui/styles";
import Config from "../config";

const styles = {
  Container: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 20px 40px",
    margin: "0",
    lineHeight: "1.4",
    letterSpacing: ".2pt",

    [sizes.up("md")]: {
      margin: "60px 140px",
    },
  },

  Profile: {
    display: "flex",
    flexDirection: "column",

    [sizes.up("sm")]: {
      flexDirection: "row",
    },
  },

  ProfileTitle: {
    fontSize: "28px",
    marginBottom: "20px",

    [sizes.up("sm")]: {
      width: "40%",
    },
  },

  ProfileBody: {
    lineHeight: "1.7",
    fontWeight: "500",
    fontSize: "18px",

    [sizes.up("xs")]: {
      fontSize: "20px",
    },

    [sizes.up("sm")]: {
      width: "60%",
    },
  },

  Light: {
    color: "#737780",
    fontSize: "16px",
  },

  SkillsAndInterests: {
    display: "flex",
    flexDirection: "row",

    [sizes.up("sm")]: {
      marginLeft: "40%",
    },
  },

  Skills: {
    display: "flex",
    flexDirection: "column",
    width: "50%",

    "& h4": {
      fontSize: "20px",
      fontWeight: "400",
      marginBottom: "20px",
    },

    [sizes.up("sm")]: {
      width: "40%",
    },
  },

  Interests: {
    display: "flex",
    flexDirection: "column",
    width: "50%",

    "& h4": {
      fontSize: "20px",
      fontWeight: "400",
      marginBottom: "20px",
    },

    [sizes.up("sm")]: {
      width: "60%",
    },
  },
};

class Profile extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />

        <div className={classes.Container}>
          <div className={classes.Profile}>
            <h2 className={classes.ProfileTitle}>Profile</h2>
            <div className={classes.ProfileBody}>
              {Config.profile.aboutMe.map((item, index) => (
                <p key={index} className={index !== 0 && classes.Light}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className={classes.SkillsAndInterests}>
            <div className={classes.Skills}>
              <h4>Skills</h4>
              {Config.profile.skills.map((item, index) => (
                <p key={index} className={`${classes.Light} m-8`}>
                  {item}
                </p>
              ))}
            </div>
            <div className={classes.Interests}>
              <h4>Interests</h4>
              {Config.profile.interests.map((item, index) => (
                <p key={index} className={`${classes.Light} m-8`}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
