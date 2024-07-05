import { Response } from "firebase-functions/v1";
import { Request } from "firebase-functions/v1/https";
import CreateRecordUseCase from '../../app/useCases/createRecord/CreateRecordUseCase';
import { ZodSchemaValidator } from "../../shared/utils/ZodValidateSchema";
import IFirebaseController from './IFirebaseController';
import { CreateRecordSchema } from "./schemas/RecordSchemas";

export default class CreateRecordController implements IFirebaseController {
  constructor(
    private _createRecordUseCase: CreateRecordUseCase
  ) { }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const bodyValidation = ZodSchemaValidator.execute(CreateRecordSchema, req.body);
      if (!bodyValidation.success) {
        res.status(400).json({ error: bodyValidation.error });
        return;
      }

      const record = await this._createRecordUseCase.execute(req.body);
      res.status(201).json(record);
    } catch (err) {
      console.error('Error setting increment_id:', err);
    }
  }
}