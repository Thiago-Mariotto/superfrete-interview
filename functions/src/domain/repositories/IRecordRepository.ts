import Record from "../entities/Record";

interface IRecordRepository {
  save(record: Omit<Record, 'id' | 'increment_id'>): Promise<Record>;
  findRecordById(id: string): Promise<Record | null>;
  getLastIncrementId(): Promise<number>;
  updateIncrementId(id: string, incrementId: number): Promise<void>;
}

export default IRecordRepository;