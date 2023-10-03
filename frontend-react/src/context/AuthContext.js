import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer.js';

const INITIAL_STATE = {
    user: {
        _id: "6516a332a0e4a91d919a248a",
        userName: "Rizwan Ahmed",
        email: "rizwan@gmail.com",
        password: "$2a$10$oIASLEhFeIXeLm9YAZAGyeayCjWq.k7EMu5GxxgyMqvw.Cc.TigkW",
        profilePicture: "FB_IMG_1634883944960.jpg",
        followers: ["6516a35ba0e4a91d919a248c"],
        followings: ["6516a35ba0e4a91d919a248c"],
        isAdmin: false,
        city: "karachi",
        description: "this is my description"
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}