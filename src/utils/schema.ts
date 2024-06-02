import * as Yup from "yup";


const signupValidation = Yup.object({
    fullname: Yup.string().min(3, 'Name is too short!').required('Name is required!'),
    email: Yup.string().email('Please enter a valid email').required('Email is required!'),
    password: Yup.string().matches(
        /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,20}$/,
        'Password must contain at least one uppercase, lowercase, number and special character'
    ).required('Password is required!'),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "password not matching"),
})

const loginValidation = Yup.object({
    email: Yup.string().email('Please enter a valid email').required('Email is required!'),
    password: Yup.string().matches(
        /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,20}$/,
        'Password must contain at least one uppercase, lowercase, number and special character'
    ).required('Password is required!'),
});

const forgotPasswordValidation = Yup.object({
    email: Yup.string().email('Please enter a valid email').required('Email is required!'),
})

const newPasswordValidation = Yup.object({
    password: Yup.string().matches(
        /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,20}$/,
        'Password must contain at least one uppercase, lowercase, number and special character'
    ).required('Password is required!'),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "password not matching"),
});

export {
    signupValidation,
    loginValidation,
    forgotPasswordValidation,
    newPasswordValidation,
}