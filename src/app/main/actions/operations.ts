import { Action } from '@ngrx/store';
import { Operation } from "../models/operation.model";

/*Because the Meta Reducer dispatches actions to their respective reducers, 
we define custom actions and create actions as new class instances when dispatching using the @ngrx/store's Action class. 
Expressing actions as classes also enables type checking in reducer functions.*/

export const ActionTypes = {
	ADD_OPERATION: 'Add an operation',
	REMOVE_OPERATION: 'Remove an operation',
	INCREMENT_OPERATION: 'Increment an operation',
	DECREMENT_OPERATION: 'Decrement an operation',
};

export class AddOperationAction implements Action {
	type = ActionTypes.ADD_OPERATION;

	constructor(public payload: Operation) { }
}

export class RemoveOperationAction implements Action {
	type = ActionTypes.REMOVE_OPERATION;

	constructor(public payload: Operation) { }

}

export class IncrementOperationAction implements Action {
	type = ActionTypes.INCREMENT_OPERATION;

	constructor(public payload: Operation) { }
}

export class DecrementOperationAction implements Action {
	type = ActionTypes.DECREMENT_OPERATION;

	constructor(public payload: Operation) { }
}

/*An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. 
For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. That means an object of this type will have all members of all three types.*/
export type Actions = AddOperationAction | RemoveOperationAction | IncrementOperationAction | DecrementOperationAction