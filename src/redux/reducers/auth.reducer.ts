import { REQUEST, SUCCESS, FAILURE, AUTH_ACTION } from '../constant';

const initialState = {
  userInfo: {},
  metaData: {},
  errors: {
    login: [],
    register: [],
  },
};

export type AuthReducer = Readonly<typeof initialState>;

export default (state: AuthReducer = initialState, action: any): AuthReducer => {
  switch (action.type) {
    case SUCCESS(AUTH_ACTION.LOGIN): {
      const { userInfo, metaData } = action.payload;
      return {
        ...state,
        userInfo,
        metaData: metaData,
        errors: {
          login: [],
          register: [],
        },
      };
    }
    case FAILURE(AUTH_ACTION.LOGIN): {
      const { errors } = action.payload;
      return {
        ...state,
        errors: {
          ...state.errors,
          login: errors,
        },
        userInfo: {},
        metaData: {}
      };
    }

    case SUCCESS(AUTH_ACTION.REGISTER): {
      const { userInfo, metaData } = action.payload;
      return {
        ...state,
        userInfo,
        metaData: metaData,
        errors: {
          login: [],
          register: [],
        },
      };
    }
    case FAILURE(AUTH_ACTION.REGISTER): {
      const { errors } = action.payload;
      return {
        ...state,
        errors: {
          ...state.errors,
          register: errors,
        },
        userInfo: {},
        metaData: {}
      };
    }

    case SUCCESS(AUTH_ACTION.LOGOUT): {
      return {
        ...state,
        userInfo: {},
        errors: {
          login: [],
          register: [],
        },
      };
    }

    case SUCCESS(AUTH_ACTION.GET_USER): {
      const { userInfo, metaData } = action.payload;
      return {
        ...state,
        userInfo,
        metaData,
        errors: {
          login: [],
          register: [],
        },
      };
    }

    case REQUEST(AUTH_ACTION.CLEAR_ERRORS): {
      return {
        ...state,
        errors: {
          login: [],
          register: [],
        },
      };
    }
    default:
      return state;
  }
};
