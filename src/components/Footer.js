// includes social icon
import React from "react"
// import twitterLogo from "../images/twitter.svg"
// import codepenLogo from "../images/codepen.svg"
// import githubLogo from "../images/github.svg"

// export default function Footer() {
//     return (
//         <div className="footer-container">
//             <a href="https://twitter.com/ToastyBoyPro" target="_blank">
//                 <img src={twitterLogo} className="social--icon" alt="Twitter Icon" />
//             </a>
//             <a href="https://codepen.io/ToastyBoyPro" target="_blank">
//                 <img src={codepenLogo} className="social--icon" alt="Codepen Icon" />
//             </a>
//             <a href="https://github.com/ToastyBoyPro" target="_blank">
//                 <img src={githubLogo} className="social--icon" alt="GitHub Icon" />
//             </a>
//         </div>
//     );
// }

export default function Footer() {
    return (
        <div className="footer-container">
            <ul>
                <li>
                    <a href="https://twitter.com/ToastyBoyPro" target="_blank">
                        <i className="fab fa-twitter-square" id="links"></i>
                    </a>
                </li>
                <li>
                    <a href="https://codepen.io/ToastyBoyPro" target="_blank">
                        <i className="fab fa-codepen" id="links"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ToastyBoyPro" target="_blank">
                        <i className="fab fa-github" id="links"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}