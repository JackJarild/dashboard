import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate, useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const error: unknown = useRouteError();
  console.error(error);

  return (
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="4xl"
          bgColor={'tfogreen.400'}
          //bgGradient="linear(to-r, tfogreen.400, tfogreen.600)"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="3xl" mt={3} mb={2}>
          Page not found.
        </Text>
        <Button
          colorScheme="tfogreen"
          bgColor={'tfogreen.500'}
          //bgGradient="linear(to-r, tfogreen.400, tfogreen.500)"
          color="white"
          variant="solid"
          onClick={() => navigate('/')}
        >
          Go to Home
        </Button>
      </Box>
  )
}