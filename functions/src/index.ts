import * as functions from 'firebase-functions';

import CreateRecordController from './interfaces/controllers/CreateRecordController';

import {
  createRecordUseCase,
} from './shared/container';

const createRecordController = new CreateRecordController(createRecordUseCase);

export const createRecord = functions.https.onRequest((req, res) => {
  return createRecordController.handle(req, res);
});

