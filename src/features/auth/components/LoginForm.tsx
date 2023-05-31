import { Link, useNavigate } from 'react-router-dom';
import * as z from 'zod';
import { Form, InputField, InputGroupField } from '@/components/Form';
import { Box, Icon, InputRightElement, Stack, useColorModeValue, useToast } from '@chakra-ui/react';
import { useLogin } from '@/lib/auth';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { LoginCredentials } from '../api/login';
import { useState } from 'react';
import { Button } from '@/components/Elements';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

export const LoginForm = () => {
  const login = useLogin()
  const navigate = useNavigate()
  const toast = useToast()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}>
      <Form<LoginCredentials, typeof schema>
        onSubmit={async (values) => {
          login.mutate(values, {
            onSuccess: () => navigate('/home'),
            onError: () => toast({
              title: 'Error logging in',
              status: 'error',
              isClosable: true,
            })
          })
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              error={formState.errors['email']}
              registration={register('email')}
              placeHolder='Email'
            />
            <InputGroupField
              type={showPassword ? 'text' : 'password'}
              placeHolder='Password'
              error={formState.errors['password']}
              registration={register('password')}
              inputRightAddon={
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <Icon as={FiEye} /> : <Icon as={FiEyeOff} />}
                  </Button>
                </InputRightElement>
              }
            />
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'end'}>
                <Link color={'teal.500'} to={''}>Forgot password?</Link>
              </Stack>
              <Button
                isLoading={login.isLoading}
                type="submit"
              //bgColor='primary'
              // bgColor={'tfogreen.500'}
              // _hover={{ bgColor: 'tfogreen.300' }}
              //bgGradient={'linear(to-r, #DB4D9E, #AC42DB, #2D1D8F)'}
              // _hover={{
              //   bgGradient: 'linear(to-r, #F4C8E1, #DB4D9E)',
              // }}
              >
                Sign in
              </Button>
            </Stack>
          </>
        )}
      </Form>
    </Box>
  )
}