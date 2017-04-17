import { Action } from '@ngrx/store';
import { User } from '../models/user';


export const ActionTypes = {
	LOG_USER: 'Log user to app'
};

export class LogUserAction implements Action {
	type = ActionTypes.LOG_USER;

	constructor(public payload: User) { }
}

export type Actions = LogUserAction