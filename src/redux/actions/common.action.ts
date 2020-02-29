import { MODAL_ACTION, REQUEST } from '../constant';

export function toggleModal() {
  return {
    type: REQUEST(MODAL_ACTION.TOGGLE),
  };
}
