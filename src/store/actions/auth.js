import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};


export const authSuccess = ( token, student) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        access_token: token,
        student: student
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('student');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationDate) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationDate * 1000 );
    };
};

export const auth = (id, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: id,
            password: password
        };
        axios.post('https://cors-anywhere.herokuapp.com/http://marma.bdeducation.org.bd/api/auth/login', authData)
            .then(response => {
                // console.log(response.data);
                const expirationDate = new Date(new Date().getTime() + response.data.expires_in * 1000 );
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('expirationDate', expirationDate); 
                localStorage.setItem('student', JSON.stringify(response.data.student));
                dispatch(authSuccess( response.data.access_token, response.data.student ));
                // dispatch(checkAuthTimeout(expirationDate));
            })
            .catch(err => {
                dispatch(authFail(err));
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const access_token = localStorage.getItem('access_token');
        if (!access_token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const student = localStorage.getItem('student');
                dispatch(authSuccess(access_token, student));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};