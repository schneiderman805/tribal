import React from "react";
import { withRouter } from "react-router-dom";



export default function withRouter() {
    this.props.history.push("/some/Path");
}
