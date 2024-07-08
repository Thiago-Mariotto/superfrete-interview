import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { API_BASE_URL } from './config';
const expect = chai.expect;
chai.use(chaiHttp);

describe('# Integration - POST /createRecord', () => {
  afterEach(function () {
    sinon.restore();
  });

  it.only('should create a new record', async () => {
    const record = {
      name: 'Test Record'
    };

    const response = await chai.request(`${API_BASE_URL}`)
      .post('/createRecord')
      .send(record);

    expect(response.status).to.equal(201);
  });

  it('should return 400 if name is missing', async () => {
    const record = {};

    const response = await chai.request(`${API_BASE_URL}`)
      .post('/createRecord')
      .send(record);

    expect(response.status).to.equal(400);
    expect(response.body).to.have.property('error');
    expect(response.body.error).to.equal('O campo "nome" é obrigatório');
  });

  it('should return 400 if name is empty', async () => {
    const record = {
      name: ''
    };

    const response = await chai.request(`${API_BASE_URL}`)
      .post('/createRecord')
      .send(record);

    expect(response.status).to.equal(400);
    expect(response.body).to.have.property('error');
    expect(response.body.error).to.equal('O campo "nome" deve ter no mínimo 2 caracteres');
  });

  it('should return 400 if name is too long', async () => {
    const record = {
      name: 'a'.repeat(51)
    };

    const response = await chai.request(`${API_BASE_URL}`)
      .post('/createRecord')
      .send(record);

    expect(response.status).to.equal(400);
    expect(response.body).to.have.property('error');
    expect(response.body.error).to.equal('O campo "nome" deve ter no máximo 50 caracteres');
  });

  it('should return 400 if name is less than 2 characters', async () => {
    const record = {
      name: 'a'
    };

    const response = await chai.request(`${API_BASE_URL}`)
      .post('/createRecord')
      .send(record);

    expect(response.status).to.equal(400);
    expect(response.body).to.have.property('error');
    expect(response.body.error).to.equal('O campo "nome" deve ter no mínimo 2 caracteres');
  });

  it('should return 400 if name is not a string', async () => {
    const record = {
      name: 123
    };

    const response = await chai.request(`${API_BASE_URL}`)
      .post('/createRecord')
      .send(record);

    expect(response.status).to.equal(400);
    expect(response.body).to.have.property('error');
    expect(response.body.error).to.equal('O campo "nome" deve ser uma string');
  });
});