export const API = {
    USER: {
        LOGIN: `/api/user/login`,
        REGISTER: `/api/user/register`,
        UPDATE_OWN_INFO: `/api/user/updateOwnUserInfo`,
        UPDATE_PASSWORD: `/api/user/updatePassword`,
        GET_INFO_BY_ID: (id: string | number) => `/api/user/getUserInfoById/${id}`,
    },
    UPLOAD: {
        IMG: `/api/upload/img`,
    },
}