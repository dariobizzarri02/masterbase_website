'use client'

import Link from 'next/link';

export default function Mc() {
    //two buttons: download forge client and download quilt client

    return (
        <div>
            <div className="color-filter"/>
            <img className="bg" src="/minecraft.png" alt="bg" />
            <h3>the official MasterBase Minecraft server</h3>
            <h1>MASTERCRAFT VANILLA</h1>
            <h2>IP: mc.masterbaseguild.it</h2>
            <h2>Version: 1.20.1</h2>
            <Link className='map-button' href="/map">
                View Map
            </Link>
            <div className="button-container">
                <div className="button-column">
                    <a className="client-button" href="https://www.mediafire.com/file/yb4sbp7747v33s5/Forge-Client-1.20.1-47.1.81-1.0.zip/file" target="_blank" rel="noreferrer">
                        Download Forge Client
                    </a>
                    <a className="curseforge-button" href="https://www.curseforge.com/download/app" target="_blank" rel="noreferrer">
                        <img className="curseforge-icon" src="/curseforge.svg" alt="curseforge"/>
                        needs CurseForge app
                    </a>
                </div>
                <div className="button-column">
                    <a className="client-button"href="https://www.mediafire.com/file/exxok4aok6t6szm/Quilt-Client-1.20.1-0.22.0-1.0.mrpack/file" target="_blank" rel="noreferrer">
                        Download Quilt Client
                    </a>
                    <a className="modrinth-button" href="https://modrinth.com/app" target="_blank" rel="noreferrer">
                        <img className="modrinth-icon" src="/modrinth.svg" alt="modrinth"/>
                        needs Modrinth app
                    </a>
                </div>
            </div>
        </div>
    );
}