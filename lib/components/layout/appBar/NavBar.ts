export interface NavBar {
  name: string;
  path: string;
}

export const navBarContents: NavBar[] =
  [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Chi siamo',
      path: '/chi-siamo'
    },
    {
      name: 'Calendario',
      path: '/calendar'
    },
    {
      name: 'Notizie',
      path: '/notizie'
    },
    {
      name: 'Contatti',
      path: '/contatti'
    },
    {
      name: 'Quaderno',
      path: '/quaderno'
    },
    {
      name: 'Progetti in atto',
      path: '/progettiInAtto'
    },
    {
      name: 'Progetti realizzati',
      path: '/progettiRealizzati'
    }

  ]

