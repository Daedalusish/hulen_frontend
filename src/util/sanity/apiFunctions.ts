import { SanityNavBarContent } from '@/types/sanity'
import {
  getFooterElementsGroq,
  getHomePageGroq,
  getNavigationElementsGroq,
  getNoPageFoundGroq,
} from './groqQueries'
import { sanityClient } from './sanityClient'
import { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import { Sanity404Page } from '@/types/sanity/pageNotFound'
import { GenericPageProps } from '@/types/sanity/genericPage/genericPageProps'

export async function getSanityNavigationElements() {
  const navigationElements = await sanityClient.fetch(getNavigationElementsGroq)

  return navigationElements as SanityNavBarContent
}

export async function getFooterElements() {
  const footerElements = await sanityClient.fetch(getFooterElementsGroq)

  return footerElements as SanityFooterElements[]
}

export async function get404PageContent() {
  const noPageContent = await sanityClient.fetch(getNoPageFoundGroq)

  return noPageContent as Sanity404Page
}

export async function getHomePageContent() {
  const homePageContent = await sanityClient.fetch(getHomePageGroq)

  return homePageContent as GenericPageProps
}
