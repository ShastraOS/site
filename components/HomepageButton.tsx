import { styled } from '@modulz/design-system';

export const HomepageButton = styled('button', {
  appearance: 'none',
  border: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  backgroundColor: 'transparent',
  fontFamily: '$untitled',
  borderRadius: '15px',
  lineHeight: 1,
  fontWeight: 500,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  fontSize: '$4',
  height: '$7',
  px: '$3',
  transition: 'background-color 75ms ease',

  variants: {
    color: {
      gray: {
        color: '$slate11',
        boxShadow: '0 0 0 0.1px $colors$slate4, inset 0 0 0 1px $colors$slate8',
        '&:hover': {
          backgroundColor: '$slate3',
          color: '$slate12',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$slate8, inset 0 0 0 1px $colors$slate8',
        },
      },

      indigo: {
        backgroundColor: '$indigo5',
        color: '$indigo11',
        '&:hover': {
          backgroundColor: '$indigo6',
          color: '$indigo12',
          boxShadow: '0 0 0 0.1px $colors$indigo9, inset 0 0 0 1px $colors$indigo10',
        },
        '&:active': {
          backgroundColor: '$indigo7',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$indigo9, inset 0 0 0 1px $colors$indigo10',
        },
      },

      bronze: {
        backgroundColor: '$bronze5',
        color: '$bronze11',
        '&:hover': {
          backgroundColor: '$bronze6',
        },
        '&:active': {
          backgroundColor: '$bronze7',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$bronze9, inset 0 0 0 1px $colors$bronze0',
        },
      },

      violet: {
        backgroundColor: '$violet4',
        color: '$violet11',
        '&:hover': {
          backgroundColor: '$violet5',
        },
        '&:active': {
          backgroundColor: '$violet6',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$violet8, inset 0 0 0 1px $colors$violet8',
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
  },
  length: 0
});
