class SearchResult {
  constructor({logo, siteName, link, title, description}) {
    this.logo = logo
    this.siteName = siteName
    this.link = link
    this.title = title
    this.description = description
  }
}

export const SEARCH_RESULTS = [
  new SearchResult({
    logo: '/search/tailwind-logo.webp',
    siteName: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    title:
      'Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
  }),
  new SearchResult({
    logo: '/search/tailwind-logo.webp',
    siteName: 'Tailwind UI',
    link: 'https://tailwindui.com/',
    title:
      'Tailwind UI - Beautifully designed components, crafted by the creators of Tailwind CSS.',
    description:
      'Tailwind UI offers a collection of professionally designed, fully responsive UI components, built with Tailwind CSS.',
  }),
  new SearchResult({
    logo: '/search/headless-ui-logo.webp',
    siteName: 'Headless UI',
    link: 'https://headlessui.com/',
    title: 'Headless UI - Completely unstyled, fully accessible UI components.',
    description:
      'Headless UI provides completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
  }),
  new SearchResult({
    logo: '/search/tailwind-logo.webp',
    siteName: 'Tailwind Play',
    link: 'https://play.tailwindcss.com/',
    title: 'Tailwind Play - The online playground for Tailwind CSS.',
    description:
      'Tailwind Play is an online playground for trying out Tailwind CSS code and sharing it with others.',
  }),
  new SearchResult({
    logo: '/search/github-logo.webp',
    siteName: 'Awesome TailwindCSS',
    link: 'https://github.com/aniftyco/awesome-tailwindcss',
    title:
      'Awesome TailwindCSS - Curated list of awesome things related to Tailwind CSS.',
    description:
      'A curated list of awesome tools, resources, and projects built with Tailwind CSS.',
  }),
]
