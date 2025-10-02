'use client'

import Link from 'next/link';
import { HomeLink } from "@/app/commons";

export default function Vanilla() {

    return (<>
        <HomeLink/>
        <div className="color-filter"/>
        <img className="bg" src="/minecraft/vanilla.png" alt="bg" />
        <h1>VANILLA SERVER</h1>
        <h2>IP: mc.masterbase.team</h2>
        <h2>Version: 1.21.4</h2>
        <Link className='map-button' href="/minecraft/map">
            View Map
        </Link>
        <div className="button-container">
            <div className="button-column">
                <a className="client-button" href="/minecraft/vanilla/client">
                    Download Optional Modpack
                </a>
            </div>
        </div>
    </>);

}