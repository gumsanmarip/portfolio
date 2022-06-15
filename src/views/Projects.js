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
const data = [
  {
    title: "Collect-All",
    info: "Marketplace and Trade space for collectibles",
    link: "https://github.com/gumsanmarip/car-clinic",
  },
  {
    title: "Car-Clinic",
    info: "Monitors your cars health",
    link: "https://github.com/gumsanmarip/car-clinic",
  },
  {
    title: "Vintage-Shop",
    info: "Shop for vintage apparel",
    link: "https://github.com/gumsanmarip/car-clinic",
  },
  {
    title: "Doc-Appointment",
    info: "health appointments experience",
    link: "https://github.com/gumsanmarip/car-clinic",
  },
  {
    title: "LandLord-Rated",
    info: "Rates landlords and rental accommodations",
    link: "https://github.com/gumsanmarip/car-clinic",
  },
];
const Projects = () => {
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

              {data.map(({ title, info, link }, index) => {
                return (
                  <div key={index} className="section">
                    <div className="title">{title}</div>
                    <small className="info">{info}</small>
                    <div className="link">{link}</div>
                  </div>
                );
              })}
            </article>
          </ProjectsScrollStyle>
        </div>
      </ProjectsStyle>
    </section>
  );
};

export default Projects;

const ProjectsStyle = styled.div`
  .title {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
  .container {
    margin: 50px 0px 50px 0px;
  }
  @media only screen and (max-width: 1080px) {
    .container {
      margin: 10px 0px 0px 0px;
      width: 100%;
    }
  }
`;
const ProjectsScrollStyle = styled.div`
  .scroller {
    height: 600px;
    background-color: #bbdbf7;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 25px;
    margin: 10px 0px 10px 0px;
  }
  .section {
    padding: 2rem;
    border-radius: 2rem;
    border-radius: 20px;
    height: 60%;
    width: 40%;
    margin: 10px 25px 10px 25px;
    background: #dbd1b4;
    flex-shrink: 0;
    scroll-snap-align: center;
  }
  .title {
  }
  .info {
    color: var(--color-light);
    font-weight: 300;
    display: block;
    width: 80%;
    margin 0.8rem auto 0;
  }
  .link {
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
    .scroller {
      height: auto;
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
