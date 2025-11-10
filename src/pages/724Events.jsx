import React from 'react'
import { Projets } from '../data/Projets'
import '../styles/Eventspage.scss'

export default function ProjetEvents() {
    const projet = Projets[1]
    return (

        <main className='main724Event'>
            <h1>{projet.h1Title}</h1>
            <article className='Intro724Event'>
                <h2>{projet.introTitle}</h2>
                <p>{projet.introP}</p>
            </article>
            <article className='Sommaire724Event'>
                <h2>{projet.Sommaire}</h2>
                <ol>
                    {projet.Parties.map((partie, index) => (
                        <li key={index}>{partie.title}</li>
                    ))}
                </ol>
            </article>
            {projet.Parties.map((partie, index) => (
                <article key={index} className={'EventPartie' + index}>
                    <h2>{index + 1} – {partie.title}</h2>

                    {/* Cas où la partie contient des sections */}
                    {partie.sections && partie.sections.map((section, idx) => (
                        <section key={idx} className={`Eventsection-${idx + 1}`}>
                            {section.subtitle && <h3>{section.subtitle}</h3>}
                            <ul>
                                {section.content.map((point, i) => (
                                    <li key={i}>
                                        {typeof point === "string" ? (
                                            point
                                        ) : (
                                            <img
                                                src={point}
                                                alt={`illustration-${i}`}
                                                style={{ maxWidth: "600px", display: "block", margin: "10px auto" }}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}

                    {/* Cas où la partie contient directement du contenu */}
                    {partie.content && (
                        <ul>
                            {partie.content.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    )}
                </article>

            ))}
            <article className="Annexe724Event">
            </article>
        </main>
    )
}