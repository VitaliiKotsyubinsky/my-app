import React, { Component } from "react";
import "./Main.css";
import arcticles from "../Data/articles.json";

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        {arcticles.map((item) => (
          <section>
            <h2>{item.attributes.canonicalTitle}</h2>
            <div>{item.attributes.synopsis}</div>
          </section>
        ))}
      </div>
    );
  }
}
