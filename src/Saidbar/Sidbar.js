import React, { Component } from "react";
import "./Sidbar.css";
import arcticles from "../Data/articles.json";

export default class Sidbar extends Component {
  render() {
    return (
      <div className="Sidebar">
        {arcticles.map((item) => (
          <img src={item.posterImage.original} alt="" />
        ))}
      </div>
    );
  }
}
