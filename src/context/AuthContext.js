import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();


export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'USER_IS_LOGED':
            return { ...state, token: action.payload }
        case 'USER_DATA':
            return { ...state, user: action.payload }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        token: null,
        user: {}
    })

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token)
            dispatch({ type: 'USER_IS_LOGED', payload: token })
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}