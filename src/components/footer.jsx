import { StrictMode } from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="content">
          <ul>
            <li>
              <a href="https://github.com/timdreesen">
                <img
                  className="social-logo"
                  src="/github-mark-white.svg"
                  alt="github logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
