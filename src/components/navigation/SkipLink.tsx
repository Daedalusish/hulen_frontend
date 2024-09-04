'use client'
import type { TranslationObject } from '@/types/sanity/translationObject'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { styled } from '@mui/system'
import Link from 'next/link'

const StyledLink = styled(Link)({
  color: 'white',
  position: 'absolute',
  textAlign: 'center',
  left: '50%',
  top: 0,
  transform: 'translateY(-100%)',
  transition: 'transform 0.2s',
  '&:focus': {
    transform: 'translateY(25%)',
  },
})
/**
 * The SkipLink component allows keyboard and screen reader users to skip directly to the main content.
 * Place it at the top of the <body> to ensure it's the first tabbable element on the page.
 */
export const SkipLink = ({ translationContent }: { translationContent: TranslationObject }) => {
  const { language } = useLanguage()

  const moveFocus = () => {
    //Move focus to #maincontent so tab indexing also moves
    const mainContent = document.getElementById('maincontent')
    mainContent?.focus()
  }

  return (
    <StyledLink href='#maincontent' onClick={moveFocus}>
      {translationContent.content[language]}
    </StyledLink>
  )
}
