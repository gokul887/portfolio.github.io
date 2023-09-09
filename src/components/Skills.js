import React from "react";
import "./styles/Skills.css";
import { ReactComponent as ServerSvg } from "../img/server.svg";
import { ReactComponent as DSSvg } from "../img/ds.svg";
import { ReactComponent as FrontendSvg } from "../img/frontend.svg";

const skillsCards = [
  {
    classname: "frontend-card",
    img: <FrontendSvg />,
    title: "Frontend Development",
    desc: "I enjoy creating beautiful and interactive user interface.",
    tools: "HTML/CSS, ReactJS, Sass",
  },
  {
    classname: "backend-card",
    img: <ServerSvg />,
    title: "Backend Development",
    desc: "I like crafting the magic that powers applications.",
    tools: "Express, NodeJS, Java, Flask, Django, MongoDB, Firebase",
  },
  {
    classname: "ds-card",
    img: <DSSvg />,
    title: "Data Science",
    desc: "I like exploring insights and patterns with data using code.",
    tools:
      "Python, Numpy, Pandas, Seaborn, MatplotLib, SKLearn, Scipy, Tensorflow",
  },
];
const Skills = () => {
  return (
    <div className="skills-container section-container">
      <div className="skills-backdrop-2">
        <div className="skills-card-section">
          {skillsCards.map((skillCard) => (
            <div
              key={skillCard.classname}
              className={"skills-card " + skillCard.classname}
            >
              <div className="svg">{skillCard.img}</div>
              <div className="skills-content">
                <h4>{skillCard.title}</h4>
                <p className="skills-desc">{skillCard.desc}</p>
                <h6>Tools I use:</h6>
                <p className="skills-tools">{skillCard.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
