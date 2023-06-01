import { Box, useColorModeValue } from "@chakra-ui/react"

type ContentLayoutProps = {
    children: React.ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {

    return (
        <Box
            minW={'100%'}
            py={{ base: 5, sm: 10, md: 10, lg: 10 }}
            px={{ base: 0, sm: 5, md: 10, lg: 10 }}
            gap={10}
            minH={'90vh'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            {children}
        </Box>
    )
}