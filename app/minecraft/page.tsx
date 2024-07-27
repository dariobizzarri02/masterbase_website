'use client'

import Link from 'next/link';
import { HomeLink } from "@/app/commons";

export default function Minecraft() {

    return (<>
        <HomeLink/>
        <div className="color-filter"/>
        <img className="bg" src="/minecraft.png" alt="bg" />
        <h1>MASTERCRAFT</h1>
        <h2>IP: mc.masterbaseguild.it</h2>
        <h2>Version: 1.20.1</h2>
        <Link className='map-button' href="/map">
            View Map
        </Link>
        <div className="button-container">
            <div className="button-column">
                <a className="client-button"href="https://www.mediafire.com/file/exxok4aok6t6szm/Quilt-Client-1.20.1-0.22.0-1.0.mrpack/file" target="_blank" rel="noreferrer">
                    Download Fabric Client
                </a>
                <a className="modrinth-button" href="https://modrinth.com/app" target="_blank" rel="noreferrer">
                    <img className="modrinth-icon" src="/modrinth.svg" alt="modrinth"/>
                    needs Modrinth app
                </a>
            </div>
        </div>
    </>);

}