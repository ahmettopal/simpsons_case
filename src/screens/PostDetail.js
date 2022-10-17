import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {
    colors,
    commonStyles,
    fontWeight,
    spacing,
    textStyles,
} from '../theme';
import { wp } from '../utils/scaler';

const PostDetail = ({ route, navigation }) => {
    const name = route?.params?.name;
    const avatar = route?.params?.avatar;
    const job = route?.params?.job;
    const description = route?.params?.description;

    return (
        <View style={commonStyles.container}>
            <SafeAreaView style={commonStyles.safearea}>
                <View style={styles.content}>
                    <Image
                        style={styles.image}
                        source={{ uri: avatar }}
                        resizeMode="contain"
                    />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.job}>{job}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default PostDetail;

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        padding: spacing.m
    },
    name: {
        ...textStyles.title,
        ...fontWeight.bold,
        color: colors.dark,
    },
    image: {
        height: wp(60) / 0.8,
        width: wp(55),
        marginVertical: spacing.xs,
        alignSelf: 'center',
    },
    description: {
        ...textStyles.normal,
        ...fontWeight.medium,
        color: colors.gray,
    },
    job: {
        ...textStyles.normal,
        ...fontWeight.normal,
        color: colors.gray,
    },
});
