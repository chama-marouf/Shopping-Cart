/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const AppStyles = {
  colors: {
    COLOR_PRIMARY: '#F53B74',
    COLOR_PRIMARY_LIGHT: '#FFF0F5',
    COLOR_SECONDARY: '#111',
    COLOR_WHITE: '#FFFFFF',
    COLOR_BLACK: '#0D2446',
    COLOR_GREY: '#74798C',
    COLOR_DARK_GREY: '#364B6B',
    COLOR_LIGHT_GREY: '#F9F9F9',
    COLOR_GREEN: '#49D4AE',
    COLOR_PLACEHOLDER: '#758193',
    COLOR_GREY_WHITE: '#BCC2CB',
    COLOR_DARK_SEPERATOR: '#d4d4d4',
    COLOR_BLACK_TRANSP: 'rgba(0, 0, 0, 0.7)',
    COLOR_GREY_TRANSP: 'rgba(67, 85, 85, 0.7)',
    COLOR_SHADOW: '#758193',
    COLOR_RED: '#F6423C',
    COLOR_YELLOW: '#FBBC05',
    COLOR_FOCUSED: '#01D0DA',
    COLOR_FOCUSED_LIGHT: '#E9FEFF',
  },
  fonts: {
    FONT_REGULAR: 'JosefinSans-Regular',
    FONT_BOLD: 'JosefinSans-Bold',
    FONT_LIGHT: 'JosefinSans-Light',
    FONT_SEMI_BOLD: 'JosefinSans-SemiBold',
  },
  sizes: {
    base: 8,
    padding: 10,
    screenWidth: width,
    screenHeight: height,
    screenPadding: 24,
    borderRadius: 16,
  },
};
export default AppStyles;
