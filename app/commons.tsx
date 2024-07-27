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
        <Link className="sociallink" href={href}>
                <img className="socialicon" src={file} alt={title}/>
                {title}
        </Link>
    );
}

export function NavBar({links}: {links: {href: string, title: string}[]}) {
    return (
        <nav>
            {links.map(({href, title}) => (
                <Link className="navbutton" key={title} href={href}>
                    {title}
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