'use client'

import { HomeLink, FeedItem } from "@/app/commons";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Blog() {

    const [feed, setFeed] = useState<any[]>([]);

    useEffect(() => {
        refresh();
    }, []);

    const refresh = () => {
        const count = 10;
        axios({
            method: "get",
            url: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT+"/feed/"+count
        })
            .then(response => {
                setFeed(response.data);
            })
    }

    return (<>
        <HomeLink/>
        <h1>Blog</h1>
        {feed.map((item) => (
            <FeedItem key={item.id} item={item}/>
        ))}
    </>);

}