export type PagedList<T> = {
    currentPage: number
    totalRowCount: number
    rowsPerPage: number
    sortBy: string
    items: T[]
}