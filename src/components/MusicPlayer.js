import React, { Component } from "react"
import {withStyles} from "@material-ui/core";

class MusicPlayer extends React.Component {
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    render() {
        console.log("render")
        return (
            <div>
                <audio className="audio-element">
                    <source src="https://vistairsysoncascadecom-my.sharepoint.com/personal/oli_drake_vistair_com/Documents/Frank%20Sinatra%20-%20Come%20fly%20with%20me.mp3"></source>
                </audio>
            </div>
        )

    }

}
export default (MusicPlayer);
