'use client'

import { HomeLink, JobsItem } from "@/app/commons";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Join() {

    const [jobs, setJobs] = useState<any[]>([]);

    useEffect(() => {
        refresh();
    }, []);

    const refresh = () => {
        axios({
            method: "get",
            url: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT+"/jobs"
        })
            .then(response => {
                setJobs(response.data);
            })
    }

    return (<>
        <HomeLink/>
        <h1>Join Us</h1>
        {jobs.map((item) => (
            <JobsItem key={item.id} item={item}/>
        ))}
        <Link className="button" href="/links/discord">Contact Us on Discord</Link>
    </>);

}