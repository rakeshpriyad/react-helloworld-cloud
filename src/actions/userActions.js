import * as actions from './actionCreators'

export const createUser = (name, age, salary) => {
    return { name, age, salary }
}

export const addUser = (user) => {
    return {
        type: actions.ADD_USER,
        payload: user
    }
}

export const updateUser = (user) => {
    return {
        type: actions.UPDATE_USER,
        payload: user
    }
}

export const removeUser = (id) => {
    return {
        type: actions.DELETE_USER,
        payload: id
    }
}

export const findUsers = () => {
    return {
        type: actions.FIND_USERS,
        payload: ""
    }
}

export const saveUser = (user) => ({
    type: actions.SAVE_USER,
    payload: user
});


export function fetchedUsers(users) {
    return {
        type: actions.FETCHED_USERS,
        payload: users
    }
}
export function loadingUsers() {
    return { type: actions.LOADING_USERS }
}

export const getUsers = () => {
    return { type: actions.GET_USER }
}


export const getUserFailed = (statusErrors) => {
    return { type: actions.GET_USER_FAILED, errors: statusErrors }
}
export const addUserFailed = (statusErrors) => {
    return { type: actions.ADD_USER_FAILED, errors: statusErrors }
}

export const userReceived = (data) => {
    return { type: actions.USER_RECEIVED, payload: data }
}

export const saveUserSuccess = () => {
    return { type: actions.SAVE_USER_SUCCESS_FULL }
}

export const updateUserFailed = (statusErrors) => {
    return { type: actions.UPDATE_USER_FAILED, errors: statusErrors }
}

export const updateUserSuccess = () => { return { type: actions.UPDATE_USER_SUCCESS_FULL } }
export const removeUserFailed = (statusErrors) => { return { type: actions.REMOVE_USER_FAILED, errors: statusErrors } }
export const removeUserSuccess = () => { return { type: actions.REMOVE_USER_SUCCESS_FULL } }


export const setEditing = (isEdit) => ({
    type: actions.SET_EDIT,
    payload: isEdit
});

export const setEditUser = (user) => ({
    type: actions.SET_EDIT_USER,
    payload: user
});
