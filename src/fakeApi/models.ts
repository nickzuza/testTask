export enum StatusEnum {
    OnTrack = 0,
    Failing = 1,
    Completed = 2,
}

export interface ApiReadModel {
    comment?: string;
    id: number;
    lastUpdatedDate: Date;
    name?: string;
    status: StatusEnum;
}

export interface ApiUpdateModel {
    comment?: string;
    id: number;
    name?: string;
    status: StatusEnum;
}
