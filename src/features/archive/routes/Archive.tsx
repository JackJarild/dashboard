import { Table } from "@/components/Elements/Table"
import { useArchivedReports } from "../api/getArchivedReports"
import { PagedList } from "@/types"
import { ArchivedReport } from "../types"


export const Archive = () => {
    const { data, status } = useArchivedReports(
        {
            startDate: new Date('2021-01-01'),
            endDate: new Date('2023-12-30'),
            pageIndex: 0,
            rowsPerPage: 50,
            searchText: '',
            sortBy: ''
        })

    if (!data) {
        return (
            <>
                <p>Fel</p>
            </>
        )
    }

    return (
        <>
            <Table<ArchivedReport>
                data={data.items}
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