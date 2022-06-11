import React, { useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// function scrollToNextPage() {
//   gallery_scroller.scrollBy(gallery_item_size, 0);
// }
// function scrollToPrevPage() {
//   gallery_scroller.scrollBy(-gallery_item_size, 0);
// }

// function getCarouselPositions() {
//   carouselPositions = [];
//   document.querySelectorAll("#container div").forEach(function (div) {
//     carouselPositions.push([div.offsetTop, div.offsetTop + div.offsetHeight]); // add to array the positions information
//   });
//   halfContainer = document.querySelector("#container").offsetHeight / 2;
// }

// getCarouselPositions(); // call it once

function Projects(props) {
  return (
    <section id="projects">
      <ProjectsStyle>
        <div className="title">Projects</div>
        <div className="container">
          <ProjectsScrollStyle>
            <article class="scroller">
              <button className="left">
                <div className="left-icon">
                  <ChevronLeftIcon fontSize="medium" />
                </div>
              </button>
              <button className="right">
                <div className="right-icon">
                  <ChevronRightIcon fontSize="medium" />
                </div>
              </button>
              <div className="section">
                <div className="title">Project Name and Number</div>
                <div className="info">Github Link, Images, Project summary</div>
                <div className="picture">Pictures</div>
              </div>
              <div className="section">
                <div className="title">Project Name and Number</div>
                <div className="info">Github Link, Images, Project summary</div>
                <div className="picture">Pictures</div>
              </div>
              <div className="section">
                <div className="title">Project Name and Number</div>
                <div className="info">Github Link, Images, Project summary</div>
                <div className="picture">Pictures</div>
              </div>
              <div className="section">
                <div className="title">Project Name and Number</div>
                <div className="info">Github Link, Images, Project summary</div>
                <div className="picture">Pictures</div>
              </div>
              <div className="section">
                <div className="title">Project Name and Number</div>
                <div className="info">Github Link, Images, Project summary</div>
                <div className="picture">Pictures</div>
              </div>
            </article>
          </ProjectsScrollStyle>
        </div>
      </ProjectsStyle>
    </section>
  );
}

export default Projects;

const ProjectsStyle = styled.div`
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
  .container {
    margin: 10px 0px 100px 0px;
  }
  @media only screen and (max-width: 1080px) {
    .container {
      margin: 10px 0px 0px 0px;
    }
  }
`;
const ProjectsScrollStyle = styled.div`
  .scroller {
    background-color: #f4e1e1;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 25px;
    margin: 10px 0px 10px 0px;
  }
  .section {
    height: 400px;
    width: 600px;
    margin: 10px 25px 10px 25px;
    background: #dbd1b4;
    flex-shrink: 0;
    scroll-snap-align: center;
  }
  .left {
    left: 40px;
    position: absolute;
    width: 106px;
    background: none;
    transition: all 0.25s ease-in 0s;
    opacity: 0.4;
    border: 0px;
    outline: none;
    color: var(--palette-actionable, #333);
    font-size: 26px;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .left-icon {
    height: 30px;
    width: 30px;
    background-color: #fbf4f4;
    border-radius: 20px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .right {
    right: 40px;
    position: absolute;
    width: 106px;
    background: none;
    transition: all 0.25s ease-in 0s;
    opacity: 0.4;
    border: 0px;
    outline: none;
    color: var(--palette-actionable, #333);
    font-size: 26px;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .right-icon {
    height: 30px;
    width: 30px;
    background-color: #fbf4f4;
    border-radius: 20px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  @media only screen and (max-width: 1080px) {
    .scroller {
      scroll-padding: 0;
      margin: 1rem 0rem 1rem 0px;
    }
    .section {
      height: 350px;
      width: auto;
      margin: 10px 10px 10px 10px;
    }
    .left {
      display: none;
    }
    .left-icon {
      display: none;
    }
    .right {
      display: none;
    }
    .right-icon {
      display: none;
    }
  }
`;
