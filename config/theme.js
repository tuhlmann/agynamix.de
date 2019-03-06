import { darken, lighten } from 'polished'
import { fonts } from '../src/lib/typography'

const brand = {
  primary: '#573EDE',
  secondary: '#EEF4F2',
}

const colors = {
  agynamix: '#DA251D',
  link_hover_color_15: 'rgba(219, 87, 86, 0.15)',
  link_hover_color_40: 'rgba(219, 87, 86, 0.4)',
  primary_light: `${lighten(0.55, brand.primary)}`,
  background_color: '#EAE5E5',
  footer_color: 'rgb(6, 19, 36)',
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  bg_color: '#EAE5E5',
  body_color: 'rgba(0,0,0,0.85)',
  link_color: '#4D4D4D',
  link_color_hover: `${darken(0.07, '#4D4D4D')}`,
  red: '#E75248',
  green: '#17A974',
  blue: '#327CDC',
  yellow: '#FFB700',
  purple: '#8242F6',
}

const theme = {
  colors,
  fonts,
  brand,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  transition: {
    ease: 'all 200ms ease',
  },
}

export default theme
