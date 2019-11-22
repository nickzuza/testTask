import { ApiReadModel, ApiUpdateModel } from "./models";

export function fakeMutation(input: ApiUpdateModel): Promise<ApiReadModel> {
  return Promise.resolve({
    ...input,
    lastUpdatedDate: new Date(),
  });
}