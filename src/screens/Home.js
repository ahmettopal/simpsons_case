/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import {
    PostCard,
} from '../components';
import { colors, commonStyles, spacing, textStyles } from '../theme';
import routes from '../constants/routes';
import { useMainStore } from '../store';

const Home = ({ navigation }) => {
    const {
        data: { data },
    } = useMainStore();

    const renderItem = ({ item, index }) => {
        return (
            <PostCard
                onPress={() => navigation.navigate(routes.detail, {
                    name: item?.name,
                    avatar: item?.avatar,
                    job: item?.job,
                    description: item?.description
                })}
                name={item?.name}
                avatar={item?.avatar}
                job={item?.job}
                description={item?.description}
                id={index}
            />
        );
    };

    return (
        <View style={commonStyles.container}>
            <SafeAreaView style={commonStyles.safearea}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={renderItem}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate(routes.share)}
                    style={styles.addBtn}
                    testID='shareButon'
                >
                    <Text style={[styles.add, { color: colors.white }]}>+</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    addBtn: {
        ...commonStyles.mediumAvatar,
        marginBottom: spacing.xs,
        alignSelf: 'center',
        backgroundColor: colors.primary,
        padding: spacing.s,
    },
    add: {
        alignSelf: 'center',
        ...textStyles.h3
    }
});
