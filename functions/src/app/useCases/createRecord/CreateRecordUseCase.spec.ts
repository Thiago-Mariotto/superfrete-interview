import { expect } from "chai";
import { describe } from "mocha";
import MemoryRecordRepository from "../../../infra/RecordRepository/MemoryRecordRepository";
import CreateRecordUseCase from "./CreateRecordUseCase";

describe('# Unit - Create Record Use Case', function () {
  let recordRepository: MemoryRecordRepository;
  let createRecordUseCase: CreateRecordUseCase;

  beforeEach(function () {
    recordRepository = new MemoryRecordRepository();
    createRecordUseCase = new CreateRecordUseCase(recordRepository);
  });

  it('should be create a new record', async function () {
    const record = {
      name: 'Record',
    };

    const newRecord = await createRecordUseCase.execute(record);

    expect(newRecord).to.have.property('id');
    expect(newRecord).to.have.property('name');
    expect(newRecord).to.have.property('increment_id');
    expect(newRecord.name).to.be.equal(record.name);
  });

  it('should not create a record with name less 3 characters', async function () {
    const record = {
      name: 'Re',
    };

    try {
      await createRecordUseCase.execute(record);
    } catch (error: any) {
      expect(error.message).to.be.equal('Invalid name');
    }
  });

  it('should not create a record with name with numbers', async function () {
    const record = {
      name: 'Record 123',
    };

    try {
      await createRecordUseCase.execute(record);
    } catch (error: any) {
      expect(error.message).to.be.equal('Invalid name');
    }
  });

  it('should not create a record with name with special characters', async function () {
    const record = {
      name: 'Record!',
    };

    try {
      await createRecordUseCase.execute(record);
    } catch (error: any) {
      expect(error.message).to.be.equal('Invalid name');
    }
  });
});