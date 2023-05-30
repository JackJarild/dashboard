import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    IconButton,
    HStack,
    Flex,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

interface ReportPackageCardProps {
    reportPackage: string
    description: string
    daysToDeliver: number
}

export const ReportPackageCard = (props: ReportPackageCardProps) => {
    const { reportPackage, description, daysToDeliver } = props

    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <HStack justify={'end'} w={'full'}>
                    <IconButton
                        size={'lg'}
                        m={2}
                        variant={'ghost'}
                        colorScheme={'tfopink'}
                        aria-label='view report package information'
                        icon={<FiInfo />}
                    //onClick={toggleColorMode}
                    />
                </HStack>
                <Stack
                    textAlign={'center'}
                    px={6}
                    pb={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        px={3}
                        color={'green.500'}
                        rounded={'full'}>
                        {reportPackage}
                    </Text>
                    <Text color={'gray.500'}>Leverans inom</Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            {daysToDeliver}
                        </Text>
                        <Text fontSize={'2xl'}>dagar</Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <Button
                        //mt={10}
                        w={'full'}
                        bg={'green.400'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        // _hover={{
                        //     bg: 'green.500',
                        // }}
                        _hover={{
                            bg: 'green.500',
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                          }}
                        _focus={{
                            bg: 'green.500',
                        }}>
                        Beställ rapport
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}