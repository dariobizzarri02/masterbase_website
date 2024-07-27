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