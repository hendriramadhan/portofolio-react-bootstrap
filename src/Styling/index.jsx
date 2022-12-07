import React from "react";
import { Bootstrap } from "./Bootstrap";
import About from "./Bootstrap/about";
import Experience from "./Bootstrap/experience";
import Profile from "./Bootstrap/profile";

export default class Styling extends React.Component {
  render() {
    return (
      <div>
        <Bootstrap />
        <Profile />
        <About />
        <Experience />
      </div>
    );
  }
}
