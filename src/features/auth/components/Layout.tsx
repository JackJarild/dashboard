import { Box } from '@chakra-ui/layout';
import * as React from 'react';

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Box
                w='100vw'
                h="100vh"
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                as="main">
                {children}
            </Box>
        </>
    )
}
