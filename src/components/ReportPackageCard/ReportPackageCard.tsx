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
    useDisclosure,
    Badge,
    Tag,
    UnorderedList,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { Modal } from '../Elements/Modal';

interface ReportPackageCardProps {
    customName: string
    description: string
    daysToDeliver: number
    checkpoints: string[]
    onClick: () => void
}

export const ReportPackageCard = (
    {
        customName,
        description,
        daysToDeliver,
        checkpoints,
        onClick
    }: ReportPackageCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'md'}
                rounded={'md'}
                overflow={'hidden'}
                display={'grid'}
            >
                <HStack justify={'end'} w={'full'}>
                    <IconButton
                        size={'lg'}
                        m={2}
                        variant={'ghost'}
                        colorScheme={'tfopink'}
                        aria-label='view report package information'
                        icon={<FiInfo />}
                        onClick={onOpen}
                    />
                </HStack>
                <Stack
                    textAlign={'center'}
                    px={6}
                    pb={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'md'}
                        fontWeight={500}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        px={3}
                        color={'green.500'}
                        rounded={'full'}>
                        {customName}
                    </Text>

                    <Text color={'gray.500'}>Leverans inom</Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            {daysToDeliver}
                        </Text>
                        <Text fontSize={'2xl'}>dagar</Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} mt={'auto'}>
                    <Box>
                        <Text textAlign={'center'} color={'gray.500'}>{description}</Text>
                    </Box>

                    <Button
                        mt={10}
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
                        }}
                        onClick={onClick}
                    >
                        Välj rapport paket
                    </Button>
                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Modal.Header>
                    Kontrollpunkter
                    <Tag colorScheme='green'>Leverans inom {daysToDeliver} dagar</Tag>
                </Modal.Header>
                <Modal.Body>
                    <Center>
                        <UnorderedList>
                            {checkpoints.map((checkpoint, index) => <ListItem key={index}>{checkpoint}</ListItem>)}
                        </UnorderedList>
                    </Center>
                </Modal.Body>
                <Modal.Footer>
                    <Text size={'sm'}>
                        Notera att informationen om rättsliga ärenden inhämtas från Sveriges Domstolar, Åklagarmyndigheten samt Ekobrottsmyndigheten.
                    </Text>
                </Modal.Footer>
            </Modal>
        </>
    )
}