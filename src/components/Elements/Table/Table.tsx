import { FiArchive, FiArrowDown, FiArrowUp } from 'react-icons/fi';
import * as React from 'react';
import { Icon, TableContainer, Table as ChakraTable, Thead, Tr, Th, Tbody, Td, IconButton, useBoolean } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type TableColumn<Entry> = {
    title: string
    field: keyof Entry
    direction?: 'asc' | 'desc'
    onRowClick?: (column: TableColumn<Entry>) => void
    Cell?({ entry }: { entry: Entry }): React.ReactElement
}

export type TableProps<Entry> = {
    data: Entry[]
    columns: TableColumn<Entry>[]
}

export const Table = <Entry extends { id?: number | string, orderId?: number }>({ data, columns }: TableProps<Entry>) => {
    const [direction, setDirection] = React.useState<string>('desc')
    const [sortDesc, setSortDesc] = useBoolean()

    if (!data?.length) {
        return (
            <div className="flex flex-col items-center justify-center text-gray-500 bg-white h-80">
                <Icon as={FiArchive} color={'green.500'} boxSize={5} />
                <h4>No Entries Found</h4>
            </div>
        );
    }

    // const handleSortColumn = (column: TableColumn<Entry>, direction: 'asc' | 'desc'): void => {

    // }

    const handleSortColumns = (title: string): void => {
        const foundColumn = columns.find(x => x.title === title)
        if (foundColumn?.direction) {
            setDirection(foundColumn.direction === 'desc' ? 'asc' : 'desc')
        } else {
            setDirection(direction === 'desc' ? 'asc' : 'desc')
        }
    }

    return (
        <TableContainer>
            <ChakraTable
                w={'full'}
                bg={'white'}
            >
                <Thead>
                    <Tr>
                        {columns.map((column, index) => (
                            <Th
                                key={column.title + index}
                                scope="col"
                                px={6}
                                py={3}
                                fontSize={'xs'}
                                textAlign={'left'}
                                textTransform={'uppercase'}
                                //letterSpacing={'wider'}
                                fontWeight={'medium'}
                            //className="text-gray-500 uppercase"
                            >
                                {column.title}
                                {/* <IconButton
                                    size={'md'}
                                    variant={'ghost'}
                                    aria-label='toggle darkmode'
                                    ml={2}
                                    icon={
                                        direction === 'desc' || !direction ?
                                            <FiArrowDown />
                                            : <FiArrowUp />}
                                    onClick={() => handleSortColumns(column.title)}
                                /> */}

                                <IconButton
                                    size={'md'}
                                    variant={'ghost'}
                                    aria-label='toggle darkmode'
                                    ml={1}
                                    onClick={setSortDesc.toggle}
                                    icon={
                                        <motion.div
                                            animate={{ rotate: sortDesc ? [120, 180] : 0 }}
                                        >
                                            <FiArrowDown />
                                        </motion.div>
                                    }
                                />

                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((entry, entryIndex) => (
                        <Tr
                            key={entry?.id || entry?.orderId || entryIndex}
                            className="odd:bg-white even:bg-gray-100"
                        //onClick={}
                        >
                            {columns.map(({ Cell, field, title }, columnIndex) => (
                                <Td
                                    key={title + columnIndex}
                                    className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {Cell ? <Cell entry={entry} /> : entry[field]}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>

            </ChakraTable>
        </TableContainer >
    )
}