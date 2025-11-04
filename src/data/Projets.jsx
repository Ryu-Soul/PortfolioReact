/**PROJET NINA */
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
/**PROJET 724EVENTS */
import WhiteImage from "../assets/images/724Events/Image-Blanche-Slider.png";
import WrongMonth from "../assets/images/724Events/WrongMonth.png";
import GoodMonth from "../assets/images/724Events/GoodMonth.png";
import FilterNotWorking from "../assets/images/724Events/FilterNotWorking.png";
import NoLastEvent from "../assets/images/724Events/NoLastEvent.png";
import WrongIndex from "../assets/images/724Events/WrongIndex.png";
import WrongMath from "../assets/images/724Events/WrongMath.png";
import OnChangeNoValue from "../assets/images/724Events/OnChangeNoValue.png";
import WrongCode from "../assets/images/724Events/WrongCode.png";
import OnSuccessNotCalled from "../assets/images/724Events/OnSuccessNotCalled.png";
import LastFromDataContext from "../assets/images/724Events/LastFromDataContext.png";
import NoLastGiven from "../assets/images/724Events/NoLastGiven.png";
import GoodMath from "../assets/images/724Events/GoodMath.png";
import BetterDate from "../assets/images/724Events/BetterDate.png";
import OnChangeValueAdded from "../assets/images/724Events/OnChangeValueAdded.png";
import BetterCode from "../assets/images/724Events/BetterCode.png";
import OnSuccessCalled from "../assets/images/724Events/OnSuccessCalled.png";
import LastGiven from "../assets/images/724Events/LastGiven.png";
import DotNotChanging from "../assets/images/724Events/DotNotChanging.png";
import InceptionMap from "../assets/images/724Events/InceptionMap.png";
import NotInceptionMap from "../assets/images/724Events/InceptionMap.png";

