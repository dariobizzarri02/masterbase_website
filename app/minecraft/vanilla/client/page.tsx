'use client'

import { HomeLink } from "@/app/commons";

export default function VanillaClient() {

    return (<>
        <HomeLink/>
        <div className="color-filter"/>
        <img className="bg" src="/minecraft/vanillaclient.png" alt="bg" />
        <h1>VANILLA CLIENT</h1>
        <div className="button-container">
            <div className="button-column">
                <a className="client-button" href="/minecraft/vanilla/client/download" target="_blank" rel="noreferrer">
                    Download
                </a>
                <a className="modrinth-button" href="https://modrinth.com/app" target="_blank" rel="noreferrer">
                    <img className="modrinth-icon" src="/modrinth.svg" alt="modrinth"/>
                    needs Modrinth app
                </a>
            </div>
        </div>
    </>);

}