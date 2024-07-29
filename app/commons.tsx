'use client'

import Link from 'next/link';

export function MainTitle({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <div>
            <h1 className="maintitle">{title}</h1>
            <h2 className="mainsubtitle">{subtitle}</h2>
        </div>
    );
}

export function SocialLink({href, title, file}: {href: string, title: string, file: string}) {
    return (
        <Link className="sociallink" href={href} target="_blank">
            <img className="socialicon" src={file} alt={title}/>
            {title}
        </Link>
    );
}

export function NavBar({links}: {links: {href: string, title: string}[]}) {
    return (
        <nav>
            {links.map(({href, title}) => (
                <Link key={title} href={href}>
                    <button className="navbutton">{title}</button>
                </Link>
            ))}
        </nav>
    );
}

export function HomeLink() {

    const links = [
        {href: "/links", title: "Link Tree"},
        {href: "/blog", title: "Blog"},
        {href: "/minecraft", title: "MasterCraft"},
        {href: "/team", title: "Meet the Team"},
    ];

    return (
        <Link className="homelink" title="Return to Home" href="/">
            <img src="/logo_nobg_squared.png" alt="logo" />
        </Link>
    );
}

export function Logo() {
    return (
        <img className="logo" src="/logo_nobg_squared.png" alt="logo" />
    );
}

export function BackgroundVideo({src}: {src: string}) {
    return (
        <video className="bg" autoPlay muted loop>
            <source src={src} type="video/mp4"/>
        </video>
    );
}

export function Video({src}: {src: string}) {
    return (
        <video className="video" autoPlay loop>
            <source src={src} type="video/mp4"/>
        </video>
    );
}

function designateLink(item: any) {
    // order of priority: youtube_video, 
}

export function FeedItem({item}: {item: any}) {
    const link = designateLink(item);
    // youtube video pulled from api with thumbnail, title, description, link and date
    return (
        <Link className="feeditem" href={item.youtube_video} target="_blank">
            <div className="feedblock">
                <img src={item.thumbnail} alt={item.display}/>
                <p>{ToDate(item.timestamp)}</p>
            </div>
            <div className="feedblock">
                <h3>{item.display}</h3>
                <p>{item.description}</p>
            </div>
        </Link>
    );
}

export function ToDate(timestamp: string) {
    const date = new Date(timestamp);
    return date.toDateString();
}

export function TeamItem({item}: {item: any}) {
    // alternate between left and right alignment
    const isLeft = item.id % 2 === 0;
    // display, roles, thumbnail
    if(isLeft) return (
        <div className="teamitem">
            <div className="teamblock">
                <img src={process.env.NEXT_PUBLIC_BACKEND_ENDPOINT+"/team/"+item.thumbnail} alt={item.display}/>
            </div>
            <div className="teamblock">
                <h3>{item.display}</h3>
                <p>{item.roles}</p>
            </div>
        </div>
    );
    return (
        <div className="teamitemright">
            <div className="teamblock">
                <h3>{item.display}</h3>
                <p>{item.roles}</p>
            </div>
            <div className="teamblock">
                <img src={process.env.NEXT_PUBLIC_BACKEND_ENDPOINT+"/team/"+item.thumbnail} alt={item.display}/>
            </div>
        </div>
    );
}

export function JobsItem({item}: {item: any}) {
    // display, description
    return (
        <div className="jobsitem">
            <h3>{item.display}</h3>
            <p>{item.description}</p>
        </div>
    );
}