export const Projets = [
  {
    h1Title: "Projet NinaCarducci",
    introTitle: "Introduction",
    introP: "Je suis développeur freelance et je propose mes services d’optimisation SEO à de nouveaux clients. Parmi mes prospects, j’ai identifié le site de Nina Carducci, une photographe dont m’a parlé un ami. Suite à nos échanges, Nina Carducci a accepté de collaborer avec moi. Ma mission a consisté à optimiser globalement son site, tant sur les performances que sur le SEO, à mettre en place le référencement local via Schema.org, à ajouter les balises meta pour les réseaux sociaux, à améliorer l’accessibilité et enfin à produire un rapport détaillé présentant mes actions et leurs impacts.",
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
    ]
  }, {
     h1Title: "Projet 724Events",
    introTitle: "Introduction",
    introP: "Je suis développeur front-end freelance, et l’agence évènementielle 724events m’a contacté pour finaliser la nouvelle version de son site vitrine one-page. Un premier développeur avait déjà entamé l’intégration, mais a dû abandonner le projet pour raisons personnelles. Le site était fonctionnel, mais plusieurs bugs gênaient la navigation et l’expérience utilisateur. J’ai échangé en visioconférence avec Jean-Baptiste, le directeur marketing de l’agence, afin qu’il me présente le projet plus en détail. Après cet échange, j’ai accepté la mission et Jean-Baptiste m’a transmis le code du site, la liste des problèmes à corriger (dans l’onglet Issues) ainsi qu’un cahier de recette à compléter et finaliser. Mon rôle a consisté à débuguer, tester et finaliser le site afin de le rendre parfaitement fonctionnel et prêt pour sa mise en ligne.",
    Sommaire: "Sommaire",
    Parties: [
      {
        title: "Le slider",
        sections: [
          {
            subtitle: "Identification du problème :",
            content: [" Image blanche au défilement.",
                      [WhiteImage],
                      "Le mois affiché n’est pas le bon",
                      [WrongMonth],
                      [GoodMonth],
            ]
          },
          {
            subtitle: "Source du problème :",
            content: ["Le problème est qu’à la dernière image, l’index atteint la valeur 2, puis après un délai de 5 secondes, il passe à 3. Or, comme aucune image n’existe à cet index, l’affichage devient vide (blanc) pendant ces 5 secondes avant de boucler ou s’arrêter.",
                      [WrongMath],
                      "Pour les mois : le tableau des mois dans Helpers/date/index.js commençait par 1, 2, 3, …, 12, alors que le système d’indexation de la machine débute à 0. Cette différence d’indexation entraînait donc un décalage entre les mois affichés et leur valeur réelle.",
                      [WrongIndex]
            ]
          },
          {
            subtitle: "Correction :",
            content: ["En ajoutant -1 à la longueur totale, on empêche l’index d’atteindre une valeur inexistante. Il ira donc de 0 à 2, mais jamais jusqu’à 3, avant de recommencer à 0.",
              [GoodMath],
              "Il a suffi de modifier le tableau index.js dans Helpers/date afin de faire débuter la numérotation des mois à 0 et la terminer à 11 (soit bien 12 mois au total).",
              [BetterDate]
            ]
          }
        ]
      },
      {
        title: "Sélecteur événements",
        sections: [
          {
            subtitle: "Identification du problème :",
            content: ["Filtre événements ne fonctionne pas",
                      [FilterNotWorking],
                      "Les mois affichés ne sont pas bons",
            ],
          },
          {
            subtitle: "Source du problème :",
            content: ["Dans le composant Select, le gestionnaire onChange (lié à changeValue) n’accepte aucun argument : il ne transmet donc pas la nouvelle valeur au state type.",
                      [OnChangeNoValue],
                      "Par ailleurs, le code suivante est incorrect :",
                      [WrongCode],
                      "Il retourne la même chose dans les deux branches, donc elle ne conditionne rien."
            ]
          },
          {
            subtitle: "Correction :",
            content: [
              "Ajout du paramètre newValue à la fonction onChange pour récupérer la nouvelle valeur sélectionnée.",
              [OnChangeValueAdded],
              "Remplacement de la condition qui ne faisait aucun filtrage par une version permettant désormais de filtrer les événements selon leur type.",
              [BetterCode]
            ]
          }
        ]
      },
      {
        title: "Message de confirmation du formulaire",
        sections: [
          {
            subtitle: "Identification du problème :",
            content: ["Lorsque l’on clique sur le bouton envoyer du formulaire, aucun message de confirmation n’apparait"
            ],
          },
          {
            subtitle: "Source du problème :",
            content: ["Dans containers/Form/index.js, la fonction onSuccess n’est jamais appelée dans le callback.",
                      [OnSuccessNotCalled]
            ]
          },
          {
            subtitle: "Correction :",
            content: [
              "Appeler la fonction onSuccess() dans le callback lorsque aucune erreur n’est détectée.",
              [OnSuccessCalled]
            ]
          }
        ]
      },
      {
        title: "Dernier Événement",
        sections: [
          {
            subtitle: "Identification du problème :",
            content: ["Filtre événements ne fonctionne pas",
                      "Dans le footer, la dernière prestation doit s’afficher à gauche, avec l’image, le titre et le mois",
                      [NoLastEvent]
            ],
          },
          {
            subtitle: "Source du problème :",
            content: ["La constante last, présente dans pages/Home/index.js, provient de context/DataContext/index.js, mais elle ne reçoit aucun élément et ne contient pas la logique permettant de trier les événements pour obtenir le plus récent.",
                      [LastFromDataContext],
                      [NoLastGiven],
            ]
          },
          {
            subtitle: "Correction :",
            content: [
              "La solution consiste à trier les événements par date décroissante afin d’identifier le plus récent, puis à stocker ce dernier dans une constante last. Enfin, cette constante est transmise via la valeur du contexte (value).",
              [LastGiven]
            ]
          }
        ]
      },
      {
        title: "Autre bug trouvés et leur correction apportées",
        sections: [
          {
            subtitle: "Les dots du Slider",
            content: [
              "Les dots ne bouge pas et restent figée sur le 3ieme seulement",
              [DotNotChanging],
              "Les “dots” (boutons radio de pagination) étaient générés par un .map() imbriqué dans un autre .map(). Cela provoquait la création de plusieurs groupes de pagination — un par slide — et seul le dernier groupe restait affiché à la fin.",
              [InceptionMap],
              "La correction consiste à sortir le .map() des “dots” afin qu’il ne soit plus imbriqué dans un autre, évitant ainsi la création multiple de groupes de pagination.",
              [NotInceptionMap]
            ]
          },
          {
            subtitle: "Problème 2 - Sélecteur événements",
            content: [
              "la deuxième parties des événements ne semble pas pouvoir être affichés (non notés par le directeur)",
              "le numéro des pages n’affiche pas les bons numéro une fois à la page 2 (non notés)"
            ]
          },
          {
            subtitle: "blblblbl",
            content: [
              "blblblbl"
            ]
          }
        ]
      },
    ]
  }
];