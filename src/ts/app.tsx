import * as React from "react";
import * as ReactDOM from "react-dom";

class HelloWorld extends React.Component{
    public render(){
        return <h1>Hello World22!</h1>;
    }
}

import "../scss/styles.scss";
ReactDOM.render(<HelloWorld/>, document.querySelector("main"));
