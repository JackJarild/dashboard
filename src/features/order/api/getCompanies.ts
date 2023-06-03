import { useQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { Company } from '../types';

export const getCompanies = (companyId: number): Promise<Company[]> => {
    return axios.get(`company/flat/${companyId}?subsidiaries=true`)
}

type QueryFnType = typeof getCompanies

type UseCompaniesOptions = {
    companyId: number
    config?: QueryConfig<QueryFnType>
}

export const useCompanies = ({ companyId, config }: UseCompaniesOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['companies', companyId],
        queryFn: () => getCompanies(companyId),
    });
};