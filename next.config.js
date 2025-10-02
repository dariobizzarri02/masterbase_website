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
            /* //subscription form
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
            }, */
            //aincrad modpack
            {
                source: '/minecraft/modpacks/aincrad',
                destination: 'https://www.mediafire.com/file/3qrrtdqbvhj1cnj/Aincrad-7.zip/file',
                permanent: false
            },
            //apocalypse modpack
            {
                source: '/minecraft/modpacks/apocalypse',
                destination: 'https://www.mediafire.com/file/hyzrsswhfqgdkcb/Apocalypse-2.zip/file',
                permanent: false
            },
            //classic modpack
            {
                source: '/minecraft/modpacks/classic',
                destination: 'https://www.mediafire.com/file/vgm2bt7phlqu91z/Classic-2.zip/file',
                permanent: false
            },
            //combat modpack
            {
                source: '/minecraft/modpacks/combat',
                destination: 'https://www.mediafire.com/file/sxw6fwql9kuaayy/Combat-3.zip/file',
                permanent: false
            },
            //nostalgia modpack
            {
                source: '/minecraft/modpacks/nostalgia',
                destination: 'https://www.mediafire.com/file/s5ou5seda42m5ai/Nostalgia-2.zip/file',
                permanent: false
            },
            //vanilla modpack
            {
                source: '/minecraft/modpacks/vanilla',
                destination: 'https://www.mediafire.com/file/zacf9lhsrjanuuc/Vanilla-8.mrpack/file',
                permanent: false
            },
            //daimon
            {
                source: '/daimon',
                destination: 'https://daimon.world',
                permanent: false
            },
        ]
    },
}

module.exports = nextConfig