import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {Box,Flex,HStack,IconButton,Button,useDisclosure,useColorModeValue,Stack,Text} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import DataContext from '../../context/DataContext';
  
  const Links = ['Home', 'Lojas', 'Relatórios'];

  const navLinks = [
    {
      id: 0,
      label: 'Dashboard',
      link: '/'
    },
    {
      id: 1,
      label: 'Lojas',
      link: '/lojas'
    },
    
];
  
const NavLink = ({ item }) => (<Link style={{ textDecoration: "none",color: 'white' }} to={item.link}>{item.label}</Link>);


 

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {setLogged,setLoggedUser} = useContext(DataContext);

    const logout = () =>{
      localStorage.removeItem('token');
      setLogged(false);
      setLoggedUser(null);
      
   }

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
                  {navLinks.map((navLink) => (
                    <NavLink key={navLink.id} item={navLink} />
                  ))}
                </HStack>
              </HStack>
              <Button 
                  color='white'
                  variant='outline'
                  onClick={logout}
                  size='sm'
                  _hover={{
                    color:'blue.500',
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  >
                   Logout
              </Button>
              
              
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