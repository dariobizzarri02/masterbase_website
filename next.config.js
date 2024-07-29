/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    async rewrites()
    {
        return [
            //minecraft map
            {
                source: '/minecraft/map',
                destination: 'http://map.masterbaseguild.it:8123',
            },
            //discord
            {
                source: '/links/discord',
                destination: 'https://discord.gg/t8Q9TQtzXX',
            },
            //instagram
            {
                source: '/links/instagram',
                destination: 'https://www.instagram.com/masterbaseguild',
            },
            //youtube
            {
                source: '/links/youtube',
                destination: 'https://www.youtube.com/@masterbaseguild?sub_confirmation=1',
            },
            //yt music
            {
                source: '/links/ytmusic',
                destination: 'https://www.youtube.com/channel/UCqiEiiZuMIURK0dlXy9wXNA?sub_confirmation=1'
            },
            //spotify
            {
                source: '/links/spotify',
                destination: 'https://open.spotify.com/artist/1p9qwSUsd20TMRulxrgaSG',
            },
            //threads
            {
                source: '/links/threads',
                destination: 'https://threads.net/masterbaseguild',
            },
            //tiktok
            {
                source: '/links/tiktok',
                destination: 'https://www.tiktok.com/@masterbaseguild',
            },
            //twitch
            {
                source: '/links/twitch',
                destination: 'https://www.twitch.tv/masterbaseguild',
            },
            //x
            {
                source: '/links/x',
                destination: 'https://x.com/masterbaseguild',
            },
        ]
    },
}

module.exports = nextConfig