export interface MetaData {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
}

export class PaginatedResponse<T> {
    items: Array<T>;
    metaData: MetaData;

    constructor(items: Array<T>, metaData: MetaData) {
        this.items = items;
        this.metaData = metaData;
    }
}
