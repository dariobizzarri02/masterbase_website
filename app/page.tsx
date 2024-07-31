'use client'

import { MainTitle, NavBar, Logo, BackgroundVideo } from "@/app/commons";
import Link from "next/link";

export default function Home() {

    const links = [
        {href: "/links", title: "Link Tree"},
        {href: "/blog", title: "Blog"},
        {href: "/minecraft", title: "MasterCraft"},
        {href: "/team", title: "Meet the Team"},
    ];

    return (<>
        <BackgroundVideo src={process.env.NEXT_PUBLIC_S3_ENDPOINT+"masterbase.mp4"}/>
        <NavBar links={links}/>
        <MainTitle title="MasterBase" subtitle="Guild"/>
        <Logo/>
        <Link className="homebutton" href="/overview">Watch the Overview</Link>
        <p className="walloftext">
        La MasterBase è la Space Hall il cui equipaggio è costituito dai Masters, straordinari guerrieri dalle grandi capacità. Essi sono dotati di armamenti e attrezzature di livello mai visto prima, le cosiddette MasterGear, e si occupano di mantenere l&apos;ordine in qualunque settore spaziale si ritrovino ad attraversare. La Base è costituita da moduli geometrici uniti tra loro con corridoi e ascensori, ed è provvista di scudi speciali che possono proteggerla da qualsiasi lato. Il modulo centrale ospita inoltre un motore a curvatura e un simulatore gravitazionale, che lavora in simbiosi con l&apos;architettura della struttura. La Base è inoltre provvista di un ampio spazioporto, che alloggia i velivoli che costituiscono la piccola ma potente flotta della MasterBase. L&apos;equipaggio della Base, i cosiddetti Master, trascorre solitamente la maggior parte della propria vita a bordo, allenandosi e addestrando le nuove reclute. Tuttavia, non tutti i Masters combattono: vi sono anche brillanti ingegneri, ricercatori e uomini di scienza, custodi degli incredibili segreti che le MasterGear nascondono. Al suo interno, la Base è completamente attrezzata per ogni genere di necessità: palestre, zone di svago, mense, dormitori, laboratori, depositi e uffici ne costituiscono gli interni.
        </p>
    </>);

}