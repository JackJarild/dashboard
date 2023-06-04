import { InputField, InputGroupField, Form } from "@/components/Form";
import { Box, Button, ButtonGroup, Flex, Heading, Text, Icon, InputRightElement, Link, Progress, Stack, VStack, useColorModeValue, useToast, FormLabel, Avatar, Divider, FormControl, FormHelperText, GridItem, Input, InputGroup, InputLeftAddon, SimpleGrid, Textarea, VisuallyHidden, chakra, Select, Grid, Center, Square, Checkbox, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";
import * as z from 'zod';
import { Order } from "../types";


const schema = z.object({
    email: z.string().min(1, 'Required'),
});

export const OrderForm = () => {
    const navigate = useNavigate()
    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false)

    // return (
    //     <>
    //         <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    //             <Flex flex={2} justify={'center'}>
    //                 <Stack spacing={4} w={'full'} maxW={'md'}>
    //                     <Heading fontSize={'4xl'} textAlign={'center'}>Welcome back!</Heading>
    //                     <Form<Order, typeof schema>
    //                         onSubmit={async (values) => {
    //                             // login.mutate(values, {
    //                             //   onSuccess: () => navigate('/'),
    //                             //   onError: () => toast({
    //                             //     title: 'Error logging in',
    //                             //     status: 'error',
    //                             //     isClosable: true,
    //                             //   })
    //                             // })
    //                         }}
    //                         schema={schema}
    //                     >
    //                         {({ register, formState }) => (
    //                             <>
    //                                 <InputField
    //                                     type="email"
    //                                     error={formState.errors['email']}
    //                                     registration={register('email')}
    //                                     placeHolder='Email'
    //                                 />
    //                                 <Stack spacing={6}>
    //                                     <Stack
    //                                         direction={{ base: 'column', sm: 'row' }}
    //                                         align={'start'}
    //                                         justify={'end'}>
    //                                         <Link color={'teal.500'} to={''}>Forgot password?</Link>
    //                                     </Stack>
    //                                     <Button
    //                                         //isLoading={login.isLoading}
    //                                         type="submit"
    //                                     >
    //                                         Skicka beställning
    //                                     </Button>
    //                                 </Stack>
    //                             </>
    //                         )}
    //                     </Form>
    //                 </Stack>
    //             </Flex>
    //             <Flex flex={1}>
    //                 <VStack
    //                     w={'full'}
    //                     bg={'gray.100'}
    //                 >
    //                     <Text fontSize="2xl" fontWeight="bold">
    //                         Order summary
    //                     </Text>
    //                     <Stack maxW={'2xl'} align={'flex-start'}
    //                         textAlign={'center'}
    //                         spacing={{ base: 3, md: 5 }}
    //                         py={{ base: 20, md: 28 }}>
    //                         <Flex h="20" alignItems="center" mx="8">
    //                         </Flex>
    //                     </Stack>
    //                 </VStack>
    //             </Flex>

    //         </Stack>
    //     </>
    // )

    return (
        <>
            {/* <Flex color='white'>
                <Center>
                    <Box>
                        <SimpleGrid
                            display={{
                                base: "initial",
                                md: "grid",
                            }}
                            columns={{
                                md: 3,
                            }}
                            spacing={{
                                md: 6,
                            }}
                        >
                            <GridItem
                                colSpan={{
                                    md: 1,
                                }}
                            >
                                <Box px={[4, 0]}>
                                    <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                                        Profile
                                    </Heading>
                                    <Text
                                        mt={1}
                                        fontSize="sm"
                                        color="gray.600"
                                        _dark={{
                                            color: "gray.400",
                                        }}
                                    >
                                        This information will be displayed publicly so be careful what you
                                        share.
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem
                                mt={[5, null, 0]}
                                colSpan={{
                                    md: 2,
                                }}
                            >
                                <chakra.form
                                    method="POST"
                                    shadow="base"
                                    rounded={[null, "md"]}
                                    overflow={{
                                        sm: "hidden",
                                    }}
                                >
                                    <Stack
                                        px={4}
                                        py={5}
                                        bg="white"
                                        _dark={{
                                            bg: "#141517",
                                        }}
                                        spacing={6}
                                        p={{
                                            sm: 6,
                                        }}
                                    >
                                        <SimpleGrid columns={3} spacing={6}>
                                            <FormControl as={GridItem} colSpan={[3, 2]}>
                                                <FormLabel
                                                    fontSize="sm"
                                                    fontWeight="md"
                                                    color="gray.700"
                                                    _dark={{
                                                        color: "gray.50",
                                                    }}
                                                >
                                                    Website
                                                </FormLabel>
                                                <InputGroup size="sm">
                                                    <InputLeftAddon
                                                        bg="gray.50"
                                                        _dark={{
                                                            bg: "gray.800",
                                                        }}
                                                        color="gray.500"
                                                        rounded="md"
                                                    >
                                                        http://
                                                    </InputLeftAddon>
                                                    <Input
                                                        type="tel"
                                                        placeholder="www.example.com"
                                                        focusBorderColor="brand.400"
                                                        rounded="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                        </SimpleGrid>

                                        <div>
                                            <FormControl id="email" mt={1}>
                                                <FormLabel
                                                    fontSize="sm"
                                                    fontWeight="md"
                                                    color="gray.700"
                                                    _dark={{
                                                        color: "gray.50",
                                                    }}
                                                >
                                                    About
                                                </FormLabel>
                                                <Textarea
                                                    placeholder="you@example.com"
                                                    mt={1}
                                                    rows={3}
                                                    shadow="sm"
                                                    focusBorderColor="brand.400"
                                                    fontSize={{
                                                        sm: "sm",
                                                    }}
                                                />
                                                <FormHelperText>
                                                    Brief description for your profile. URLs are hyperlinked.
                                                </FormHelperText>
                                            </FormControl>
                                        </div>

                                        <FormControl>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{
                                                    color: "gray.50",
                                                }}
                                            >
                                                Photo
                                            </FormLabel>
                                            <Flex alignItems="center" mt={1}>
                                                <Avatar
                                                    boxSize={12}
                                                    bg="gray.100"
                                                    _dark={{
                                                        bg: "gray.800",
                                                    }}
                                                    icon={
                                                        <Icon
                                                            as={FiUser}
                                                            boxSize={9}
                                                            mt={3}
                                                            rounded="full"
                                                            color="gray.300"
                                                            _dark={{
                                                                color: "gray.700",
                                                            }}
                                                        />
                                                    }
                                                />
                                                <Button
                                                    type="button"
                                                    ml={5}
                                                    variant="outline"
                                                    size="sm"
                                                    fontWeight="medium"
                                                    _focus={{
                                                        shadow: "none",
                                                    }}
                                                >
                                                    Change
                                                </Button>
                                            </Flex>
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{
                                                    color: "gray.50",
                                                }}
                                            >
                                                Cover photo
                                            </FormLabel>
                                            <Flex
                                                mt={1}
                                                justify="center"
                                                px={6}
                                                pt={5}
                                                pb={6}
                                                borderWidth={2}
                                                _dark={{
                                                    color: "gray.500",
                                                }}
                                                borderStyle="dashed"
                                                rounded="md"
                                            >
                                                <Stack spacing={1} textAlign="center">
                                                    <Icon
                                                        mx="auto"
                                                        boxSize={12}
                                                        color="gray.400"
                                                        _dark={{
                                                            color: "gray.500",
                                                        }}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </Icon>
                                                    <Flex
                                                        fontSize="sm"
                                                        color="gray.600"
                                                        _dark={{
                                                            color: "gray.400",
                                                        }}
                                                        alignItems="baseline"
                                                    >
                                                        <chakra.label
                                                            htmlFor="file-upload"
                                                            cursor="pointer"
                                                            rounded="md"
                                                            fontSize="md"
                                                            color="brand.600"
                                                            _dark={{
                                                                color: "brand.200",
                                                            }}
                                                            pos="relative"
                                                            _hover={{
                                                                color: "brand.400",
                                                                _dark: {
                                                                    color: "brand.300",
                                                                },
                                                            }}
                                                        >
                                                            <span>Upload a file</span>
                                                            <VisuallyHidden>
                                                                <input
                                                                    id="file-upload"
                                                                    name="file-upload"
                                                                    type="file"
                                                                />
                                                            </VisuallyHidden>
                                                        </chakra.label>
                                                        <Text pl={1}>or drag and drop</Text>
                                                    </Flex>
                                                    <Text
                                                        fontSize="xs"
                                                        color="gray.500"
                                                        _dark={{
                                                            color: "gray.50",
                                                        }}
                                                    >
                                                        PNG, JPG, GIF up to 10MB
                                                    </Text>
                                                </Stack>
                                            </Flex>
                                        </FormControl>
                                    </Stack>
                                    <Box
                                        px={{
                                            base: 4,
                                            sm: 6,
                                        }}
                                        py={3}
                                        bg="gray.50"
                                        _dark={{
                                            bg: "#121212",
                                        }}
                                        textAlign="right"
                                    >
                                        <Button
                                            type="submit"
                                            colorScheme="brand"
                                            _focus={{
                                                shadow: "",
                                            }}
                                            fontWeight="md"
                                        >
                                            Save
                                        </Button>
                                    </Box>
                                </chakra.form>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                </Center>
                <Box flex='1' bg='tomato'>
                    <Text>Box 3</Text>
                </Box>
            </Flex> */}

            <Box>
                <SimpleGrid
                    display={{
                        base: "initial",
                        md: "grid",
                    }}
                    columns={{
                        md: 3,
                    }}
                    spacing={{
                        md: 6,
                    }}
                >
                    <GridItem
                        colSpan={{
                            md: 1,
                        }}
                    >
                        <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                                Individ
                            </Heading>
                            <Text
                                mt={1}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                Ange individens personuppgifter till bakgrundskontrollen
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
                        mt={[5, null, 0]}
                        colSpan={{
                            md: 2,
                        }}
                    >
                        <chakra.form
                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{
                                sm: "hidden",
                            }}
                        >
                            <Stack
                                px={4}
                                py={5}
                                bg="white"
                                _dark={{
                                    bg: "#141517",
                                }}
                                spacing={6}
                                p={{
                                    sm: 6,
                                }}
                            >
                                <SimpleGrid columns={3} spacing={6}>
                                    <FormControl as={GridItem} colSpan={[3, 2]}>
                                        <FormLabel
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}
                                        >
                                            Website
                                        </FormLabel>
                                        <InputGroup size="sm">
                                            <InputLeftAddon
                                                bg="gray.50"
                                                _dark={{
                                                    bg: "gray.800",
                                                }}
                                                color="gray.500"
                                                rounded="md"
                                            >
                                                http://
                                            </InputLeftAddon>
                                            <Input
                                                type="tel"
                                                placeholder="www.example.com"
                                                focusBorderColor="brand.400"
                                                rounded="md"
                                            />
                                        </InputGroup>
                                    </FormControl>
                                </SimpleGrid>

                                <FormControl>
                                    <FormLabel
                                        fontSize="sm"
                                        fontWeight="md"
                                        color="gray.700"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                    >
                                        Cv
                                    </FormLabel>
                                    <Flex
                                        mt={1}
                                        justify="center"
                                        px={6}
                                        pt={5}
                                        pb={6}
                                        borderWidth={2}
                                        _dark={{
                                            color: "gray.500",
                                        }}
                                        borderStyle="dashed"
                                        rounded="md"
                                    >
                                        <Stack spacing={1} textAlign="center">
                                            <Icon
                                                mx="auto"
                                                boxSize={12}
                                                color="gray.400"
                                                _dark={{
                                                    color: "gray.500",
                                                }}
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </Icon>
                                            <Flex
                                                fontSize="sm"
                                                color="gray.600"
                                                _dark={{
                                                    color: "gray.400",
                                                }}
                                                alignItems="baseline"
                                            >
                                                <chakra.label
                                                    htmlFor="file-upload"
                                                    cursor="pointer"
                                                    rounded="md"
                                                    fontSize="md"
                                                    color="brand.600"
                                                    _dark={{
                                                        color: "brand.200",
                                                    }}
                                                    pos="relative"
                                                    _hover={{
                                                        color: "brand.400",
                                                        _dark: {
                                                            color: "brand.300",
                                                        },
                                                    }}
                                                >
                                                    <span>Upload a file</span>
                                                    <VisuallyHidden>
                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                        />
                                                    </VisuallyHidden>
                                                </chakra.label>
                                                <Text pl={1}>or drag and drop</Text>
                                            </Flex>
                                            <Text
                                                fontSize="xs"
                                                color="gray.500"
                                                _dark={{
                                                    color: "gray.50",
                                                }}
                                            >
                                                PNG, JPG, GIF up to 10MB
                                            </Text>
                                        </Stack>
                                    </Flex>
                                </FormControl>
                            </Stack>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Divider
                my="5"
                borderColor="gray.300"
                _dark={{
                    borderColor: "whiteAlpha.300",
                }}
                visibility={{
                    base: "hidden",
                    sm: "visible",
                }}
            />

            <Box mt={[10, 0]}>
                <SimpleGrid
                    display={{
                        base: "initial",
                        md: "grid",
                    }}
                    columns={{
                        md: 3,
                    }}
                    spacing={{
                        md: 6,
                    }}
                >
                    <GridItem
                        colSpan={{
                            md: 1,
                        }}
                    >
                        <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                                Anteckning
                            </Heading>
                            <Text
                                mt={1}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                Här kan du skapa en notering om kontrollen som är synlig både för dig, researchern och mottagare i rapporten. Observera att denna notering inte kommer att visas för individen.
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
                        mt={[5, null, 0]}
                        colSpan={{
                            md: 2,
                        }}
                    >
                        <chakra.form
                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{
                                sm: "hidden",
                            }}
                        >
                            <Stack
                                px={4}
                                py={5}
                                p={[null, 6]}
                                bg="white"
                                _dark={{
                                    bg: "#141517",
                                }}
                                spacing={6}
                            >
                                <SimpleGrid columns={6} spacing={6}>


                                    <FormControl as={GridItem} colSpan={12}>
                                        <FormLabel
                                            htmlFor="email_address"
                                            fontSize="sm"
                                            fontWeight="md"
                                            color="gray.700"
                                            _dark={{
                                                color: "gray.50",
                                            }}
                                        >
                                            Anteckning
                                        </FormLabel>
                                        <Textarea
                                            autoComplete="email"
                                            mt={1}
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="full"
                                            rounded="md"
                                            resize={'vertical'}
                                        />
                                    </FormControl>
                                </SimpleGrid>
                            </Stack>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Divider
                my="5"
                borderColor="gray.300"
                _dark={{
                    borderColor: "whiteAlpha.300",
                }}
                visibility={{
                    base: "hidden",
                    sm: "visible",
                }}
            />

            <Box mt={[10, 0]}>
                <SimpleGrid
                    display={{
                        base: "initial",
                        md: "grid",
                    }}
                    columns={{
                        md: 3,
                    }}
                    spacing={{
                        md: 6,
                    }}
                >
                    <GridItem
                        colSpan={{
                            md: 1,
                        }}
                    >
                        <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                                Fakturaadress
                            </Heading>
                            <Text
                                mt={1}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
                        mt={[5, null, 0]}
                        colSpan={{
                            md: 2,
                        }}
                    >
                        <chakra.form
                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{
                                sm: "hidden",
                            }}
                        >
                            <Stack
                                px={4}
                                py={5}
                                p={[null, 6]}
                                bg="white"
                                _dark={{
                                    bg: "#141517",
                                }}
                                spacing={6}
                            >
                                <chakra.fieldset>
                                    <Box
                                        as="legend"
                                        fontSize="md"
                                        color="gray.900"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                    >
                                        By Email
                                    </Box>
                                    <Stack mt={4} spacing={4}>

                                    </Stack>
                                </chakra.fieldset>
                            </Stack>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Divider
                my="5"
                borderColor="gray.300"
                _dark={{
                    borderColor: "whiteAlpha.300",
                }}
                visibility={{
                    base: "hidden",
                    sm: "visible",
                }}
            />

            <Box mt={[10, 0]}>
                <SimpleGrid
                    display={{
                        base: "initial",
                        md: "grid",
                    }}
                    columns={{
                        md: 3,
                    }}
                    spacing={{
                        md: 6,
                    }}
                >
                    <GridItem
                        colSpan={{
                            md: 1,
                        }}
                    >
                        <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                                Rapportmottagare
                            </Heading>
                            <Text
                                mt={1}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                Lägg till en ytterligare användare som får tillgång till rapporten (valfritt)
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
                        mt={[5, null, 0]}
                        colSpan={{
                            md: 2,
                        }}
                    >
                        <chakra.form
                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{
                                sm: "hidden",
                            }}
                        >
                            <Stack
                                px={4}
                                py={5}
                                p={[null, 6]}
                                bg="white"
                                _dark={{
                                    bg: "#141517",
                                }}
                                spacing={6}
                            >
                                <chakra.fieldset>
                                    <Box
                                        as="legend"
                                        fontSize="md"
                                        color="gray.900"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                    >
                                        Rapportmottagare
                                    </Box>
                                    <Stack mt={4} spacing={4}>
                                        <Select placeholder='Användare'>
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>
                                    </Stack>
                                </chakra.fieldset>
                            </Stack>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Divider
                my="5"
                borderColor="gray.300"
                _dark={{
                    borderColor: "whiteAlpha.300",
                }}
                visibility={{
                    base: "hidden",
                    sm: "visible",
                }}
            />

            <Box mt={[10, 0]}>
                <SimpleGrid
                    display={{
                        base: "initial",
                        md: "grid",
                    }}
                    columns={{
                        md: 3,
                    }}
                    spacing={{
                        md: 6,
                    }}
                >
                    <GridItem
                        colSpan={{
                            md: 1,
                        }}
                    >
                        <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                                Fakturering
                            </Heading>
                            <Text
                                mt={1}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.400",
                                }}
                            >
                                Lägg till en ytterligare användare som får tillgång till rapporten (valfritt)
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
                        mt={[5, null, 0]}
                        colSpan={{
                            md: 2,
                        }}
                    >
                        <chakra.form
                            method="POST"
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{
                                sm: "hidden",
                            }}
                        >
                            <Stack
                                px={4}
                                py={5}
                                p={[null, 6]}
                                bg="white"
                                _dark={{
                                    bg: "#141517",
                                }}
                                spacing={6}
                            >
                                <chakra.fieldset>
                                    <Box
                                        as="legend"
                                        fontSize="md"
                                        color="gray.900"
                                        _dark={{
                                            color: "gray.50",
                                        }}
                                    >
                                        Referensperson (fakturamottagare)
                                    </Box>
                                    <Stack mt={4} spacing={4}>
                                    </Stack>
                                </chakra.fieldset>
                            </Stack>
                        </chakra.form>
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Box mt={[10, 0]}>
                <Button onClick={() => navigate('received')}>
                    Skicka
                </Button>
            </Box>
        </>
    )
}