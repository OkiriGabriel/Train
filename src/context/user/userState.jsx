import React, { useReducer, useContext } from 'react';
import Axios from 'axios';
import storage from '../../components/helpers/storage'

import UserContext from './userContext';
import UserReducer from './userReducer';

import {
    GET_LOGGEDIN_USER,
    SET_LOADING
} from '../types'

const UserState = (props) => {

    const initialState = {
        user: {},
        loading: false
    }

    const config = {
        headers: {
            ContentType: 'application/json'
        }
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUser = async () => {

        setLoading()


        try {

            await Axios.get(`${process.env.REACT_APP_API_URL}/auth/user`, storage.getConfigWithBearer())
            .then((resp) => {

                dispatch({
                    type: GET_LOGGEDIN_USER,
                    payload: resp.data.data
                })

            }).catch((err) => {
                console.log(`Error! Could not get logged in user ${err}`)
            })
            
        } catch (err) {
            console.log(`Error! Could not get logged in user ${err}`)
        }

    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return <UserContext.Provider
        value={{
            user: state.user,
            loading: state.loading,
            getUser
        }}
    >
        {props.children}
    </UserContext.Provider>

}

export default UserState;