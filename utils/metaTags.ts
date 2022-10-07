// this page contains all the meta tags for the website.

import { PageType, RobotsContent, MetaTags } from "interfaces/metaTagsTypes"

export function concatenateStrings(...args: string[]): string {
  return args.join(",")
}

export const url = `https://moh.edostate.gov.ng`

const defaultMetaTags: MetaTags = {
  canonical: url,
  description: "Ministry of Health - Edo State",
  image: `${url}/Images/logo.png`,
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "Ministry of Health - Edo State",
  type: PageType.website,
}

export default defaultMetaTags

export const AboutPageMetaTags: MetaTags = {
  canonical: url,
  description: "Ministry of Health - Edo State",
  image: `${url}/Images/logo.png`,
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "About | Ministry of Health - Edo State",
  type: PageType.website,
}

export const resourcesPageMetaTags: MetaTags = {
  canonical: url,
  description: "Edo State Ministry of Health - Resources",
  image: `${url}/Images/logo.png`,
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "Resources | Ministry of Health - Edo State",
  type: PageType.website,
}

export const NewsPageMetaTags: MetaTags = {
  canonical: url,
  description: "Edo State Ministry of Health - News",
  image: `${url}/Images/logo.png`,
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "News | Ministry of Health - Edo State",
  type: PageType.website,
}
