export type ErrorResponse = {
    type: string;
    title: string;
    status: number;
    detail: string;
    errors: Array<Error>;
  }
  
  type Error = {
    code: string;
    message: string;
    errorType: string;
  }