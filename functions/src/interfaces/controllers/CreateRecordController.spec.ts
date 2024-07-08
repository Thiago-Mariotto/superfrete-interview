import chai, { expect } from 'chai';
import { Response } from "firebase-functions/v1";
import { Request } from 'firebase-functions/v1/https';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CreateRecordUseCase from '../../app/useCases/createRecord/CreateRecordUseCase';
import IRecordRepository from '../../domain/repositories/IRecordRepository';
import MemoryRecordRepository from '../../infra/RecordRepository/MemoryRecordRepository';
import CreateRecordController from './CreateRecordController';
chai.use(sinonChai);

describe('# Unit - CreateRecordController', function () {
  let recordRepository: IRecordRepository;
  let createRecordController: CreateRecordController;
  let createRecordUseCase: CreateRecordUseCase;

  beforeEach(function () {
    sinon.restore();
    recordRepository = new MemoryRecordRepository();
    createRecordUseCase = new CreateRecordUseCase(recordRepository);
    createRecordController = new CreateRecordController(createRecordUseCase);
  });

  it('should create a record', async function () {
    const req = {
      body: {
        name: 'Record'
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    const expectedResponse = {
      _id: '1',
      _name: { name: 'Record' },
      _increment_id: null
    };

    await createRecordController.handle(req as Request, res as unknown as Response);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json.calledWith(sinon.match(expectedResponse))).to.be.true;

  });

  it('should return 400 if body name is a number', async function () {
    const req = {
      body: {
        name: 1
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('should return 400 if body is empty', async function () {
    const req = {
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('should return 400 if body is null', async function () {
    const req = {
      body: null,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('should return 400 if body is undefined', async function () {
    const req = {
      body: undefined,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('should return 400 if body name is empty', async function () {
    const req = {
      body: {
        name: ''
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('should return 400 if body name is null', async function () {
    const req = {
      body: {
        name: null
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('should return 400 if body name is undefined', async function () {
    const req = {
      body: {
        name: undefined
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('should return 400 if body name is less than 2 characters', async function () {
    const req = {
      body: {
        name: 'a'
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('should return 500 if an internal server error occurs', async function () {
    const req = {
      body: {
        name: 'Record'
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };

    sinon.stub(createRecordUseCase, 'execute').throws(new Error('Internal error'));

    await createRecordController.handle(req as Request, res as unknown as Response);

    expect(res.status.calledWith(500)).to.be.true;
    expect(res.json.calledWith({ error: 'Internal server error' })).to.be.true;
  });
});