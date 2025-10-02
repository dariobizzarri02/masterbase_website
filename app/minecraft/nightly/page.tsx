'use client'

import Link from 'next/link';
import { HomeLink } from "@/app/commons";

export default function Minecraft() {

    const latestVersion = fetch("https://launchermeta.mojang.com/mc/game/version_manifest.json")
        .then(res => res.json())
        .then(data => data.latest.snapshot);

    return (<>
        <HomeLink/>
        <div className="color-filter"/>
        <img className="bg" src="/nightly.png" alt="bg" />
        <h1>NIGHTLY SERVER</h1>
        <h2>IP: nightly.masterbase.team</h2>
        <h2>Version: {latestVersion}</h2>
    </>);

}