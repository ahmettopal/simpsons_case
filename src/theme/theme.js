import { wp } from '../utils/scaler';
import { colors } from './colors';

export const radius = {
    xs: 5,
    s: 10,
    m: 13,
    l: 25,
};

export const spacing = {
    xxs: 3,
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
    xl: 24,
    xxl: 30,
};

export const height = {
    input: 50,
    button: 50,
    bigAvatar: wp(40),
    mediumAvatar: wp(17),
    smallAvatar: wp(10),
    xsAvatar: wp(8),
    badge: wp(5),
};

export const fontSize = {
    h1: 56,
    h2: 40,
    h3: 30,
    h4: 25,
    title: 20,
    medium: 16,
    normal: 13,
    small: 11,
    xsmall: 9,
};

export const fontWeight = {
    bold: { fontFamily: 'Poppins-Bold' },
    medium: { fontFamily: 'Poppins-Medium' },
    regular: { fontFamily: 'Poppins-Regular' },
};

const textBase = {
    color: colors.dark,
    ...fontWeight.regular,
};

const h1 = {
    ...textBase,
    fontSize: fontSize.h1,
    ...fontWeight.bold,
};

const h2 = {
    ...textBase,
    fontSize: fontSize.h2,
    ...fontWeight.bold,
};

const h3 = {
    ...textBase,
    fontSize: fontSize.h3,
    ...fontWeight.bold,
};

const h4 = {
    ...textBase,
    fontSize: fontSize.h4,
    ...fontWeight.bold,
};

const title = {
    ...textBase,
    ...fontWeight.bold,
    fontSize: fontSize.title,
};

const medium = {
    ...textBase,
    ...fontWeight.medium,
    fontSize: fontSize.medium,
};

const normal = {
    ...textBase,
    fontSize: fontSize.normal,
    ...fontWeight.regular,
};

const normalMedium = {
    ...textBase,
    fontSize: fontSize.normal,
    ...fontWeight.medium,
};

const small = {
    ...textBase,
    ...fontWeight.medium,
    fontSize: fontSize.small,
};

const smallBold = {
    ...small,
    ...fontWeight.bold,
};

const normalBold = {
    ...normal,
    ...fontWeight.bold,
};

export const textStyles = {
    h1,
    h2,
    h3,
    h4,
    title,
    medium,
    normal,
    normalMedium,
    small,
    smallBold,
    normalBold,
    textBase,
};

export const shadow = {
    sm: {
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    md: {
        shadowColor: '#3f3f3f',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.27,

        elevation: 7,
    },
};
