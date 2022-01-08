
import { Component } from "react";
import Navigation from "../components/navBar"
import PalmTree from "../components/palmTree"
export default class tree extends Component {

    componentDidMount() {
        const tree = new PalmTree(200, 300);
        tree.draw("svg")
    }

    render() {

        return (
            <>
                <Navigation title="WAT" />

                <h1>Welcome to the musical octo palm tree</h1>
                <div id="svg">

                </div>
                <p> why a palm tree?</p>
            </>
        )
    }
}