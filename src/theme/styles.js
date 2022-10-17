import { StyleSheet } from 'react-native';
import { fontSize, fontWeight, height, radius, textStyles } from '.';
import { colors } from './colors';
import { spacing } from './theme';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    safearea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        paddingHorizontal: spacing.m,
    },
    inputContainer: {
        height: height.input,
        backgroundColor: colors.white,
        paddingHorizontal: spacing.s,
        borderRadius: radius.s,
        marginVertical: spacing.s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        ...textStyles.textBase,
        ...fontWeight.medium,
        color: colors.gray,
        fontSize: fontSize.medium,
        flex: 1,
        height: height.input,
        marginHorizontal: spacing.xs,
    },
    smallAvatar: {
        height: height.smallAvatar,
        width: height.smallAvatar,
        borderRadius: height.smallAvatar,
    },
    mediumAvatar: {
        height: height.mediumAvatar,
        width: height.mediumAvatar,
        borderRadius: height.mediumAvatar,
    },
    bigAvatar: {
        height: height.bigAvatar,
        width: height.bigAvatar,
        borderRadius: height.bigAvatar,
    },
    xsAvatar: {
        height: height.xsAvatar,
        width: height.xsAvatar,
        borderRadius: height.xsAvatar,
    },
    inputText: {
        ...textStyles.normal,
        ...fontWeight.medium,
        color: colors.gray,
        paddingVertical: spacing.xs,
    },
    emptyText: {
        ...textStyles.medium,
        textAlign: 'center',
        marginVertical: spacing.s,
    },
    badge: {
        height: height.badge,
        width: height.badge,
        borderRadius: height.badge
    }
});
