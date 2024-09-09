'use client'
import { ContactCard } from '@/components/cards'
import { hulen_yellow_text } from '@/styles'
import type { SanityContactPageContent } from '@/types/sanity/contact'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Grid, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'

/**
 * Defines the layout of the content from Sanity Studio on the Contact page.
 * Contact info is listed in a grid that adjust the number of columns based on the screen size.
 * Read more about mui grids: https://mui.com/material-ui/react-grid/
 * @param content from sanity studio
 * @returns
 */
export const ContactPageContent = ({ content }: { content: SanityContactPageContent }) => {
  const { language } = useLanguage()

  return (
    <>
      <Stack alignItems={'center'} gap='1rem' sx={{ '&>*': { margin: 0, textAlign: 'center' } }}>
        <PortableText value={content.headerInfoBlock[language]} />
        <Stack alignItems={'center'}>
          <Typography variant='overline'>{content.booking.title[language]}</Typography>
          <Typography
            component={'a'}
            href={`mailto:${content.booking.email}`}
            sx={{ color: 'white', textDecorationColor: hulen_yellow_text }}
          >
            {content.booking.email}
          </Typography>
        </Stack>
      </Stack>
      <Grid container spacing={'1.5rem'} marginTop='1rem'>
        {content.contactList.map((contactInfo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ContactCard contactInfo={contactInfo} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
