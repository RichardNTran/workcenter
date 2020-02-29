export const register = {
  title: 'React App Login',
  form: {
    username: 'ユーザー名',
    email: 'メールアドレス',
    password: 'パスワード',
    repassword: '再パスワード',
    rememberMe: '次回から入力を省略',
    forgotPassword: 'パスワードを忘れた場合',
    login: 'ログイン',
    register: '登録',
  },
  placeholder: {
    username: 'please input user name',
    email: 'メールアドレスを入力する',
    password: 'パスワードを入力する',
    repassword: 'パスワードを入力する',
  },
  validate: {
    email: {
      require: 'メールアドレスは必須項目です。',
      format: 'メールアドレスの形式になっている必要あり',
    },
    password: {
      require: 'パスワードは必須項目です。',
      minLength: '８文字以上で入力してください',
      maxLength: '64文字以下で入力してください',
      format: '半角英数記号で入力してください',
      confirmPassEqualPasss: '同じ値を入力してください',
    },
  },
  error: {
    missRole: 'ヒーロのアカウントでログインしてください。',
  }
};
