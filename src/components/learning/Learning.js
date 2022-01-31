import "./Learning.css";
import LearningImage from "./static/fx3.jpg";
import React from "react";

import ImageSlider from "../slide/Slide";
function Learning() {
  return (
    <div>
      <div class="content">
        <h1 class="learning-title">Learning with us</h1>
        <br></br>

        <div class="box-1">
          <div class="imgBox">
            <img src={LearningImage} alt="LearningImage" />
          </div>

          <div>
            <p class="text" id="text-1">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
        <br></br>
        <div class="content-2">
          <p class="text">
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains."
          </p>
        </div>

        <div class="vertical-center">
          <a class="register" href="/Register">
            <button>Register</button>
          </a>
        </div>

        <h2 class="sub-title">
          Free forex trading online courses for beginners
        </h2>
        <br></br>
        <h3 class="sub">Learn the investing terminology</h3>
        <div>
          <ImageSlider />
        </div>
        <br></br>
        <h3 class="sub">Learn the investing basic</h3>
        <div>
          <ImageSlider />
        </div>
        <br></br>
        <h3 class="sub">Create an investment plan</h3>
        <div>
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default Learning;
