import Record from "../../../domain/entities/Record";
import IRecordRepository from "../../../domain/repositories/IRecordRepository";
import IUseCases from "../IUseCases";

type TCreationRecordDTO = {
  name: string
}

export default class CreateRecordUseCase implements IUseCases<TCreationRecordDTO, Record> {
  constructor(
    private readonly _recordRepository: IRecordRepository
  ) { }

  async execute(dataDTO: TCreationRecordDTO): Promise<Record> {
    const { name } = dataDTO;
    const record = await this._recordRepository.save({ name });
    return record;
  }
}