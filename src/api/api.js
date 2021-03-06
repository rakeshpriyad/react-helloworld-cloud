import * as actions from '../actions/actionCreators'
export const METHOD_GET = 'GET'
export const METHOD_PUT = 'PUT'
export const METHOD_POST = 'POST'
export const METHOD_DELETE = 'DELETE'
export const CONTENT_JSON_TYPE = {'Content-type' : 'application/json' }
export const ALL_USER = 'user/all'
export const USERS_ALL_URL = actions.URL + ALL_USER
export const USERS_S_URL = actions.URL + "user/"


export const fetchUsers = () => {
    return fetch(USERS_ALL_URL, {
        method: METHOD_GET,
        headers: CONTENT_JSON_TYPE
    }).then(res => res.json()).catch(error => {
        console.error(error);
        return error;
    });

}

export function submitSaveUser(user) {
    console.log("Saving.." + JSON.stringify(user));
   return fetch(USERS_S_URL, {
        method: METHOD_POST,
        headers: CONTENT_JSON_TYPE,
        body: JSON.stringify(user)
    }).then(res => {
        return res.json();
    }
    ).catch(error => {
        console.error(error);
        return error;
    }); 
}

export function submitUpdateUser(user) {
    console.log("Updatingg.." + JSON.stringify(user));
    return fetch(USERS_S_URL + user.id, {
        method: METHOD_PUT,
        headers:CONTENT_JSON_TYPE,
        body: JSON.stringify(user)
    }).then(res => {
        console.log(res);
        return res;
    } 
    
    )
        .catch(error => {
            console.error(error);
            return error;
        });
}


export const submitRemoveUser = (user) => {
    return fetch(USERS_S_URL + user.id, {
        method: METHOD_DELETE
    }).then(res => res.json())
        .catch(error => {
            console.error(error);
            return error;
        });
}
