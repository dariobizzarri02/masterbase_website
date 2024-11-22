'use client'

import { HomeLink, YouTubeVideo } from "@/app/commons";
import { useEffect } from "react";

export default function Overview() {

    useEffect(() => {
        const videoElement = document.querySelector("video");
        const playButton = document.getElementById("play");
        if (videoElement && playButton) {
            const handlePlayB = () => {
                playButton.style.display = "none";
            }
            videoElement.addEventListener("play", handlePlayB);
            if (videoElement.paused) {
                playButton.style.display = "block";
            }

            return () => {
                videoElement.removeEventListener("play", handlePlayB);
            }
        }
    }
    , []);

    function handlePlay() {
        document?.querySelector("video")?.play();
        //hide button
        const button = document.getElementById("play");
        if (button) {
            button.style.display = "none";
        }
    }

    return (<>
        <HomeLink/>
        <YouTubeVideo src={"_cgu1AI6AZo"}/>
        <button id="play" className="playbutton" onClick={handlePlay}>Play</button>
    </>);

}