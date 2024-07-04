export interface IApiResponse<T = any> {
  isSuccess?: boolean;
  message?: string;
  data?: T | null;
}
