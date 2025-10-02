'use client'

import Link from 'next/link';
import { HomeLink } from "@/app/commons";

export default function Minecraft() {

    const cards = [
        { title: "Vanilla Server", screen: "/vanilla.png", link: "/minecraft/vanilla" },
        { title: "Nightly Server", screen: "/nightly.png", link: "/minecraft/nightly" },
        { title: "Vanilla Client", screen: "/vanillaclient.png", link: "/minecraft/vanilla/client" },
        { title: "Nostalgia Client", screen: "/nostalgia.png", link: "/minecraft/nostalgia" },
        { title: "Combat Client", screen: "/combat.png", link: "/minecraft/combat" },
        { title: "Classic Modpack", screen: "/classic.png", link: "/minecraft/classic" },
        { title: "Apocalypse Modpack", screen: "/apocalypse.png", link: "/minecraft/apocalypse" },
        { title: "Aincrad Modpack", screen: "/aincrad.png", link: "/minecraft/aincrad" },
    ]

    return (<>
        <HomeLink/>
        <div className="color-filter"/>
        <img className="bg" src="/minecraft.png" alt="bg" />
        <h1>MASTERCRAFT</h1>

        <div className="cards">
            {cards.map((card) => (
                <Link key={card.title} href={card.link} className="card">
                    <img src={card.screen} alt={card.title} />
                    <h2>{card.title}</h2>
                </Link>
            ))}
        </div>
    </>);

}