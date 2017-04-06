import {
  FETCH_USERS
} from './types';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      {name: Jane},
      {name: Sherwin},
      {name: Jessica},
      {name: Arriane}
    ]
  }
}