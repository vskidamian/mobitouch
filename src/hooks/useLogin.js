import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext.js';

import { loginURL } from '../api';

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const loginUser = async (login, password) => {
        setError(null)
        setIsPending(true)

        try {
            // login
            const res = await axios.post(loginURL, {
                login: login,
                password: password
            });

            localStorage.setItem('token', res.data);

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.data })

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        }
        catch (err) {
            if (!isCancelled) {
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { loginUser, isPending, error }
}