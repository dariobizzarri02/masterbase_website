'use client'

import { HomeLink, NavBar } from "@/app/commons";

export default function Overview() {

    const links = [
        {href: "/", title: "Home", newtab: false},
        {href: "/versary/presubscribe", title: "Presubscribe", newtab: true},
        {href: "/links/igreggio", title: "Instagram", newtab: true},
    ];

    return (<>
        <HomeLink/>
        <img className="bg bgplus" src="/versary.jpg" alt="background"/>
        <NavBar links={links}/>
        <h1 className="title">VERSARY 2025</h1>
        <h2>Festeggiando un nuovo capitolo!</h2>
        <div className="textspace"/>
        <p className="walloftextv">
            8 anni di attività... E 4 anni di Versary, la nostra festa ufficiale!
        </p>
        <h2 className="wotitle">Disclaimer</h2>
        <p className="walloftextv">
            L&apos;organizzazione è ancora in corso, e le informazioni riportate sono suscettibili di cambiamenti.
            <br/>
            Per rimanere aggiornati, vi consigliamo di mantenere monitorata la pagina.
            <br/>
        </p>
        <h2 className="wotitle">Dove e quando?</h2>
        <p className="walloftextv">
            L&apos;evento si terrà a Reggio Emilia da sabato 20 a domenica 21 settembre 2025.
            Ora di ritrovo e luogo preciso verranno comunicati in seguito sul gruppo e sul canale WhatsApp ufficiali dell&apos;evento.
        </p>
        <h2 className="wotitle">Svolgimento</h2>
        <p className="walloftextv">
            Tra i programmi dell&apos;evento contiamo:
            <br/>
            <br/>
            - Merchandise ufficiale!
            <br/>
            - Musica dal vivo!
            <br/>
            - Attività e proiezioni organizzate!
            <br/>
            - Servizio fotografico!
            <br/>
            - Cena a base di pizza!
            <br/>
            - Nottata in sacco a pelo!
        </p>
        <h2 className="wotitle">Preiscrizione</h2>
        <p className="walloftextv">
            Per preiscrivervi all&apos;evento, compilate il modulo di iscrizione che trovate <a className="inline" href="/versary/presubscribe">qui</a>.
            <br/>
            Ulteriori informazioni saranno riportate su questa pagina, per cui tenetevi aggiornati!
        </p>
        <h2 className="wotitle">Occorrente</h2>
        <p className="walloftextv">
            - (FACOLTATIVO) Snack e bevande, o soldi per acquistarli.
            <br/>
            - Per chi partecipa alla nottata, sacco a pelo e eventuali soldi per la colazione del giorno dopo.
            <br/>
            - Per chi si trattiene il giorno dopo, soldi per il pranzo.
        </p>
        <h2 className="wotitle">Pagamenti</h2>
        <p className="walloftextv">
            A un mese dall&apos;evento verrà creato il fondo PayPal ufficiale dell&apos;evento, dove potrete versare i soldi per la vostra iscrizione.
            <br/>
            Si raccomanda l&apos;utilizzo di PayPal per i pagamenti, in quanto è il metodo più sicuro e veloce, ma in caso non fosse possibile, potete effettuare il pagamento in contanti sul posto.
        </p>
        <h2 className="wotitle">Vi aspettiamo numerosi!</h2>
        <div className="pagefoot"/>
    </>);

}