import { expect } from "chai";
import Name from "./Name";

describe('# Unit - Name Value Object', function () {
  it('should create a name value object', function () {
    const name = Name.fromString('Computador');

    expect(name.value).to.equal('Computador');
  });

  it('should not create a name value object with less than 2 characters', function () {
    expect(() => Name.fromString('A')).to.throw('Invalid name');
  });

  it('should not create a name value object with numbers', function () {
    expect(() => Name.fromString('Computador 123')).to.throw('Invalid name');
  });

  it('should not create a name value object with special characters', function () {
    expect(() => Name.fromString('Computador!')).to.throw('Invalid name');
  });

  it('should not create a name value object with empty name', function () {
    expect(() => Name.fromString('')).to.throw('Name is required');
  });

});