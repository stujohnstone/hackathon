import React, { Component } from "react"
import {withStyles} from "@material-ui/core";

class MusicPlayer extends React.Component {
    componentDidMount() {
        console.log("mounted");
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }




    render() {
        console.log("render")
        return (
            <div>
                <audio className="audio-element">
                    <source src="/dist/resources/Frank Sinatra-Comeflywithme.mp3"></source>
                </audio>
            </div>
        )

    }

}
export default (MusicPlayer);
