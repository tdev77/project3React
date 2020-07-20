import React from "react";
// import { Footer } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h6>
        <a href="leisureforyou.com">Leisureforyou.com</a>
      </h6>
      <div className="socials">
        <table
          width={20}
          align="center"
          border={0}
          cellPadding={0}
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td
                style={{
                  "font-family": "Arial, sans-serif",
                  "font-size": "12px",
                  "font-weight": "bold",
                }}
              >
                <a href="http://www.facebook.com/" style={{ color: "#ffffff" }}>
                  <img
                    src="icons8-facebook-48.png"
                    alt="Facebook"
                    width={35}
                    height={35}
                    style={{ display: "inline-block" }}
                    border={0}
                  />
                </a>
              </td>
              <td
                style={{
                  "font-family": "Arial, sans-serif",
                  "font-size": "12px",
                  "font-weight": "bold",
                }}
              >
                <a href="http://www.twitter.com/" style={{ color: "#ffffff" }}>
                  <img
                    src="icons8-twitter-squared-48.png"
                    alt="Twitter"
                    width={35}
                    height={35}
                    style={{ display: "inline-block" }}
                    border={0}
                  />
                </a>
              </td>
              <td
                style={{
                  "font-family": "Arial, sans-serif",
                  "font-size": "12px",
                  "font-weight": "bold",
                }}
              >
                <a href="http://instagram.com/" style={{ color: "#ffffff" }}>
                  <img
                    src="icons8-instagram-48.png"
                    alt="LinkedIn"
                    width={35}
                    height={35}
                    style={{ display: "inline-block" }}
                    border={0}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
