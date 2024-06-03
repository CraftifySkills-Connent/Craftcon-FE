export interface SignupDto {
	email: string
	fullName: string
	password: string
	cpassword: string
}

export interface LoginDto {
	email: string
	password: string
}

export interface ForgotPasswordDto {
	email: string
}

export interface NewPasswordDto {
	password: string
	cpassword: string
}