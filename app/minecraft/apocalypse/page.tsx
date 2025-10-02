'use client'

import { HomeLink } from "@/app/commons";

export default function Apocalypse() {

    return (<>
        <HomeLink/>
        <div className="color-filter"/>
        <img className="bg" src="/minecraft/apocalypse.png" alt="bg" />
        <h1>APOCALYPSE MODPACK</h1>
        <div className="button-container">
            <div className="button-column">
                <a className="client-button" href="/minecraft/apocalypse/download" target="_blank" rel="noreferrer">
                    Download
                </a>
                <a className="curseforge-button" href="https://www.curseforge.com/download/app" target="_blank" rel="noreferrer">
                    <img className="curseforge-icon" src="/curseforge.svg" alt="curseforge"/>
                    needs CurseForge app
                </a>
            </div>
        </div>
    </>);

}