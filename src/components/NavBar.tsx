import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import theme from "../styles/theme";
import logo from "../assets/cyslogo.jpg";
import usFlag from "../assets/united-states.svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const useStyles = makeStyles({
  root: {
    background: theme.palette.background.paper,
    borderRadius: 3,
    border: 0,
    color: theme.palette.primary.main,
    height: "100%",
    position: "static",
  },
  logo: {
    height: "100%",
    width: "10%",
    padding: "10px",
  },
  flag: {
    height: "40px",
    width: "100%",
    cursor: "pointer",
  },
  headerContainer: { display: "flex" },
  tabs: { alignSelf: "flex-end" },
  tabText: {
    fontSize: "22px",
  },
});

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const lang = "En"; //TODO: hangle languages

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.root}>
      <div className={classes.headerContainer}>
        {/* TODO: icon component */}
        <img alt="C&S logo" src={logo} className={classes.logo} />
        <Tabs
          className={classes.tabs}
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
        >
          <Tab
            label="Home"
            className={classes.tabText}
            onClick={() => history.replace("/")}
          />
          <Tab
            label="Company"
            className={classes.tabText}
            onClick={() => history.replace("/company")}
          />
          <Tab
            label="Contact"
            className={classes.tabText}
            onClick={() => history.replace("/contact")}
          />
          <Tab
            label="News"
            className={classes.tabText}
            onClick={() => history.replace("/news")}
          />
          <Tab
            label="Products"
            className={classes.tabText}
            onClick={() => history.replace("/products")}
          />
          <Tab
            label="Services"
            className={classes.tabText}
            onClick={() => history.replace("/services")}
          />
          <img
            alt="Language"
            src={lang === "En" ? usFlag : "Spanish"}
            className={classes.flag}
          />
        </Tabs>
      </div>
    </AppBar>
  );
};

export default NavBar;
