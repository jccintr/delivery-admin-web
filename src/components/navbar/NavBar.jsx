import React, {ReactNode} from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  
  const Links = ['Home', 'Lojas', 'Relatórios'];
  
  const NavLink = ({ label,selected }) => (
    <Link
      borderWidth={selected?'1px':''}
      px={2}
      py={1}
      rounded={'md'}
      color='white'
      _hover={{
        color:'blue.500',
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {label}
    </Link>
  );

const NavBar = ({selected}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
          <Box bg='blue.500'  px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={8} alignItems={'center'}>
              <Text as='b' color='white' fontSize={'lg'}>BrazPed</Text>
                
                <HStack
                  as={'nav'}
                  spacing={4}
                  display={{ base: 'none', md: 'flex' }}>
                  {Links.map((link,index) => (
                    <NavLink key={link} label={link} selected={index===selected}/>
                  ))}
                </HStack>
              </HStack>
              <Link 
                 color='white'
                 textDecoration='none'
                 href={'/logout'}
                 _hover={{textDecoration: 'none',}}
                 >
                 Logout
              </Link>
              
            </Flex>
    
            {isOpen ? (
              <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                  {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))}
                </Stack>
              </Box>
            ) : null}
          </Box>
        </>
      );
}

export default NavBar