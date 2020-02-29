export const register = {
  title: 'React App Register',
  subTitle: 'Please login to your account',
  form: {
    username: 'Username',
    email: 'E-mail',
    password : 'Password',
    repassword: 'Repassword',
    rememberMe: 'Remember me ',
    forgotPassword: 'Forgot password',
    login: 'Login',
    register: 'Register',
  },
  placeholder: {
    username: 'Enter user name',
    email: 'Enter your email',
    password: 'Enter your password',
    repassword: 'Enter your password',
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
