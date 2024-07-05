import CreateRecordUseCase from "../app/useCases/createRecord/CreateRecordUseCase";
import SetIncrementIdUseCase from "../app/useCases/setIncrementId/SetIncrementIdUseCase";
import FirebaseRecordRepository from "../infra/firebase/FirebaseRecordRepository";

const recordRepository = new FirebaseRecordRepository();

export const createRecordUseCase = new CreateRecordUseCase(recordRepository);
export const setIncrementIdUseCase = new SetIncrementIdUseCase(recordRepository);

export default {
  createRecordUseCase,
  setIncrementIdUseCase,
};

