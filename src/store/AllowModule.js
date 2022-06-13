import ConsentService from '../service/ConsentService';

const accessToken = localStorage.getItem('accessToken');

const initialState = accessToken
    ? { status: { allow: true }, accessToken }
    : { status: { allow: false }, accessToken: null };

export const auth2 = {
    namespaced: true,
    state: initialState,
    actions: {
        allow() {
            return ConsentService.allows();
        },
    }
};