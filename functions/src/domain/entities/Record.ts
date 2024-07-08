import Name from "./vauesObject/Name";

export default class Record {
  private readonly _id: string;
  private _name: Name;
  private _increment_id: number | null;

  private constructor(id: string, name: string) {
    this._id = id;
    this._name = Name.fromString(name);
    this._increment_id = null;
  }

  public static create(id: string, name: string): Record {
    this.validate(name);
    return new Record(id, name);
  }

  private static validate(name: string): void {
    if (!this.nameIsValid(name)) {
      throw new Error('Invalid name');
    }
  }

  private static nameIsValid(name: string): boolean {
    return name.length > 2;
  }

  get id(): string {
    return this._id;
  }

  get increment_id(): number | null {
    return this._increment_id;
  }

  set increment_id(incrementId: number | null) {
    this._increment_id = incrementId;
  }

  get name(): string {
    return this._name.value;
  }

  set name(name: string) {
    this._name = Name.fromString(name);
  }
}