import { FiArchive, FiArrowDown, FiSearch } from 'react-icons/fi';
import * as React from 'react';
import { Icon, TableContainer, Table as ChakraTable, Thead, Tr, Th, Tbody, Td, IconButton, useBoolean, Stack, Box, HStack, Text, InputLeftElement, InputGroup, Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { InputGroupField } from '@/components/Form';

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
    variant?: 'striped' | 'simple'
}

export const Table = <Entry extends { id?: number | string, orderId?: number }>({ data, columns, variant = 'simple' }: TableProps<Entry>) => {
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

    return (
        <Box boxShadow={'sm'} rounded={'lg'} bg={'white'} overflow={'hidden'}>
            <Stack gap={5}>
                <TableHeader />
                <TableContainer>
                    <ChakraTable
                        w={'full'}
                        bg={'white'}
                        variant={variant}
                    >
                        <Thead>
                            <Tr borderColor={'gray.200'}>
                                {columns.map((column, index) => (
                                    <Th
                                        key={column.title + index}
                                        scope="col"
                                        px={6}
                                        py={3}
                                        fontSize={'xs'}
                                        textAlign={'left'}
                                        //textTransform={'uppercase'}
                                        fontWeight={'medium'}
                                        borderColor={'gray.100'}
                                        bg={'gray.50'}
                                    >
                                        {column.title}
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
                <TableFooter />
            </Stack>
        </Box>
    )
}


const TableHeader = () => {
    return (
        <Box px={6} pt={5} bg={'white'}>
            <HStack justify={'space-between'} gap={2}>
                <Text size={'lg'} fontWeight={'medium'}>Archive</Text>
                <InputGroup
                    w={'100%'}
                    display={'flex'}
                    pos={'relative'}
                    isolation={'isolate'}
                    maxW={'xs'}
                >
                    <InputLeftElement h={'full'}>
                        <Icon as={FiSearch} />
                    </InputLeftElement>
                    <Input type={'text'} placeholder='Search' />
                </InputGroup>
            </HStack>
        </Box>
    )
}

const TableFooter = () => {
    return (
        <Box px={6} pb={6} m={0} bg={'white'}>
            <HStack justify={'space-between'} align={'center'} gap={3}>
                <Text size={'sm'}>Showing 1 to 5 of 42 results</Text>

            </HStack>
        </Box>
    )
}