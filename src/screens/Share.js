import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useMainStore } from '../store';
import { Input } from '../components';
import useForm from '../hooks/useForm';
import { commonStyles, colors, textStyles, spacing, radius } from '../theme';
import { hp } from '../utils/scaler';
import * as yup from 'yup';
import routes from '../constants/routes';

const Share = ({ navigation }) => {
    const { addUser } = useMainStore();
    const [loading, setLoading] = useState(false);
    const validation = yup.object({
        name: yup.string().required("Zorunlu"),
        job: yup.string().required("Zorunlu"),
        description: yup.string().required("Zorunlu"),
        avatar: yup.string().required("Zorunlu"),
    });

    const { values, setValues, isValid, onFormSubmit, errors, isSubmitted } =
        useForm(
            {
                name: "",
                job: "",
                description: "",
                avatar: "",
            },
            validation,
        );

    const onSubmit = async () => {
        onFormSubmit();
        if (!isValid) return;
        setLoading(true);
        addUser(values);
        setLoading(false);
        navigation.navigate(routes.home)
    };

    return (
        <SafeAreaView style={commonStyles.safearea}>
            <View style={commonStyles.container}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <Input
                            value={values.name}
                            onChangeText={val => setValues({ name: val })}
                            placeholder="Name Surname"
                            errorMessage={isSubmitted ? errors.name : ''}
                        />
                        <Input
                            value={values.job}
                            onChangeText={val => setValues({ job: val })}
                            placeholder="Job Title"
                            errorMessage={isSubmitted ? errors.job : ''}
                        />
                        <Input
                            value={values.description}
                            onChangeText={val => setValues({ description: val })}
                            placeholder="About Him/Her"
                            errorMessage={isSubmitted ? errors.description : ''}
                        />
                        <Input
                            value={values.avatar}
                            onChangeText={val => setValues({ avatar: val })}
                            placeholder="Image Link"
                            errorMessage={isSubmitted ? errors.avatar : ''}
                        />

                        <TouchableOpacity
                            onPress={() => onSubmit()}
                            style={styles.add}
                            disabled={loading}
                            testID="addButon"
                        >
                            <Text style={styles.addTxt}>Add Character</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Share;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginHorizontal: spacing.m,
    },
    form: {
        marginTop: hp(5),
        justifyContent: 'center',
    },
    add: {
        marginTop: spacing.m,
        backgroundColor: colors.primary,
        padding: spacing.m,
        borderRadius: radius.m
    },
    addTxt: {
        ...textStyles.medium,
        color: colors.white,
        alignSelf: 'center'
    }
});