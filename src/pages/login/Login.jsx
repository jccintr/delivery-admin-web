import React, {useState,useContext,useEffect} from 'react';
import {Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack,Link,Button,Heading,Text,useColorModeValue,useToast,Image } from '@chakra-ui/react';
import DataContext from '../../context/DataContext';
import Api from '../../api/Api.js';
import logo from '../../assets/logo-delivroo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [remember,setRemember] = useState(false);
    const {setLogged,setLoggedUser,setApiToken,apiToken} = useContext(DataContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();


/*
useEffect(()=>{

    }, []);
*/

    const onLogin = async () =>{

      setIsLoading(true);
      let response = await Api.login(email,password);
      if(response.status===200){
          let json = await response.json();
          if (remember) {
             localStorage.setItem('token', json.token);  
          }
          setApiToken(json.token);
          setLoggedUser(json);
          setLogged(true);
          navigate('/lojas');
      }
      else{
          toast({
          title: 'Acesso não autorizado !',
          description: "Nome de usuário e ou senha inválidos.",
          status: 'error',
          duration: 3000,
          isClosable: true,
          });
          setIsLoading(false);
          setEmail('');
          setPassword('');
      }
 }




    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={['white','gray.100']}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Image w='150px' h='150px' rounded='full'   src={logo} alt="logo" />
              
              <Text fontSize={'lg'} color={'gray.600'}>Painel de Administração</Text>
            </Stack>
            <Box w={['300px','400px']} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={['none','lg']} p={[0,8]}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Senha</FormLabel>
                  <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </FormControl>
                <Stack spacing={10}>
                  <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                    <Checkbox isChecked={remember} onChange={(e) => setRemember(e.target.checked)}>Permanecer conectado</Checkbox>
                  </Stack>
                  <Stack align={'center'}>
                     <Link color={'blue.400'}>Esqueceu a senha ?</Link>
                  </Stack>
                  <Button isLoading={isLoading} onClick={onLogin} bg={'blue.400'} color={'white'} _hover={{bg: 'blue.500',}}>
                    ENTRAR
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      );
}

export default Login


