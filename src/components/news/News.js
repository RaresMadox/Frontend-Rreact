import React from "react";
import "./News.css";
import mainImg from "./static/download.jpg";
import ImageSlider from "../slide/Slide";
function News() {
  return (
    <div>
      <div class="content">
        <h1 id="title">News</h1>
        <div class="text" id="top_article">
          <p id="main_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>

          <img id="main_img" src={mainImg} />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3 class="sub">Learn the investing terminology</h3>
        <br></br>
        <div>
          <ImageSlider />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="article-list">
          <div class="element">
            <h3 class="text">ArticleName</h3>
            <div class="box">
              <p class="text" id="summary">
                im veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
              </p>
              <img id="img_article" src={mainImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
