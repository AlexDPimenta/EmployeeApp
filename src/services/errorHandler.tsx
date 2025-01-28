import { ErrorResponse } from '@/models/ErrorResponse';
import { AxiosError } from 'axios';

export async function handleError(error: AxiosError): Promise<ErrorResponse> {
  console.error('Error:', error);
  const err = error as AxiosError;
  if (err.response) {
    return err.response.data as ErrorResponse;
  }
  throw error;
}