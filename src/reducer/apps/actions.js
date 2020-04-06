export const SET_APPS = 'SET_APPS';
export const SET_APP = 'SET_APP';

const apps =  {
    about: {name: 'about', status: false},
    info: {name: 'info', status: false}
}

export function getApps() {
    return dispatch => {
        dispatch(setApps(apps));
    };
}

export function setApps(apps) {
    return {
        type: SET_APPS,
        apps
    }
}

export function setApp(app) {
    return {
        type: SET_APP,
        app
    }
}