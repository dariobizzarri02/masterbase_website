'use client'

import { HomeLink, Video } from "@/app/commons";

export default function Overview() {

    const links = [
        {href: "/links", title: "Link Tree"},
        {href: "/blog", title: "Blog"},
        {href: "/minecraft", title: "MasterCraft"},
        {href: "/team", title: "Meet the Team"},
    ];

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
        <Video src={process.env.NEXT_PUBLIC_BACKEND_ENDPOINT+"/static/masterbase.mp4"}/>
        <button id="play" className="playbutton" onClick={handlePlay}>Play</button>
    </>);

}