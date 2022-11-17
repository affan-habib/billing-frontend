import * as Yup from 'yup';

class LoginModel {

    /**
     * Model properties
     */
    constructor() {
        this.email = '';
        this.password = '';
    }

    /**
     * Get model instance from json
     */
    fromJson(data = {}) {
        let obj = new LoginModel();
        if (data.id !== undefined && data.id) {
            obj.id = data.id;
        }
        obj.email = data.email ?? '';
        obj.password = data.password ?? '';
        return obj;
    }

    /**
     * Get string from model instance
     */
    toString(data = {}) {
        let obj = new LoginModel()
            .fromJson(data);
        return JSON.stringify(obj);
    }

    /**
     * Validator schema
     */
    validator() {
        return Yup.object().shape({
            email: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        });
    }

}

export const Login = new LoginModel();
