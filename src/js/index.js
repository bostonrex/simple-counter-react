
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle

import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0;

setInterval(() => {

    counter = counter + 1;

    const firstNumber = Math.floor(counter % 10);
    const second = Math.floor((counter / 10) % 10);
    const third = Math.floor((counter / 100) % 10);
    const fourth = Math.floor((counter / 1000) % 10);
    const fifth = Math.floor((counter / 10000) % 10);
    const sixth = Math.floor((counter / 100000) % 10);

    ReactDOM.render(<Home first={firstNumber} second={second} third={third} fourth={fourth} fifth={fifth} sixth={sixth} />, 
    document.querySelector("#app")
    );
}, 1500);