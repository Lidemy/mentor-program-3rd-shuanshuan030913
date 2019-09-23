import { CHANGE_NAV } from './activerTypes';

export function changeFocus(nav) {
  return {
    type: CHANGE_NAV,
    value: nav,
  };
}
