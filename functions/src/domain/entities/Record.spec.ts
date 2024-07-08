import { expect } from "chai";
import Record from "./Record";

describe('# Unit - Record Entity', function () {
  it('should create a record entity', function () {
    const record = Record.create('123456', 'Computador');

    expect(record.id).to.equal('123456');
    expect(record.name).to.equal('Computador');
    expect(record.increment_id).to.equal(null);
  });

  it('should not create a record entity with name less 2 characters', function () {
    expect(() => Record.create('123456', 'Re')).to.throw('Invalid name');
  });

  it('should not create a record with invalid name with numbers', function () {
    expect(() => Record.create('123456', 'Computador 123')).to.throw('Invalid name');
  });

  it('should not create a record with invalid name with special characters', function () {
    expect(() => Record.create('123456', 'Computador!')).to.throw('Invalid name');
  });

  it('should update a record entity', function () {
    const record = Record.create('123456', 'Computador');
    record.name = 'Notebook';
    record.increment_id = 1;
    expect(record.name).to.equal('Notebook');
    expect(record.increment_id).to.equal(1);
  });
});