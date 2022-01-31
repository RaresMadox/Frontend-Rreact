import React from "react";
import "./Navbar.css";
import logo from "./static/Logo3.png";
function Navbar() {
  return (
    <div>
      <header class="all">
        <a href="\Home">
          <body>
            <div class="sign">
              <span class="fast-flicker">Fin</span>clerk
            </div>
          </body>
        </a>
        <nav>
          <ul class="nav">
            <li>
              <a id="markets" href="\Markets">
                Markets
              </a>
            </li>

            <li>
              <a id="news" href="\News">
                News
              </a>
            </li>
            <li>
              <a id="company" href="\Company">
                Company
              </a>
            </li>
            <li>
              <a id="learning" href="\Learning">
                Learning
              </a>
            </li>
          </ul>
        </nav>
        <a class="signIn" href="\SignIn">
          <button>Sign In</button>
        </a>
      </header>
    </div>
  );
}

export default Navbar;
