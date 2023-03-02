import {isEmail, isLength, isEmpty} from 'validator';

const emptyFieldEmail = (email,setErrors) => {

    if(isEmpty(email)) {

        setErrors ((pre) => {

            return {
                email: {msg: "*El campo no puede estar vacio", status: true},
                password: pre.password,
            };
        });
    } else {
        setErrors((pre) => {
            return {
                email: {msg: "", status: false},
                password: pre.password,
            };
        });
        }  
    };

    const emailField = (email,setErrors) => {

        if (isEmail(email)) {

             setErrors((pre) => {
                pre.email.msg = "",
                pre.email.status = false;
                return pre;
             });
        } else {
            setErrors((pre) => {
                pre.email.msg = "El mail no es válido";
                pre.email.status = true;
                return pre;
            });
        }
    };

    const passwordField = (password,setErrors) => {
        if(isLength(password, {min:6, mas:12})) {

            setErrors((pre) => {
                pre.password.msg = "";
                pre.password.status = false;
                return pre;
            });
        } else {
            setErrors((pre) => {
                pre.password.msg = "El campo debe tener entre 6 y 12 caracteres"
                pre.password.status = true;
                return pre;
            })
        }
    };

    export {emptyFieldEmail, emailField, passwordField};
    
