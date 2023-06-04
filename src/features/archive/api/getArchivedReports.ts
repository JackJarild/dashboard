import { useQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { ArchivedReport } from '../types';
import { PagedList } from '@/types';

export const getArchivedReports = (
    startDate: Date,
    endDate: Date,
    searchText: string,
    sortBy: string,
    pageIndex: number,
    rowsPerPage: number)
    : Promise<PagedList<ArchivedReport>> => {
    return axios.post(`ReportArchive/search`, {
        params: {
            startDate,
            endDate,
            searchText,
            sortBy,
            pageIndex,
            rowsPerPage
        }
    })
}

type QueryFnType = typeof getArchivedReports

type UseArchivedReportsOptions = {
    startDate: Date
    endDate: Date
    searchText: string
    sortBy: string
    pageIndex: number
    rowsPerPage: number
    config?: QueryConfig<QueryFnType>
}

export const useArchivedReports = (
    {
        startDate,
        endDate,
        searchText,
        sortBy,
        pageIndex,
        rowsPerPage,
        config
    }: UseArchivedReportsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['archivedReports', startDate, endDate, searchText, sortBy, pageIndex],
        queryFn: () => getArchivedReports(startDate, endDate, searchText, sortBy, pageIndex, rowsPerPage),
    });
};