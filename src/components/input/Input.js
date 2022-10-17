import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { colors, commonStyles, textStyles } from '../../theme';

const Input = ({
    errorMessage = '',
    ...props
}) => {
    return (
        <>
            <View style={[styles.container, props.containerStyle]}>
                <TextInput
                    {...props}
                    style={[styles.input, commonStyles.input, props.inputStyle]}
                    placeholderTextColor={props.placeholderTextColor || colors.gray}
                />
            </View>
            {errorMessage.length > 0 ? (
                <Text style={styles.error}>{errorMessage}</Text>
            ) : null}
        </>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        ...commonStyles.inputContainer,
    },
    input: {},
    error: {
        ...textStyles.smallBold,
        color: colors.danger,
    },
});
