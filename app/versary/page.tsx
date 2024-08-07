'use client'

import { HomeLink, NavBar } from "@/app/commons";

export default function Overview() {

    const links = [
        {href: "/", title: "Home"},
        {href: "/versary/subscribe", title: "Subscribe"},
        {href: "/versary/subscriptions", title: "Guests"},
        {href: "/links/igreggio", title: "Instagram"},
    ];

    return (<>
        <HomeLink/>
        <img className="bg bgplus" src="/versary.jpg" alt="background"/>
        <NavBar links={links}/>
        <h1 className="title">VERSARY 2024</h1>
        <h2>Festeggiando 7 anni di MasterBase</h2>
        <div className="textspace"/>
        <p className="walloftextv">
            La MasterBase compie 7 anni!
            <br/>
            E per il terzo anno di fila, siamo lieti di presentarvi il Versary, la festa ufficiale della gilda.
        </p>
        <h2 className="wotitle">Dove e quando?</h2>
        <p className="walloftextv">
            L&apos;evento si terrà a Reggio Emilia da sabato 21 a domenica 22 settembre 2024.
            Ora di ritrovo e luogo preciso verranno comunicati in seguito sul gruppo e sul canale WhatsApp ufficiali dell&apos;evento.
        </p>
        <h2 className="wotitle">Features</h2>
        <p className="walloftextv">
            Tra le features dell&apos;evento contiamo:
            <br/>
            <br/>
            - Magliette ufficiali della gilda (prenotazione nel modulo di iscrizione)!
            <br/>
            - Concerto dal vivo!
            <br/>
            - Musica e karaoke!
            <br/>
            - Tante attività e proiezioni in programma!
            <br/>
            - Servizio fotografico!
            <br/>
            - Cena a base di pizza!
            <br/>
            - Nottata in sacco a pelo!
            <br/>
            - Il giorno dopo, giro della città e pranzo a base di sushi!
        </p>
        <h2 className="wotitle">Iscrizione</h2>
        <p className="walloftextv">
            Per iscrivervi all&apos;evento, compilate il modulo di iscrizione che trovate <a className="inline" href="/versary/subscribe">qui</a>.
            <br/>
            Potete scegliere se partecipare alla serata, alla nottata e/o al pranzo del giorno dopo.
            <br/>
            Inoltre, potete prenotare la vostra maglietta ufficiale della gilda, scegliendo la taglia e eventuali optional.
            <br/>
            A seguito della compilazione del modulo, qualora il vostro indirizzo mail venga riconosciuto come valido dallo Staff, verrete aggiunti al gruppo e al canale WhatsApp ufficiali dell&apos;evento.
            Se non venite aggiunti entro tre giorni dalla compilazione del modulo, contattate Entity su WhatsApp o su Discord (@mb_entity), eventualmente fornendo il vostro numero di telefono.
        </p>
        <h2 className="wotitle">Occorrente</h2>
        <p className="walloftextv">
            - (FACOLTATIVO) Snack e bevande, o soldi per acquistarli.
            <br/>
            - Per chi partecipa alla nottata, sacco a pelo e eventuali soldi per la colazione del giorno dopo.
            <br/>
            - Per chi partecipa al pranzo del giorno dopo, soldi per il sushi.
        </p>
        <h2 className="wotitle">Pagamenti</h2>
        <p className="walloftextv">
            A breve verrà creato il fondo PayPal ufficiale dell&apos;evento, dove potrete versare i soldi per la vostra iscrizione.
            <br/>
            Si raccomanda l&apos;utilizzo di PayPal per i pagamenti, in quanto è il metodo più sicuro e veloce, ma in caso non fosse possibile, potete effettuare il pagamento in contanti sul posto.
            <br/>
            Riportiamo di seguito i costi specificati nel modulo di iscrizione:
            <br/>
            - Serata: € 17
            <br/>
            - Maglietta base: € 7
            <br/>
            - Nome dorsale sulla maglietta: € 4
            <br/>
            - Logo dorsale sulla maglietta: € 6
        </p>
        <h2 className="wotitle">Vi aspettiamo numerosi!</h2>
        <div className="pagefoot"/>
    </>);

}