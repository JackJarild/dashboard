import { Stack, Flex, VStack, Heading, Text, Icon, Center } from '@chakra-ui/react';
import * as React from 'react';
import loginBackground from '../assets/projectionsGreen.svg'
import { ImSearch } from 'react-icons/im';
import { Logo } from '@/components/Elements';

type LayoutProps = {
    children: React.ReactNode
}

export const LoginLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex
                    display={{ base: 'none', md: 'flex' }}
                    flex={1}
                    backgroundImage={
                        `url(${loginBackground})`
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <VStack
                        w={'full'}
                        bgGradient={'linear(to-r, blackAlpha.300, blackAlpha.100)'}
                    >
                    </VStack>
                </Flex>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'lg'}>
                        <Center>
                            <Logo />
                        </Center>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Welcome back!
                        </Heading>
                        {children}
                    </Stack>
                </Flex>
            </Stack>
        </>
    )
}
