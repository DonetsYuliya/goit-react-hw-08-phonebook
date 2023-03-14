export const authEmail = ({ auth }) => auth.user.email;
export const authIsLogin = state => state.auth.isLogin;
export const authToken = state => state.auth.token;

// const initialState = {
//   auth: {
//     name: '',
//     email: '',
//     password: '',
//   },
//   token: '',
//   isLogin: false,
//   isLoading: true,
//   error: null,
// };
