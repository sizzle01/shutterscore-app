import { makeStyles } from '@material-ui/core/styles'
export const useCarouselStyles = makeStyles((theme) => ({
  carousel: {
    width: '55vw',
    height: '100vh',
    background:
      'transparent linear-gradient(180deg, #FFFFFF 0%, #80BFFF 100%) 0% 0%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(7),
  },
  sliderContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: theme.spacing(8.6),

    // transform: 'rotate(90deg)',
    // transition: 'transform 2s ease-in-out',
    animation: `$rotate 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  itemName: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize * 1.4,
    color: theme.design.colors.gray90,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginBottom: theme.spacing(0.7),
  },
  itemDesc: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.gray90,
    fontStyle: 'normal',
    fontWeight: 'bold',
    width: 310,
    height: 54,
  },
  sliderButton: {
    textDecoration: 'none',
    position: 'absolute',
    bottom: 115,
    right: -1,
    width: '80%',
    display: 'none',
  },

  sliderBtn: {
    backgroundColor: theme.design.colors.blue,
    width: '75%',
    color: theme.design.colors.white,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.design.colors.blue,
    },
  },

  /**MEDIA QUERIES */

  '@media screen and (max-width: 890px)': {
    carousel: {
      width: '100%',
      marginLeft: theme.spacing(0),
      overflowX: 'hidden',
    },
    sliderButton: {
      display: 'block',
    },
  },
  '@media screen and (max-width: 768px)': {},
  '@media screen and (max-width: 500px)': {
    sliderButton: {},
  },

  /**Key frames */
  '@keyframes rotate': {
    '100%': {
      transform: 'translateY(20%)',
    },
    '50%': {
      transform: 'translateX(20%)',
    },
    '25%': {
      transform: 'translateY(20%)',
    },
    '0%': {
      transform: 'translateX(20%)',
    },
  },
}))
