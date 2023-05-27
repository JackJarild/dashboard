import { Link } from 'react-router-dom';
import * as z from 'zod';

//import { Button } from '@/components/Elements';
import { Form, InputField, InputGroupField } from '@/components/Form';
import { Button, Heading, Icon, InputRightElement, Stack } from '@chakra-ui/react';
import { useLogin } from '@/lib/auth';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { LoginCredentials } from '../api/login';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
//import { useAuth } from '@/lib/auth';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

// type LoginValues = {
//   email: string;
//   password: string;
// };

type LoginFormProps = {
  onSuccess: () => void;
};


export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack spacing={4} w={'full'} maxW={'md'}>
      <Heading fontSize={'4xl'} textAlign={'center'}>Welcome back!</Heading>
      <Form<LoginCredentials, typeof schema>
        onSubmit={async (values) => {
          login.mutate(values);
          onSuccess();
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
                variant={'solid'}
                isLoading={login.isLoading}
                type="submit"
                bgColor={'tfogreen.500'}
                _hover={{ bgColor: 'tfogreen.300' }}
              //bgGradient={'linear(to-r, #DB4D9E, #AC42DB, #2D1D8F)'}
              // _hover={{
              //   bgGradient: 'linear(to-r, #F4C8E1, #DB4D9E)',
              // }}
              >
                Sign in
              </Button>
            </Stack>

          </>
        )
        }
      </Form >
    </Stack >
  );
};