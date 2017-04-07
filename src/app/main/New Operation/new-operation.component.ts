import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Operation } from "../models/operation.model";
@Component({
	selector: 'new-operation',
	templateUrl: 'new-operation.template.html',
	//ChangeDetectionStartegy.OnPush 
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewOperation {
	public operation: Operation;

	constructor() {
		this.operation = new Operation();
	}

	@Output() addOperation = new EventEmitter();

	dispatchAddEvent(operation) {
		this.addOperation.emit(operation);
		this.operation = new Operation();
	}
}