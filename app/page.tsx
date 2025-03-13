'use client'

import { MainTitle, NavBar, Logo, BackgroundVideo } from "@/app/commons";
import Link from "next/link";

export default function Home() {

    const links = [
        {href: "/links", title: "Links"},
        {href: "/blog", title: "Blog"},
        {href: "/minecraft", title: "Minecraft"},
        {href: "/team", title: "Team"},
        {href: "/versary", title: "Versary"},
    ];

    return (<>
        <BackgroundVideo src={process.env.NEXT_PUBLIC_MINIO_URL+"masterbase/masterbase.mp4"}/>
        <NavBar links={links}/>
        <MainTitle title="MasterBase" subtitle="Guild"/>
        <Logo/>
        <Link className="homebutton" href="/overview">Watch the Overview</Link>
        <div className="walloftext">
        <p>La MasterBase è una community nata nel lontano 2017, con progetti distribuiti su tutto il panorama gaming/nerd.</p>
        <p>Siamo presenti su una moltitudine di titoli, tra cui League of Legends, Valorant, Minecraft, OverWatch, Rocket League, Warframe e AoTTG 2.</p>
        <p>Tra i progetti portati avanti, contiamo numerosi tornei ed eventi, una lore dedicata alla community, un server di Minecraft ufficiale, una produzione musicale originale e frequenti live streaming.</p>
        <p>Inoltre, sono in arrivo tanti altri progetti, tra cui in particolare un videogioco ufficiale e un manuale GDR ambientato nel nostro universo narrativo. Vieni a trovarci!</p>
        </div>
    </>);

}