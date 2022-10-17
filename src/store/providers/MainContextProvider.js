/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useState
} from 'react';
import {
    SET_DATA,
    INIT,
} from '../actions/mainActions';
import mainReducer from '../reducers/mainReducer';
import { getItem, setItem } from '../../helpers/storage';
import DataServices from '../../services/DataServices';

const MainContext = createContext();
const storageKey = '@MainStore';
const initialState = {
    user: null
};

export const useMainStore = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
    const [data, dispatch] = useReducer(mainReducer, initialState);

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        saveStorage(data);
    }, [data]);

    const getUser = async () => {
        const login = await checkStorage();
        if (login === null) {
            const [user] = await DataServices.getPosts();
            setUser(user);
        }
        await checkStorage();
    };

    const addUser = user => {
        data.data.push(user);
        dispatch({ type: INIT, payload: data });
    };

    const setUser = user => {
        dispatch({ type: SET_DATA, payload: user });
    };

    const checkStorage = async () => {
        const savedData = await getItem(storageKey);
        if (savedData)
            dispatch({ type: INIT, payload: { ...savedData } });
        return savedData;
    };

    const saveStorage = async (newData = data) => {
        await setItem(storageKey, newData);
    };

    return (
        <MainContext.Provider
            value={{
                data,
                dispatch,
                setUser,
                saveStorage,
                getUser,
                addUser
            }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainContextProvider;
