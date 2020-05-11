import React from "react";
import { withStyles } from "@material-ui/styles";
import PlayStore from "../assets/images/playstore.png";
import AppStore from "../assets/images/appstore.png";

const styles = {
  image: {
    width: "350px",
    height: "350px",
    backgroundSize: "cover",
    backgroundImage: (props) => "url(" + props.src + ")",

    "&:hover": {
      backgroundImage: (props) =>
        props.onHover ? "url(" + props.onHover + ")" : props.src,
    },
  },
  Item: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    border: "1px solid #eee",
    margin: "10px",
    maxWidth: "350px",

    "& h1": {
      fontSize: "24px",
      lineHeight: "1.4",
      fontWeight: "500",
      letterSpacing: ".2pt",
    },
  },
  button: {
    background: "black",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    borderColor: "black",
    fontSize: "15px",
    letterSpacing: "0.5px",
    cursor: "pointer",
    fontFamily: "acumin-pro, sans-serif",

    "&:hover": {
      background: "royalblue",
      borderColor: "royalblue",
      borderStyle: "dashed",
    },

    "&:focus": {
      outline: "none",
      borderStyle: "dashed",
    },

    "&:disabled": {
      background: "#868686",
      borderColor: "#868686",
      outline: "none",
      borderStyle: "dashed",
    },
  },
};

const PortfolioItem = ({ classes, name, url, store, appStore, playStore }) => {
  const openLinkInNewTab = (target) => {
    window.open(
      !store ? url : target === "play" ? playStore : appStore,
      "_blank"
    );
  };

  return (
    <div className={classes.Item}>
      <div className={classes.image} />
      <h1>{name}</h1>
      {store ? (
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
          <img
            onClick={() => openLinkInNewTab("play")}
            style={{ width: "50%" }}
            src={PlayStore}
            alt={"Google"}
          />
          <img
            onClick={() => openLinkInNewTab("apple")}
            style={{ width: "50%" }}
            src={AppStore}
            alt={"AppStore"}
          />
        </div>
      ) : (
        <button
          disabled={!url}
          onClick={openLinkInNewTab}
          className={classes.button}
        >
          Download
        </button>
      )}
    </div>
  );
};

export default withStyles(styles)(PortfolioItem);
