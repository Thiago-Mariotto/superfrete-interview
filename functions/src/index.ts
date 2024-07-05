import * as functions from 'firebase-functions';

import CreateRecordController from './interfaces/controllers/CreateRecordController';
import { SetIncrementIdTrigger } from './interfaces/triggers/SetIncrementIdTrigger';

import {
  createRecordUseCase,
  setIncrementIdUseCase
} from './shared/container';

const createRecordController = new CreateRecordController(createRecordUseCase);
const setIncrementIdTrigger = new SetIncrementIdTrigger(setIncrementIdUseCase);

export const createRecord = functions.https.onRequest((req, res) => {
  return createRecordController.handle(req, res);
});

export const setIncrementId = functions.firestore.document('records/{docId}').onCreate((snap, context) => {
  return setIncrementIdTrigger.handle(snap, context);
});