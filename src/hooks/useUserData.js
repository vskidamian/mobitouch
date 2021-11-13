import axios from 'axios';
import { useAuthContext } from './useAuthContext.js';

import { userDataURL } from '../api';

export const useGetUserData = () => {
    const { dispatch } = useAuthContext()

    const getUserData = async (token) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        };

        try {
            const res = await axios.get(userDataURL, config);
            // dispatch user data
            dispatch({ type: 'USER_DATA', payload: res.data })
        }
        catch (err) {
            console.log(err);
        }
    }

    return { getUserData }
}