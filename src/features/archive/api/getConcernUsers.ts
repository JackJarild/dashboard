// import { useQuery } from '@tanstack/react-query';
// import { axios } from '@/lib/axios';
// import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
// import { Customer } from '../types';

// export const getConcernUsers = (companyId: number)
//     : Promise<Customer[]> => {
//     return axios.get(`user/customer/concern/${companyId}`)
// }

// type QueryFnType = typeof getConcernUsers

// type UseArchivedReportsOptions = {
//     companyId: number
//     config?: QueryConfig<QueryFnType>
// }

// export const useConcernUsers = (
//     {
//         companyId,
//         config
//     }: UseArchivedReportsOptions) => {
//     return useQuery<ExtractFnReturnType<QueryFnType>>({
//         ...config,
//         queryKey: ['concernUsers', companyId],
//         queryFn: () => getConcernUsers(companyId),
//     });
// };