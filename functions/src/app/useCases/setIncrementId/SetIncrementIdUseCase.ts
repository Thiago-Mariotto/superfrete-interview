import IRecordRepository from "../../../domain/repositories/IRecordRepository";
import IUseCases from "../IUseCases";

export default class SetIncrementIdUseCase implements IUseCases<string, void> {
  constructor(
    private readonly _recordRepository: IRecordRepository
  ) { }

  public async execute(recordId: string): Promise<void> {
    const lastIncrementId = await this._recordRepository.getLastIncrementId();
    const findRecord = await this._recordRepository.findRecordById(recordId);
    if (!findRecord) throw new Error('Record not found');
    await this._recordRepository.updateIncrementId(recordId, lastIncrementId + 1);
  }
}