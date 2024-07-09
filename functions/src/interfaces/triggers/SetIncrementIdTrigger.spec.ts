import * as functions from 'firebase-functions';
import sinon from 'sinon';
import SetIncrementIdUseCase from "../../app/useCases/setIncrementId/SetIncrementIdUseCase";
import IRecordRepository from "../../domain/repositories/IRecordRepository";
import MemoryRecordRepository from "../../infra/RecordRepository/MemoryRecordRepository";
import { SetIncrementIdTrigger } from "./SetIncrementIdTrigger";

describe.only('# Unit - SetIncrementIdTrigger', function () {
	let setIncrementIdUseCase: SetIncrementIdUseCase;
	let setIncrementIdTrigger: SetIncrementIdTrigger;
	let orderRepository: IRecordRepository;

	beforeEach(function () {
		sinon.restore();
		orderRepository = new MemoryRecordRepository();
		setIncrementIdUseCase = new SetIncrementIdUseCase(orderRepository);
		setIncrementIdTrigger = new SetIncrementIdTrigger(setIncrementIdUseCase);
	});

	it('should set increment id', async function () {
		const snap = {
			id: '1',
		};
		const context = {};
		await setIncrementIdTrigger.handle(snap as unknown as functions.firestore.QueryDocumentSnapshot, context as unknown as functions.EventContext);
	});

	it('should log error if set increment id fails', async function () {
		const snap = {
			id: '1',
		};
		const context = {};
		const error = new Error('Error setting increment_id');
		sinon.stub(setIncrementIdUseCase, 'execute').throws(error);

		const consoleErrorStub = sinon.stub(console, 'error');
		await setIncrementIdTrigger.handle(snap as unknown as functions.firestore.QueryDocumentSnapshot, context as unknown as functions.EventContext);

		sinon.assert.calledWith(consoleErrorStub, 'Error setting increment_id:', error);
	});
});