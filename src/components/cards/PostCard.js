import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    colors,
    commonStyles,
    fontWeight,
    radius,
    spacing,
    textStyles,
} from '../../theme';
import { useMainStore } from '../../store';

const PostCard = ({
    name = '',
    avatar = '',
    job = '',
    description = '',
    id = '',
    onPress = () => { },
    ...props
}) => {
    const { data: { data }, setUser } = useMainStore();

    const swapUsers = (index, position) => {
        const users = data;
        const targetIndex = index + position;

        const temp = users[index];

        users[index] = users[targetIndex];
        users[targetIndex] = temp;
        setUser(users);
    };

    const deleteUser = (id) => {
        const index = id;
        if (index > -1) {
            data.splice(index, 1);
        }
        setUser(data);
    };

    return (
        <View style={styles.card} {...props}>
            <TouchableOpacity onPress={onPress} style={styles.nameContainer}>
                <Text style={styles.id}>{id + 1}</Text>
                <Image
                    style={styles.avatar}
                    source={{ uri: avatar }}
                    resizeMode="cover"
                />
                <Text style={styles.name}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
                <Icon
                    onPress={() => swapUsers(id, -1)}
                    name="arrow-up-outline"
                    size={25}
                    style={[styles.icon, { color: colors.green }]}
                />
                <Icon
                    onPress={() => swapUsers(id, +1)}
                    name="arrow-down-outline"
                    size={25}
                    style={[styles.icon, { color: colors.danger }]}
                />
                <Icon
                    onPress={() => deleteUser(id)}
                    name="trash-outline"
                    size={25}
                    style={[styles.icon, { color: colors.dark }]}
                />
            </View>
        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    card: {
        padding: spacing.xs,
        borderRadius: radius.s,
        backgroundColor: colors.white,
        marginVertical: spacing.xs,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    id: {
        padding: spacing.xs,
        ...textStyles.normal,
    },
    name: {
        ...textStyles.normal,
        ...fontWeight.bold,
        color: colors.dark,
        marginLeft: spacing.xxs
    },
    avatar: {
        ...commonStyles.xsAvatar,
        marginLeft: spacing.xs,
    },
    btnContainer: {
        flexDirection: 'row',
        padding: spacing.xxs,
        alignItems: 'center'
    },
    icon: {
        padding: spacing.xxs,
        marginRight: spacing.xs
    }
});
