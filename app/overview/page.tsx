'use client'

import { HomeLink, Video } from "@/app/commons";
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
        <Video src={process.env.NEXT_PUBLIC_S3_ENDPOINT+"masterbase.mp4"}/>
        <button id="play" className="playbutton" onClick={handlePlay}>Play</button>
    </>);

}