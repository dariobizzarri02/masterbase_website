'use client'

import { MainTitle, NavBar, Logo, BackgroundVideo } from "@/app/commons";
import Link from "next/link";

export default function Home() {

    const links = [
        {href: "/links", title: "Links", newtab: false},
        {href: "/blog", title: "Blog", newtab: false},
        {href: "/minecraft", title: "Minecraft", newtab: false},
        {href: "/daimon", title: "Daimon", newtab: true},
        {href: "/team", title: "Team", newtab: false},
        /* {href: "/versary", title: "Versary", newtab: false}, */
    ];

    return (<>
        <BackgroundVideo src={process.env.NEXT_PUBLIC_MINIO_URL+"masterbase/masterbase.mp4"}/>
        <NavBar links={links}/>
        <MainTitle title="MasterBase" subtitle="Guild"/>
        <Logo/>
        <div className="separator"/>
        <Link className="homebutton" href="/overview">Watch the Overview</Link>
        <div className="walloftext">
        <p>La MasterBase è una community nata nel lontano 2017, con progetti distribuiti su tutto il panorama gaming/nerd.</p>
        <p>Siamo presenti su una moltitudine di titoli, tra cui Minecraft, League of Legends, Marvel Rivals, Valorant, Rocket League, Warframe, OverWatch e AoTTG 2.</p>
        <p>Tra i progetti portati avanti, contiamo numerosi tornei ed eventi, una lore collaborativa, un server di Minecraft ufficiale, produzioni musicali originali e frequenti live streaming.</p>
        <p>Inoltre, sono in arrivo tanti altri progetti, tra cui in particolare un videogioco ufficiale e un manuale GDR ambientato nel nostro universo narrativo. Vieni a trovarci!</p>
        </div>
        <Link className="homebutton" href="/links/discord" target="_blank" rel="noreferrer">Join our Discord</Link>
        <div className="footer"/>
    </>);

}