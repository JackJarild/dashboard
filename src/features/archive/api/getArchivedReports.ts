import { useQueries, useQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { ArchivedReport, Customer } from '../types';
import { PagedList } from '@/types';

export const getArchivedReports = (
    startDate: Date,
    endDate: Date,
    searchText: string,
    sortBy: string,
    pageIndex: number,
    rowsPerPage: number)
    : Promise<PagedList<ArchivedReport>> => {
    return axios.post(`ReportArchive/search`, null, {
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

export const getConcernUsers = (companyId: number)
    : Promise<Customer[]> => {
    return axios.get(`user/customer/concern/${companyId}`)
}

type ArchivedReportsQueryFnType = typeof getArchivedReports

type UseArchivedReportsOptions = {
    startDate: Date
    endDate: Date
    searchText: string
    sortBy: string
    pageIndex: number
    rowsPerPage: number
    config?: QueryConfig<ArchivedReportsQueryFnType>
}

type ConcernUsersQueryFnType = typeof getConcernUsers

type UseConcernUsersOptions = {
    companyId: number
    config?: QueryConfig<ConcernUsersQueryFnType>
}

export const useConcernUsers = (
    {
        companyId,
        config
    }: UseConcernUsersOptions) => {
    return useQuery<ExtractFnReturnType<ConcernUsersQueryFnType>>({
        ...config,
        queryKey: ['concernUsers', companyId],
        queryFn: () => getConcernUsers(companyId),
    });
};

// export const useArchivedReports = (
//     {
//         startDate,
//         endDate,
//         searchText,
//         sortBy,
//         pageIndex,
//         rowsPerPage,
//         config
//     }: UseArchivedReportsOptions) => {
//     return useQuery<ExtractFnReturnType<ArchivedReportsQueryFnType>>({
//         ...config,
//         queryKey: ['archivedReports', startDate, endDate, searchText, sortBy, pageIndex],
//         queryFn: () => getArchivedReports(startDate, endDate, searchText, sortBy, pageIndex, rowsPerPage),
//     });
// };

type Test = {
    useConcernUsersOptions: UseConcernUsersOptions
    useArchivedReportsOptions: UseArchivedReportsOptions
}

export const useArchivedReports = (props: Test) => {
    return useQueries<[
        ExtractFnReturnType<ArchivedReportsQueryFnType>,
        ExtractFnReturnType<ConcernUsersQueryFnType>]>
        ({
            queries: [
                {
                    //...props.useArchivedReportsOptions.config,
                    queryKey: ['archivedReports', props.useArchivedReportsOptions.startDate, props.useArchivedReportsOptions.endDate, props.useArchivedReportsOptions.searchText, props.useArchivedReportsOptions.sortBy, props.useArchivedReportsOptions.pageIndex],
                    queryFn: () => getArchivedReports(props.useArchivedReportsOptions.startDate, props.useArchivedReportsOptions.endDate, props.useArchivedReportsOptions.searchText, props.useArchivedReportsOptions.sortBy, props.useArchivedReportsOptions.pageIndex, props.useArchivedReportsOptions.rowsPerPage),
                },
                {
                    //...props.useConcernUsersOptions.config,
                    queryKey: ['concernUsers', props.useConcernUsersOptions.companyId],
                    queryFn: () => getConcernUsers(props.useConcernUsersOptions.companyId),
                }
            ]
        }
        );
};