import { expect } from "chai";
import { describe } from "mocha";
import MemoryRecordRepository from "../../../infra/RecordRepository/MemoryRecordRepository";
import SetIncrementIdUseCase from "./SetIncrementIdUseCase";

describe('# Unit - SetIncrementIdUseCase', function () {
  let recordRepository: MemoryRecordRepository;
  let setIncrementIdUseCase: SetIncrementIdUseCase;

  beforeEach(function () {
    recordRepository = new MemoryRecordRepository();
    setIncrementIdUseCase = new SetIncrementIdUseCase(recordRepository);
  });

  it('should set increment id', async function () {
    recordRepository.save({ name: 'Record' });
    const recordId = '1';

    await setIncrementIdUseCase.execute(recordId);
  });

  it('should throw an error when record not found', async function () {
    const recordId = '1';

    try {
      await setIncrementIdUseCase.execute(recordId);
    } catch (err: any) {
      expect(err.message).to.be.equal('Record not found');
    }
  });
});