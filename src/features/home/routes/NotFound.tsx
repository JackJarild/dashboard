import { MainLayout } from '@/components/Layout';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="4xl"
          bgGradient="linear(to-r, tfogreen.400, tfogreen.600)"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="3xl" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text fontSize={'2xl'} color={'gray.500'} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          colorScheme="tfogreen"
          bgGradient="linear(to-r, tfogreen.400, tfogreen.500)"
          color="white"
          variant="solid"
          onClick={() => navigate('/home')}
        >
          Go to Home
        </Button>
      </Box>
    </MainLayout>
  )
}