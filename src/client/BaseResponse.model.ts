export interface BaseResponse<T> {
  sql: string;
  data: T;
}
