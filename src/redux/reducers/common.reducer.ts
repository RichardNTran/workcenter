import { MODAL_ACTION, REQUEST } from '../constant';

const initialState = {
  isShowModal: false,
  metaData: {},
  errors: [],
};

export type CommonReducer = Readonly<typeof initialState>;

export default (state: CommonReducer = initialState, action: any): CommonReducer => {
  switch (action.type) {
    case REQUEST(MODAL_ACTION.TOGGLE):
      return {
        ...state,
        isShowModal: !state.isShowModal,
      };
    default:
      return state;
  }
};
