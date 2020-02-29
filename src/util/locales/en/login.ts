export const login = {
  title: 'React App Login',
  subTitle: 'Please login to your account',
  form: {
    email: 'E-mail',
    password : 'Password',
    rememberMe: 'Remember me ',
    forgotPassword: 'Forgot password',
    login: 'Login',
    signUp: 'Sign Up',
  },
  placeholder: {
    email: 'Enter your email',
    password: 'Enter your password',
  },
  validate: {
    email: {
      require: 'Mail address is required',
      format: 'Email is wrong format',
    },
    password: {
      require: 'Password is required',
      minLength: 'Length must bigger than 8',
      maxLength: 'Length must smaller than 30',
      format: 'Password is must haft width Alphanumeric',
      confirmPassEqualPasss: 'Both newpassword and confirm password is the same',
    },
  }
};
