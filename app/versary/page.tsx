'use client'

import { HomeLink, BackgroundVideo, NavBar } from "@/app/commons";

export default function Overview() {

    const links = [
        {href: "/", title: "Home"},
        {href: "/versary/subscribe", title: "Subscribe"},
        {href: "/versary/subscriptions", title: "Guests"},
        {href: "/links/igreggio", title: "Instagram"},
    ];

    return (<>
        <HomeLink/>
        <img className="bg" src="/versary.jpg" alt="background"/>
        <NavBar links={links}/>
        <h1 className="title">VERSARY 2024</h1>
        <h2>Celebrating 7 years of MasterBase</h2>
        <p className="walloftextv">
            La MasterBase compie 7 anni! L&apos;appuntamento è sempre al solito posto, dal 21 al 22 settembre 2024. Per maggiori informazioni, contattateci su Instagram.
        </p>
    </>);

}