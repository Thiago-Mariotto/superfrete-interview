import Record from "../../domain/entities/Record";
import IRecordRepository from "../../domain/repositories/IRecordRepository";

export default class MemoryRecordRepository implements IRecordRepository {
  private records: Record[] = [];

  constructor() {
    this.records = [];
  }

  async save(record: Omit<Record, "id" | "increment_id">): Promise<Record> {
    const nextId = (this.records.length + 1).toString();
    const newRecord = Record.create(nextId, record.name);
    this.records.push(newRecord);
    return newRecord;
  }

  async findRecordById(id: string): Promise<Record | null> {
    const record = this.records.find((record) => record.id === id);
    if (!record) return null;
    return record;
  }

  async getLastIncrementId(): Promise<number> {
    const lastRecord = this.records[this.records.length - 1];
    if (!lastRecord) return 0;
    return lastRecord.increment_id || 0;
  }

  async updateIncrementId(id: string, incrementId: number): Promise<void> {
    const records = this.records.map((record) => {
      if (record.id === id) {
        record.increment_id = incrementId;
      }
      return record;
    }
    );
    this.records = records;
  }
}