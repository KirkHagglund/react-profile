import React from "react";
import "../styles/portfolio.css";
import Button from 'react-bootstrap/Button';

export default function Portfolio() {
  return (
    <div>
      <h1 id="project-title">Past Projects</h1>
      <div className="project-container">
        <div id="countries" className="project-card">
          <a href="https://github.com/KirkHagglund/kmm-countries">
              <Button id="btn">GitHub Repo
            </Button>
          </a>
          <a href="https://kirkhagglund.github.io/kmm-countries/">
            <Button id="btn">Countries of the World</Button>
          </a>
        </div>

        <div id="cookbook" className="project-card">
          <a href="https://github.com/Connor812/Cassie-s-Cookbook.git">
            <Button id="btn">GitHub Repo
            </Button>
          </a>
          <a href="https://project2-the-recipe-website.herokuapp.com/">
            <Button id="btn">Cassie's Cookbook</Button>
          </a>
        </div>

        <div id="kwiz" className="project-card">
          <a href="https://github.com/KirkHagglund/kirks-kwiz">
            <Button id="btn">GitHub Repo
            </Button>
          </a>
          <a href="https://kirkhagglund.github.io/kirks-kwiz/">
            <Button id="btn">Kirk's Kwiz</Button>
          </a>
        </div>

        <div id="editor" className="project-card">
          <a href="https://github.com/KirkHagglund/just-another-text-editor">
            <Button id="btn">GitHub Repo
            </Button>
          </a>
          <a href="https://obscure-island-13734.herokuapp.com/">
            <Button id="btn">PWA Text Editor</Button>
          </a>
        </div>

        <div id="first-portfolio" className="project-card">
          <a href="https://github.com/KirkHagglund/kirk-hagglunds-portfolio">
            <Button id="btn">GitHub Repo
            </Button>
          </a>
          <a href="https://kirkhagglund.github.io/kirk-hagglunds-portfolio/">
            <Button id="btn">Original Portfolio</Button>
          </a>
        </div>

        <div id="arkaterra" className="project-card">
          <a href="https://github.com/KirkHagglund/arkaterra1">
            <Button id="btn">GitHub Repo
            </Button>
          </a>
          <a href="https://www.arkaterra.com/">
            <Button id="btn">Arkaterra Website</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
