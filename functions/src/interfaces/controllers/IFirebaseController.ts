import * as functions from 'firebase-functions';

interface IFirebaseController {
  handle(req: functions.https.Request, res: functions.Response): Promise<void>;
}

export default IFirebaseController;