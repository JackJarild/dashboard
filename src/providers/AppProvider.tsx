import theme from '@/theme';
import { Box, ChakraProvider, CircularProgress, ColorModeScript, Flex, Heading, Text, Button } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from '@/routes';

const ErrorFallback = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Box display="inline-block">
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    bg={'red.500'}
                    rounded={'50px'}
                    w={'55px'}
                    h={'55px'}
                    textAlign="center">
                    KC
                </Flex>
            </Box>
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Ooops, something went wrong :(
            </Heading>
            <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </Text>
            <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
                Refresh
            </Button>
        </Box>
    );
};

export const AppProvider = () => {
    return (
        <React.Suspense
            fallback={
                <Box
                    w='100vw'
                    h="100vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CircularProgress isIndeterminate color='tfogreen.500' />
                </Box>
            }
        >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <QueryClientProvider client={queryClient}>
                    {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <ChakraProvider theme={theme}>
                        <RouterProvider router={router} />
                    </ChakraProvider>
                </QueryClientProvider>
            </ErrorBoundary>
        </React.Suspense>
    );
};
