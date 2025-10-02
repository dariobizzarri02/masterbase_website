'use client'

import { HomeLink } from "@/app/commons";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Nightly() {

    const [latestVersion, setLatestVersion] = useState("Loading...");

    useEffect(() => {
        refresh();
    }, []);

    const refresh = () => {
        axios({
            method: "get",
            url: "https://launchermeta.mojang.com/mc/game/version_manifest.json"
        })
            .then(response => {
                setLatestVersion(response.data.latest.snapshot);
            })
    }

    return (<>
        <HomeLink/>
        <div className="color-filter"/>
        <img className="bg" src="/minecraft/nightly.png" alt="bg" />
        <h1>NIGHTLY SERVER</h1>
        <h2>IP: nightly.masterbase.team</h2>
        <h2>Version: {latestVersion}</h2>
    </>);

}