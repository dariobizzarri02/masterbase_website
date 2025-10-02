'use client'

import { HomeLink } from "@/app/commons";

export default function Minecraft() {

    return (<>
        <HomeLink/>
        <div className="color-filter"/>
        <img className="bg" src="/classic.png" alt="bg" />
        <h1>CLASSIC MODPACK</h1>
        <div className="button-container">
            <div className="button-column">
                <a className="client-button" href="/minecraft/modpacks/classic" target="_blank" rel="noreferrer">
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