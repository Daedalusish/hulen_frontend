import type { SanityNavElement } from '@/types/sanity'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { ArrowDownward } from '@mui/icons-material'
import { Stack } from '@mui/material'
import type { MouseEventHandler } from 'react'
import { LinkWrapper } from './LinkWrapper'

export const NavLink = ({
  navElement,
  isCurrentPath,
  onClick,
}: {
  navElement: SanityNavElement
  isCurrentPath: boolean
  onClick: MouseEventHandler
}) => {
  const { language } = useLanguage()

  return (
    <Stack alignItems='center'>
      <ArrowDownward sx={{ visibility: isCurrentPath ? 'visible' : 'hidden' }} />
      <LinkWrapper href={navElement.subUrl} variant='menuLink' passHref onClick={onClick}>
        {navElement.title[language]}
      </LinkWrapper>
    </Stack>
  )
}
