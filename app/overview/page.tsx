'use client'

import { HomeLink, Video } from "@/app/commons";
import { useEffect } from "react";

export default function Overview() {

    useEffect(() => {
        const videoElement = document.querySelector("video");
        if (!videoElement) {
            return;
        }
        videoElement.volume = 0.2;
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
        const video = document.querySelector("video");
        if (!video) {
            return;
        }
        video.volume = 0.5;
        video.play();
        const button = document.getElementById("play");
        if (button) {
            button.style.display = "none";
        }
    }

    return (<>
        <HomeLink/>
        <Video src={process.env.NEXT_PUBLIC_MINIO_URL+"masterbase/2025.mp4"}/>
        <button id="play" className="playbutton" onClick={handlePlay}>Play</button>
    </>);

}