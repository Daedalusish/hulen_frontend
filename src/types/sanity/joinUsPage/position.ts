import { LanguageOptions } from '@/types/language'
import { PortableTextBlock } from '@portabletext/types'
import { SanityImage } from '..'

export type PositionShiftType = 'night_shift' | 'outside_regular'

export interface Position {
  title: Record<LanguageOptions, string>
  category: PositionShiftType
  description: Record<LanguageOptions, PortableTextBlock>
  descImage: SanityImage
}
