/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
import { Dimensions, ColorPropType } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const AppStyles = {
    color: {
        COLOR_PRIMARY: '#2ec7ab',
        COLOR_SECONDARY: '#111',
        COLOR_WHITE: '#FFFFFF',
        COLOR_BLACK: '#000000',
        COLOR_GREY: '#787878',
        COLOR_GREEN: 'green',
        COLOR_PLACEHOLDER: '#111111',
        COLOR_GREY_WHITE: '#fafafa',
        COLOR_DARK_SEPERATOR: '#d4d4d4',
        COLOR_BLACK_TRANSP: 'rgba(0, 0, 0, 0.7)',
        COLOR_GREY_TRANSP: 'rgba(67, 85, 85, 0.7)',
        COLOR_DARTGRAY: '#cccccc',
        COLOR_BLUE: '#00c6f0',
        COLOR_LINKCOLOR: '#00a4c7'

    },
    fonts: {
        FONT_REGULAR: 'Century_Gothic',
        FONT_BODY: 'Poppins_Regular',
        FONT_MEDIUM: 'Bold',
        FONT_14: viewportWidth * 0.033,
        FONT_15: viewportWidth * 0.04,
        FONT_20: viewportWidth * 0.05
    }
};
export default AppStyles;
