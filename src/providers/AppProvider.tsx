import theme from '@/theme';
import { Box, ChakraProvider, CircularProgress, extendTheme, useMediaQuery, type ThemeConfig, ColorModeScript, Flex, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { HelmetProvider } from 'react-helmet-async';
// import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthLoader } from '@/lib/auth';
import { Login } from '@/features/auth/routes/Login';

// import { AuthProvider } from '@/lib/auth';
// import { queryClient } from '@/lib/react-query';

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
        </Box>
    );
};

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

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
                    <CircularProgress isIndeterminate color='green.300' />
                </Box>
            }
        >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <QueryClientProvider client={queryClient}>
                    {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <ChakraProvider theme={theme}>
                        <AuthLoader
                            renderLoading={() => <Box
                                w='100vw'
                                h="100vh"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <CircularProgress isIndeterminate color='green.300' />
                            </Box>}
                            // renderUnauthenticated={() => <Login />}
                        >

                            <BrowserRouter>{children}</BrowserRouter>

                        </AuthLoader>
                    </ChakraProvider>
                </QueryClientProvider>
            </ErrorBoundary>
        </React.Suspense>
    );
};
