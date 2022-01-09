import { ApiOkResponse } from "apisauce";

interface IResponseData {
  results: object[];
  total_pages: string;
}

export type TResponse = ApiOkResponse<IResponseData>;

export interface IParams {
  page: number;
}
