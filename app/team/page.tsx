'use client'

import { HomeLink, TeamItem } from "@/app/commons";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Team() {

    const [team, setTeam] = useState<any[]>([]);

    useEffect(() => {
        refresh();
    }, []);

    const refresh = () => {
        axios({
            method: "get",
            url: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT+"/team"
        })
            .then(response => {
                setTeam(response.data);
            })
    }

    return (<>
        <HomeLink/>
        <h1>Meet the Team</h1>
        {team.map((item) => (
            <TeamItem key={item.id} item={item}/>
        ))}
        <Link className="button" href="/team/join">Join Us</Link>
    </>);

}