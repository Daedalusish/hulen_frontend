import { Karla } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const karla = Karla({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const hulen_black = '#000000'
export const hulen_yellow = '#F7BD13'
export const hulen_yellow_text = '#FFD000'

const theme = createTheme({
  palette: {
    background: {
      default: hulen_black,
    },
    text: {
      primary: hulen_yellow_text,
    },
  },
  typography: {
    fontFamily: karla.style.fontFamily,
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: '0.3s',
          '&:hover': {
            backgroundColor: hulen_yellow,
            svg: {
              fill: hulen_black,
            },
          },
          svg: {
            fill: hulen_yellow_text,
          },
        },
      },
    },
  },
})

export default theme
