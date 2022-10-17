import AsyncStorage from '@react-native-async-storage/async-storage';

async function setItem(itemKey, itemValue) {
    try {
        await AsyncStorage.setItem(itemKey, JSON.stringify(itemValue));
    } catch (e) {
        console.log(e);
    }
}

async function getItem(itemKey) {
    try {
        const token = await AsyncStorage.getItem(itemKey);
        const parseToken = await JSON.parse(token);

        return parseToken;
    } catch (e) {
        console.warn(e);
        return null;
    }
}

async function removeItem(itemKey) {
    try {
        await AsyncStorage.removeItem(itemKey);
    } catch (e) {
        console.warn(e);
    }
}

export { setItem, getItem, removeItem };
