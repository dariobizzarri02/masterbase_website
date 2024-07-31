/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    async redirects()
    {
        return [
            //minecraft map
            {
                source: '/minecraft/map',
                destination: 'http://map.masterbaseguild.it:8123',
                permanent: false
            },
            //discord
            {
                source: '/links/discord',
                destination: 'https://discord.gg/t8Q9TQtzXX',
                permanent: false
            },
            //instagram
            {
                source: '/links/instagram',
                destination: 'https://www.instagram.com/masterbaseguild',
                permanent: false
            },
            //youtube
            {
                source: '/links/youtube',
                destination: 'https://www.youtube.com/@masterbaseguild?sub_confirmation=1',
                permanent: false
            },
            //yt music
            {
                source: '/links/ytmusic',
                destination: 'https://www.youtube.com/channel/UCqiEiiZuMIURK0dlXy9wXNA?sub_confirmation=1',
                permanent: false
            },
            //spotify
            {
                source: '/links/spotify',
                destination: 'https://open.spotify.com/artist/1p9qwSUsd20TMRulxrgaSG',
                permanent: false
            },
            //threads
            {
                source: '/links/threads',
                destination: 'https://threads.net/masterbaseguild',
                permanent: false
            },
            //tiktok
            {
                source: '/links/tiktok',
                destination: 'https://www.tiktok.com/@masterbaseguild',
                permanent: false
            },
            //twitch
            {
                source: '/links/twitch',
                destination: 'https://www.twitch.tv/masterbaseguild',
                permanent: false
            },
            //x
            {
                source: '/links/x',
                destination: 'https://x.com/masterbaseguild',
                permanent: false
            },
            //instagram reggio
            {
                source: '/links/igreggio',
                destination: 'https://www.instagram.com/masterbasereggio',
                permanent: false
            },
            //subscription form
            {
                source: '/versary/subscribe',
                destination: 'https://forms.gle/RzFYLsVsJR7hj2Rb7',
                permanent: false
            },
            //subscriptions
            {
                source: '/versary/subscriptions',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLScP7-Teh2LMVL_bfZb-85PT9F98SxB1MB_FUwsTkn5a5radVQ/viewanalytics',
                permanent: false
            },
        ]
    },
}

module.exports = nextConfig