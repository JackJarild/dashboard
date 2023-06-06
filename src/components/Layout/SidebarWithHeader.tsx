import { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  chakra,
} from '@chakra-ui/react';
import {
  FiHome,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiArchive,
  FiShoppingCart,
  FiFileText
} from 'react-icons/fi';
import { ImSearch } from 'react-icons/im';
import { IconType } from 'react-icons';
import { useLogout } from '@/lib/auth';
import { NavLink, useNavigate } from 'react-router-dom'
import { Logo } from '../Elements';

interface LinkItemProps {
  name: string
  icon: IconType
  route: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, route: '/' },
  { name: 'Order', icon: FiShoppingCart, route: '/order' },
  { name: 'Reports', icon: FiFileText, route: '/reports' },
  { name: 'Archive', icon: FiArchive, route: '/archive' },
  { name: 'Settings', icon: FiSettings, route: '/settings' },
];

export const SidebarWithHeader = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8">
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          route={link.route}
          _hover={{ bg: 'tfogreen.500', color: 'white' }}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  route: string
}
const NavItem = ({ icon, children, route, ...rest }: NavItemProps) => {
  return (
    <Link
      as={NavLink}
      to={route}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      _activeLink={{ color: 'tfopink.600' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        // _hover={{
        //   bg: 'cyan.400',
        //   color: 'white',
        // }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const logout = useLogout();
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Flex display={{ base: 'flex', md: 'none' }}>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          TO
        </Text>
        <Text fontSize="2xl" fontFamily="monospace">
          FIND
        </Text>
        <Text as={'span'} fontSize="2xl" mt={1} ml={-1}>
          <Icon as={ImSearch} color={'tfogreen.500'} transform={'rotateZ(85deg)'} />
        </Text>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          UT
        </Text>
      </Flex>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size={'lg'}
          variant={'ghost'}
          aria-label='toggle darkmode'
          icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
          onClick={toggleColorMode}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          pos={'relative'}
          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
          icon={
            <>
              <FiBell />
              <Flex
                borderRadius={9999}
                align={'center'}
                justify={'center'}
                shrink={0}
                grow={0}
                fontSize={'xs'}
                top={0.5}
                right={0.6}
                bg={'tfopink.600'}
                color={'white'}
                pos={'absolute'}
                w={5}
                h={5}
              >
                3
              </Flex>
            </>
          }
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => logout.mutate({}, {
                onSuccess: () => navigate('/login')
              })}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};