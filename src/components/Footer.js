import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="a2a_kit a2a_kit_size_32 a2a_default_style icons-footer">
        <a className="a2a_button_copy_link">Copy Link</a>
      </div>
      <div className="text-footer">
        <p>
          Created by{" "}
          <a
            href="https://zurda.github.io/one-page-website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michal Weizman
          </a>
          <br />
          This site's code is available on{" "}
          <a
            href="https://github.com/zurda/github-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
