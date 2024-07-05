// functions/src/interfaces/triggers/SetIncrementIdTrigger.ts
import * as functions from 'firebase-functions';
import SetIncrementIdUseCase from '../../app/useCases/setIncrementId/SetIncrementIdUseCase';

export class SetIncrementIdTrigger {
  constructor(private setIncrementIdUseCase: SetIncrementIdUseCase) { }

  async handle(snap: functions.firestore.QueryDocumentSnapshot, _context: functions.EventContext): Promise<void> {
    try {
      await this.setIncrementIdUseCase.execute(snap.id);
    } catch (error) {
      console.error('Error setting increment_id:', error);
    }
  }
}