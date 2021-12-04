import { Types } from '../constants/auth';

export const ActionUser = {
  login: (username) => ({ type: Types.LOGIN, payload: { username } })
}