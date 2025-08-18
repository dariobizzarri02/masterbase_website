/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    async rewrites()
    {
        return [
            //minecraft map
            {
                source: '/minecraft/map',
                destination: 'http://map.vanilla.masterbase.team:8123'
            },
            {
                source: '/minecraft/:path*',
                destination: 'http://map.vanilla.masterbase.team:8123/:path*'
            }
        ]
    },
    async redirects()
    {
        return [
            //discord
            {
                source: '/links/discord',
                destination: 'https://discord.gg/FfRBaAnBgQ',
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
                destination: 'https://forms.gle/YuwGCTYhK1hCgEg66',
                permanent: false
            },
            //secret
            {
                source: '/versary/secret',
                destination: 'https://www.youtube.com/watch?v=_cgu1AI6AZo&list=PLzBACQUM9uciXEGfGSbLUgIME8bhI5oGE',
                permanent: false
            },
            // modpack
            {
                source: '/minecraft/modpack',
                destination: 'https://www.mediafire.com/file/87saptemqpq255j/Vanilla_7.mrpack/file',
                permanent: false
            }
        ]
    },
}

module.exports = nextConfig