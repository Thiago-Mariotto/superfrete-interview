import * as admin from 'firebase-admin';
import Record from "../../domain/entities/Record";
import IRecordRepository from '../../domain/repositories/IRecordRepository';

admin.initializeApp();

export default class FirebaseRecordRepository implements IRecordRepository {
  private db = admin.firestore();

  async save(record: Omit<Record, 'id'>): Promise<Record> {
    const newRecord = await this.db.collection('records').add(record);
    return Record.create(newRecord.id, record.name);
  }

  async findRecordById(id: string): Promise<Record | null> {
    const record = await this.db.collection('records').doc(id).get();
    const data = record.data();
    if (!record.exists || !data) return null;

    return Record.create(record.id, data.name);
  }

  async getLastIncrementId(): Promise<number> {
    const records = await this.db.collection('records')
      .orderBy('increment_id', 'desc')
      .limit(1)
      .get();

    return records.empty ? 0 : records.docs[0].data().increment_id;
  }

  async updateIncrementId(id: string, incrementId: number): Promise<void> {
    await this.db.collection('records').doc(id).update({ increment_id: incrementId });
  }
}