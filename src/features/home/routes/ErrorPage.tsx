import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error: unknown = useRouteError();
  console.error(error);

  return (
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="4xl"
          bgGradient="linear(to-r, tfogreen.400, tfogreen.600)"
          backgroundClip="text">
          Oops!
        </Heading>
        <Text fontSize="3xl" mt={3} mb={2}>
          Sorry, an unexpected error has occurred.
        </Text>
        <Text fontSize={'2xl'} color={'gray.500'} mb={6}>
          {error.statusText || error.message}
        </Text>

        <Button
          colorScheme="tfogreen"
          bgGradient="linear(to-r, tfogreen.400, tfogreen.500)"
          color="white"
          variant="solid"
          onClick={() => navigate('/login')}
        >
          Refresh page
        </Button>

        <Button
          colorScheme="tfogreen"
          bgGradient="linear(to-r, tfogreen.400, tfogreen.500)"
          color="white"
          variant="solid"
          onClick={() => navigate('/login')}
        >
          Go to login
        </Button>
      </Box>
  )
}