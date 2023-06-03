import { useQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { ReportPackage } from '../types';

export const getReportPackages = (companyId: number): Promise<ReportPackage[]> => {
    return axios.get(`order/service-packages/active/${companyId}`)
}

type QueryFnType = typeof getReportPackages

type UseReportPackagesOptions = {
    companyId: number
    config?: QueryConfig<QueryFnType>
}

export const useReportPackages = ({ companyId, config }: UseReportPackagesOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['reportPackages', companyId],
        queryFn: () => getReportPackages(companyId),
    });
};