import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Icon,
  Box,
  VStack,
  Text
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';
import { IoMdSearch } from 'react-icons/io';
import { useLogin } from '@/lib/auth';
import { LoginCredentialsDTO } from '../api/login';
import { motion, useIsPresent } from 'framer-motion';
import loginBackground from '../../../assets/loginBackground.svg'
import loginBackground2 from '../../../assets/loginBackground2.svg'

export const Login = () => {
  //const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const login = useLogin();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  let loginCredentials: LoginCredentialsDTO = {
    email: email,
    password: password
  }
  const isPresent = useIsPresent();

  return (
    <>
      {/* <LoginForm onSuccess={() => navigate('/home')} /> */}
      {/* <motion.section exit={{ opacity: 0 }}> */}
      {/* <InitialTransition /> */}
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}
          // backgroundImage={
          //   'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80)'
          // }
          backgroundImage={
            `url(${loginBackground2})`
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
        >
          {/* <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
              }
            /> */}
          <VStack
            w={'full'}
            //justify={'center'}
            //px={useBreakpointValue({ base: 4, md: 8 })}
            //bgGradient={'linear(to-r, blackAlpha.300, transparent)'}
            bgGradient={'linear(to-r, blackAlpha.500, blackAlpha.300)'}
            >
            <Stack maxW={'2xl'} align={'flex-start'} //spacing={6}
              textAlign={'center'}
              //align={'center'}
              spacing={{ base: 3, md: 5 }}
              py={{ base: 20, md: 28 }}>
              <Heading
                color={'black'}
                fontWeight={700}
                lineHeight={1.2}
                //fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                fontSize={'7xl'}
              >
                To
                <Text as={'span'} color={'black'} fontWeight={500}>
                  Find
                </Text>
                <Text as={'span'} color={'green.400'}>
                  O
                </Text>
                <Text as={'span'} color={'black'}>
                  ut
                </Text>
                <Text color={'gray.300'} fontSize={'3xl'} ml={'5'}>
                  It's better to know
                </Text>
              </Heading>
            </Stack>
          </VStack>
          {/* <Heading fontSize={'4xl'}>ToFindOut</Heading> */}
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'4xl'}>Welcome back!</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <Icon as={FiEye} /> : <Icon as={FiEyeOff} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'end'}>
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              {/* <Button variant={'solid'} onClick={() => login.mutate(loginCredentials)}> */}
              <Button
                variant={'solid'}
                // bgGradient={'linear(to-r, #F4C8E1, #DB4D9E, #AC42DB, #2D1D8F)'}
                bgGradient={'linear(to-r, #DB4D9E, #AC42DB, #2D1D8F)'}
                onClick={() => navigate('home')}
                _hover={{
                  bgGradient: 'linear(to-r, #F4C8E1, #DB4D9E)',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      {/* </motion.section> */}
    </>
  );
};



// const InitialTransition = () => {
//   const blackBox = {
//     initial: {
//       height: "100vh",
//       bottom: 0,
//     },
//     animate: {
//       height: 0,
//       transition: {
//         duration: 1.5,
//         ease: [0.87, 0, 0.13, 1],
//       },
//     },
//   };

//   return (
//     <Box minH="100vh" justifyContent={'center'} alignContent={'center'} pos={'absolute'} inset={0} flex>
//       <motion.div
//         style={{position: 'relative', zIndex: 50, width: '100%', backgroundColor: 'red'}}
//         //className="relative z-50 w-full bg-black"
//         initial="initial"
//         animate="animate"
//         variants={blackBox}
//       />
//     </Box>
//   );
// };