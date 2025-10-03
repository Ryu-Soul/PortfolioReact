import React from 'react'
import { Projets } from '../data/Projets'
import '../styles/Ninapage.scss'

export default function ProjetNina() {
  const projet = Projets[0]
  return (

    <main>
      <h1>{projet.h1Title}</h1>
      <article className='Intro'>
        <h2>{projet.introTitle}</h2>
        <p>{projet.introP}</p>
      </article>
      <article className='Sommaire'>
        <h2>{projet.Sommaire}</h2>
        <ol>
          {projet.Parties.map((partie, index) => (
            <li key={index}>{partie.title}</li>
          ))}
        </ol>
      </article>
      {projet.Parties.map((partie, index) => (
  <article key={index} className={'Partie' + index }>
    <h2>{index + 1} – {partie.title}</h2>

    {/* Cas où la partie contient des sections */}
    {partie.sections && partie.sections.map((section, idx) => (
      <section key={idx} className={`section-${idx + 1}`}>
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
      <article>
        <h2></h2>
      </article>
    </main>
  )
}