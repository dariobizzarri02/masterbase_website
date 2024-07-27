'use client'

import { SocialLink } from '@/app/commons';

export default function Links() {

    return (<>
        <h1>Link Tree</h1>
        <ul>
            <li><SocialLink href="/links/youtube" title="YouTube" file="/socials/youtube.png"/></li>
            <li><SocialLink href="/links/ytmusic" title="YouTube Music" file="/socials/ytmusic.png"/></li>
            <li><SocialLink href="/links/twitch" title="Twitch" file="/socials/twitch.png"/></li>
            <li><SocialLink href="/links/tiktok" title="TikTok" file="/socials/tiktok.png"/></li>
            <li><SocialLink href="/links/instagram" title="Instagram" file="/socials/instagram.png"/></li>
            <li><SocialLink href="/links/twitter" title="Twitter" file="/socials/twitter.png"/></li>
            <li><SocialLink href="/links/threads" title="Threads" file="/socials/threads.png"/></li>
            <li><SocialLink href="/links/discord" title="Discord" file="/socials/discord.png"/></li>
            <li><SocialLink href="/links/spotify" title="Spotify" file="/socials/spotify.png"/></li>
        </ul>
    </>);

}