export interface Status {
  isRunning: boolean;
  wasAFail: boolean;
  wasASuccess: boolean;
  error: object;
}

export default interface Draft {
  [key: string]: object;
  status: Status;
}
