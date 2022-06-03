import React, { useState } from "react";
import styled from "styled-components";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsStyle>
        <article class="scroller">
          <section>
            <h2>Project1</h2>
            <p>Github Link, Images, Project summary</p>
          </section>
          <section>
            <h2>Project2</h2>
            <p>Github Link, Images, Project summary</p>
          </section>
          <section>
            <h2>Project3</h2>
            <p>Github Link, Images, Project summary</p>
          </section>
          <section>
            <h2>Project4</h2>
            <p>Github Link, Images, Project summary</p>
          </section>
          <section>
            <h2>Project5</h2>
            <p>Github Link, Images, Project summary</p>
          </section>
        </article>
      </ProjectsStyle>
    </div>
  );
}

const ProjectsStyle = styled.div`
  .scroller {
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 25px;
    margin: 25px 100px 25px 100px;
  }
  .scroller section {
    height: 400px;
    width: 400px;
    margin: 25px 40px 25px 40px;
    background: gray;
    margin-right: 5px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
  @media only screen and (max-width: 1080px) {
    .scroller {
    }
    .scroller section {
      margin: 25px 200px 25px 200px;
    }
  }
`;
export default Projects;
