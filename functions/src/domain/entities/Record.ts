export default class Record {
  constructor(
    public id: string,
    public name: string,
    public increment_id: number | null
  ) { }
}