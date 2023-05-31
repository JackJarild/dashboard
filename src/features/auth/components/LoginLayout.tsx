import { Stack, Flex, VStack, Heading, Text, Icon } from '@chakra-ui/react';
import * as React from 'react';
import loginBackground5 from '../assets/loginBackground5.svg'
import { ImSearch } from 'react-icons/im';

type LayoutProps = {
    children: React.ReactNode
}

export const LoginLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1}
                    backgroundImage={
                        `url(${loginBackground5})`
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <VStack
                        w={'full'}
                        bgGradient={'linear(to-r, blackAlpha.500, blackAlpha.300)'}
                    >
                        <Stack maxW={'2xl'} align={'flex-start'}
                            textAlign={'center'}
                            spacing={{ base: 3, md: 5 }}
                            py={{ base: 20, md: 28 }}>
                            <Flex h="20" alignItems="center" mx="8">
                                <Text fontSize="7xl" fontFamily="monospace" fontWeight="bold">
                                    TO
                                </Text>
                                <Text fontSize="7xl" fontFamily="monospace">
                                    FIND
                                </Text>
                                <Text as={'span'} fontSize="7xl" mt={3} ml={-1}>
                                    <Icon as={ImSearch} color={'green.400'} transform={'rotateZ(85deg)'} />
                                </Text>
                                <Text fontSize="7xl" fontFamily="monospace" fontWeight="bold">
                                    UT
                                </Text>
                            </Flex>
                        </Stack>
                    </VStack>
                </Flex>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>Welcome back!</Heading>
                        {children}
                    </Stack>
                </Flex>
            </Stack>
        </>
    )
}
