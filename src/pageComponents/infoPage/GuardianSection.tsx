'use client'

import { HulenPortableText } from '@/components/GenericPageContent'
import { SanityImageComponent } from '@/components/sanity'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import type { GuardianInfoPageContent } from '@/types/sanity/infoPages/guardianInfoPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'

export const GuardianSection = ({ content }: { content: GuardianInfoPageContent }) => {
  const { language } = useLanguage()

  return (
    <Stack sx={{ alignItems: 'center', padding: '2rem', width: '100%' }}>
      <Stack
        sx={{
          width: '100%',
          maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
          gap: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack>
          <Box sx={{ width: '100%', alignSelf: 'start', textAlign: 'center' }}>
            <Typography variant='h1' fontWeight={700} width={'100%'}>
              {content.header[language]}
            </Typography>
            <HulenPortableText genericSanityPageProps={content.intro} />

            <Stack sx={{ flexDirection: 'row' }}>
              <SanityImageComponent imageData={content.guardianImage} width={500} />
              <Stack
                sx={{
                  flexDirection: 'column',
                  textAlign: 'left',
                  '& a': { color: 'white' },
                  width: '100%',
                }}
              >
                <Typography variant='h4' fontWeight={700} width={'100%'} textAlign={'center'}>
                  {content.subHeading[language]}
                </Typography>
                <HulenPortableText genericSanityPageProps={content.description} />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}
