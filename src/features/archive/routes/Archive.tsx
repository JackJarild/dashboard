import { Table } from "@/components/Elements"
import { useArchivedReports } from "../api/getArchivedReports"
import { useConcernUsers } from "../api/getConcernUsers"
import { PagedList } from "@/types"
import { ArchivedReport } from "../types"
import { useQueries } from "@tanstack/react-query"


export const Archive = () => {
    // const { data, status } = useArchivedReports(
    //     {
    //         startDate: new Date('2021-01-01'),
    //         endDate: new Date('2023-12-30'),
    //         pageIndex: 1,
    //         rowsPerPage: 10,
    //         searchText: '',
    //         sortBy: '',
    //         // config: {
    //         //     staleTime: 10 * (60 * 1000) // 10 minutes
    //         // }
    //     })

    // if (status === 'loading') {
    //     return (
    //         <>
    //         </>
    //     )
    // }

    // if (!data) {
    //     return (
    //         <>
    //             <p>Fel</p>
    //         </>
    //     )
    // }
    const results = useArchivedReports(
        {
            useArchivedReportsOptions: {
                startDate: new Date('2021-01-01'),
                endDate: new Date('2023-12-30'),
                pageIndex: 1,
                rowsPerPage: 10,
                searchText: '',
                sortBy: ''
            },
            useConcernUsersOptions: {
                companyId: 2381
            }
        })

        const isLoading = results.some((query) => query.isLoading);

        if(isLoading) return null


        console.log(results[0].data, results[1].data)

    return (
        <>
            <Table<any>
                data={results[0].data.items}
                variant='striped'
                columns={[
                    {
                        title: 'Company',
                        field: 'companyName',
                    },
                    {
                        title: 'ReportPackage',
                        field: 'reportPackageName',
                    },
                    {
                        title: 'Creator',
                        field: 'creatorId',
                    },
                    {
                        title: 'ControlPerson',
                        field: 'controlPerson',
                    },
                    {
                        title: 'Created',
                        field: 'created',
                        Cell({ entry: { created } }) {
                            return <span>{created?.toString()}</span>
                        }
                    },
                    {
                        title: 'Delivered',
                        field: 'delivered',
                        Cell({ entry: { delivered } }) {
                            return <span>{delivered?.toString()}</span>
                        }
                    },
                    // {
                    //     title: '',
                    //     field: 'orderId',
                    //     Cell({ entry: { orderId } }) {
                    //         return <div>Id</div>
                    //     }
                    // }
                ]}
            />
        </>
    )
}