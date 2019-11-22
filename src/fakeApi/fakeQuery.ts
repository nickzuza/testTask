import { ApiReadModel, StatusEnum } from "./models";

export function fakeQuery(): Promise<ApiReadModel> {

  return Promise.resolve({
    id: 1,
    lastUpdatedDate: new Date(2019, 3, 2),
    status: StatusEnum.Completed,
    name: 'Big important task'
  });
}