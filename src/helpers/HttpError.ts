interface Error {
  name: string;
  message: string;
  stack?: string;
  status?: number;
}

const HttpError = (status: number, message: string): Error => {
  const error: Error = new Error(message);
  error.status = status;
  return error;
};

export default HttpError;
