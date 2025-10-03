import LightHouseBase from "../assets/images/Nina/LightHouseBase.png";
import LightHouseFull from "../assets/images/Nina/LightHouseFull.png";
import NoLazyLoad from "../assets/images/Nina/NoLazyLoad.png";
import NoScriptDefer from "../assets/images/Nina/NoScriptDefer.png";
import HaveLazyLoad from "../assets/images/Nina/HaveLazyLoad.png";
import HaveDeferScript from "../assets/images/Nina/HaveDeferScript.png";
import BadTitle from "../assets/images/Nina/BadTitle.png";
import NoAlt from "../assets/images/Nina/NoAlt.png";
import NoMetaSchema from "../assets/images/Nina/NoMeta&Schema.png";
import NoStructure from "../assets/images/Nina/NoStructure.png";
import BetterTitle from "../assets/images/Nina/BetterTitle.png";
import BetterMeta from "../assets/images/Nina/BetterMeta.png";
import BetterStructure from "../assets/images/Nina/BetterStructure.png";
import BetterAlt from "../assets/images/Nina/BetterAlt.png";
import Schema from "../assets/images/Nina/Schema.png";
import OGBalise from "../assets/images/Nina/OGBalise.png";


export const Projets = [
  {
    h1Title: "Projet NinaCarducci",
    introTitle: "Introduction",
    introP: "Je suis développeur freelance et je propose mes services d’optimisation SEO à de nouveaux clients.Parmi mes prospects, j’ai identifié le site de Nina Carducci, une photographe dont m’a parlé un ami.Suite à nos échanges, Nina Carducci a accepté de collaborer avec moi. Ma mission a consisté à optimiser globalement son site, tant sur les performances que sur le SEO, à mettre en place le référencement local via Schema.org, à ajouter les balises meta pour les réseaux sociaux, à améliorer l’accessibilité et enfin à produire un rapport détaillé présentant mes actions et leurs impacts.",
    Sommaire: "Sommaire",
    Parties: [
      {
        title: "Comparatif avant et après optimisation",
        sections: [
          {
            subtitle: "Score Lighthouse avant optimisation",
            content: [[LightHouseBase]]
          },
          {
            subtitle: "Score Lighthouse après optimisation",
            content: [[LightHouseFull]],
          }
        ]
      },
      {
        title: "Performances",
        sections: [
          {
            subtitle: "Version de base (ninacarducci.github.io)",
            content: [
              "Structure simple, mais sans optimisation visible automatique (pas de loading=\"lazy\", formats d’image classiques — JPG ou PNG), scripts et assets non optimisés.",
              [NoScriptDefer],
              "Aucun indicateur de lazy-loading ou de format WebP.",
              [NoLazyLoad]
            ]
          },
          {
            subtitle: "Version optimisée (https://ryu-soul.github.io/NinaCarducci/)",
            content: [
              "Images en WebP : gain en poids significatif par rapport aux formats classiques (JPEG/PNG).",
              "Lazy-loading sur les images (loading=\"lazy\") : améliore le temps de chargement initial.",
              [HaveLazyLoad],
              "Scripts différés (defer) : optimisent le rendu de la page, car ils ne bloquent pas le chargement.",
              [HaveDeferScript],
              "Fichiers minifiés (ex. bootstrap.bundle.min.js) : réduction de la taille des fichiers, accélération du chargement."
            ]
          },
          {
            subtitle: "Résumé des gains",
            content: [
              "Images WebP + lazy-loading = réduction substantielle du poids des ressources. 29,4 Mo → 620 ko soit 97,9 % de gain.",
              "Scripts différés et fichiers minifiés = chargement plus rapide et optimisation du rendu.",
              "70 MS Total Blocking Time → 0 MS",
              "3.5 s LCP → 0.6 s"
            ]
          }
        ]
      },
      {
        title: "SEO",
        sections: [
          {
            subtitle: "Version de base",
            content: [
              "Titre générique “Portfolio”, sans balise <meta description>.",
              [BadTitle],
              "Aucun attribut alt ou usage basique.",
              [NoAlt],
              "Pas de structure claire ou schema.",
              [NoMetaSchema],
              [NoStructure]
            ]
          },
          {
            subtitle: "Version optimisée",
            content: [
              "Titre optimisé : par exemple, “Photographer Nina Carducci – Portraits & Events” qui améliore le référencement.",
              [BetterTitle],
              "Balise meta description bien définie.",
              [BetterMeta],
              "Hiérarchie sémantique HTML solide (un <h1>, plusieurs <h2>/<h3> pour les sections).",
              [BetterStructure],
              "Attributs alt descriptifs présents sur toutes les images, favorables au SEO et à l’accessibilité.",
              [BetterAlt],
              "JSON-LD LocalBusiness : structure l’information pour les moteurs de recherche, très utile pour la visibilité locale.",
              [Schema]
            ]
          },
          {
            subtitle: "Résumé des gains SEO",
            content: [
              "Meilleur ciblage (titre + description).",
              "Structure sémantique optimisée.",
              "Images accessibles et indexées.",
              "Balises JSON-LD pour référencement local."
            ]
          }
        ]
      },
      {
        title: "Référencement local & réseaux sociaux",
        sections: [
          {
            subtitle: "Version de base",
            content: [
              "Aucune donnée structurée pour le référencement local.",
              "Aucun set de balises Open Graph ou Twitter Cards détectés."
            ]
          },
          {
            subtitle: "Version optimisée",
            content: [
              "Données JSON-LD de type LocalBusiness incluses pour améliorer le référencement local.",
              "Balises Open Graph (OG) bien présentes (og:title, og:description, og:image, og:url, og:site_name) pour un rendu optimisé lors du partage sur Facebook/LinkedIn.",
              [OGBalise]
            ]
          },
          {
            subtitle: "Résumé des gains",
            content: [
              "Amélioration notable du référencement social et local.",
              "Rendu sur réseaux sociaux homogène et attrayant."
            ]
          }
        ]
      },
      {
        title: "Accessibilité",
        sections: [
          {
            subtitle: "Version de base",
            content: [
              "Structure très basique, sans indication de lang, contrastes non vérifiés, navigation non testée pour clavier."
            ]
          },
          {
            subtitle: "Version optimisée",
            content: [
              "Attribut lang=\"fr\" bien présent sur <html>, essentiel pour les lecteurs d’écran.",
              "Attributs alt descriptifs sur toutes les images.",
              "Structure sémantique des titres, bénéfique pour la compréhension par les technologies d’assistance.",
              "Lazy-loading : bénéfique pour l’UX et la performance mobile."
            ]
          }
        ]
      },
      {
        title: "Annexe",
        sections: [
          {
            subtitle: "Rapports",
            content: [
              "Rapport complet de l’audit Lighthouse",
              "Rapport Wave",
              "Rapport Schema"
            ]
          }
        ]
      }
    ]
  }
];