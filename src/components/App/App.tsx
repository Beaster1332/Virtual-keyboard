import React from "react";
import KeyboardContainer from "../Keyboard/KeyboardContainer";
import classes from "./App.module.css";

const App = () => {
    return <div className={classes.appContainer}>
        <KeyboardContainer />
    </div>;
};

export default App;
