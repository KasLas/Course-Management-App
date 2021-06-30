import React from React;
import { render } from "react-dom";

function Hi() {
    return <p>Hi!</p>
}

render(<Hi/>, document.getElementById("app"));