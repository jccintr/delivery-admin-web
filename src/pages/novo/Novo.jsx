import React, {useState,useContext} from 'react';
import { Flex,Text,Box,useColorModeValue,Stack } from '@chakra-ui/react';
import { FormControl,FormLabel,Input,Select,Button,useToast,Heading } from '@chakra-ui/react';
import Api from '../../api/Api';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';


const Novo = () => {
    const {apiToken} = useContext(DataContext);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [telefone,setTelefone] = useState('');
    const [logradouro,setLogradouro] = useState('');
    const [bairro,setBairro] = useState('');
    const [cidade,setCidade] = useState('');
    const [estado,setEstado] = useState('');
    const [logotipo,setLogotipo] = useState('');
    const [corFundo,setCorFundo] = useState('#000000');
    const [corTexto,setCorTexto] = useState('#ffffff');
    const [isLoading,setIsLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const estados = [
        { sigla: 'AC',nome: 'Acre' },
        { sigla:'AL',nome: 'Alagoas' },
        { sigla: 'AP',nome: 'Amapá' },
        { sigla: 'AM',nome: 'Amazonas' },
        { sigla: 'BA',nome: 'Bahia' },
        { sigla:'CE',nome: 'Ceará' },
        { sigla:'DF',nome: 'Distrito Federal' },
        { sigla:'ES',nome: 'Espírito Santo' },
        { sigla: 'GO',nome: 'Goías' },
        { sigla:'MA',nome: 'Maranhão' },
        { sigla :'MT',nome: 'Mato Grosso' },
        { sigla:'MS',nome: 'Mato Grosso do Sul' },
        { sigla :'MG',nome: 'Minas Gerais' },
        { sigla:'PA',nome: 'Pará' },
        { sigla :'PB',nome: 'Paraíba' },
        { sigla:'PR',nome: 'Paraná' },
        { sigla:'PE',nome: 'Pernambuco' },
        { sigla :'PI',nome: 'Piauí' },
        { sigla :'RJ',nome: 'Rio de Janeiro' },
        { sigla:'RN',nome: 'Rio Grande do Norte' },
        { sigla:'RS',nome: 'Rio Grande do Sul' },
        { sigla:'RO',nome: 'Rondônia' },
        { sigla :'RR',nome: 'Roraíma' },
        { sigla:'SC',nome: 'Santa Catarina' },
        { sigla :'SP',nome: 'São Paulo' },
        { sigla :'SE',nome: 'Sergipe' },
        { sigla :'TO',nome: 'Tocantins' },
      ];

      
      const onSalvar = async () => {
        setIsLoading(true);
       // e.preventDefault();
        const fd = new FormData();
        fd.append('name',name);
        fd.append('email',email);
        fd.append('password',password);
        fd.append('telefone',telefone);
        fd.append('logradouro',logradouro);
        fd.append('bairro',bairro);
        fd.append('cidade',cidade);
        fd.append('estado',estado);
        fd.append('logotipo',logotipo);
        fd.append('cor_fundo',corFundo);
        fd.append('cor_texto',corTexto);
        let response = await Api.addTenant(apiToken,fd);
        if(response.status===201){
          
          toast({
            title: 'Sucesso !',
            description: "Loja adicionada com sucesso.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          //onClose();
          setIsLoading(false);
          navigate('/lojas');
      } else {
        let erro = await response.json();
        toast({
          title: 'Falha !',
          description: erro.erro,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
      setIsLoading(false);
  }

      const handlerLogotipo = (e) => {
  /*
        if(e.target.files[0]){
          imgRef.current.src = URL.createObjectURL(e.target.files[0]);
          setImagemCarregada(true);
        }
        */
        setLogotipo(e.target.files[0]);
      
      }
    
      const onCancelar = () => {
        navigate('/lojas');
      }

  return (
    <Flex minH={'100vh'} direction='column' align={'center'} justify={'flex-start'} bg={['white','gray.100']} p='8'>
        <Heading mb='4' fontSize={'3xl'}>Nova Loja</Heading>
        
        <Box w={['300px','800px']} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={['none','lg']} p={[0,8]}>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                <FormControl mb='4' isRequired>
                  <FormLabel>Nome</FormLabel>
                  <Input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </FormControl>
            </Stack>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                <FormControl mb='4' isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </FormControl>
                <FormControl mb='4' isRequired>
                  <FormLabel>Senha</FormLabel>
                  <Input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </FormControl>
            </Stack>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                <FormControl mb='4' isRequired>
                  <FormLabel>Telefone</FormLabel>
                  <Input type="text" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                </FormControl>
            </Stack>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                <FormControl mb='4' isRequired>
                  <FormLabel>Logradouro</FormLabel>
                  <Input type="text" value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
                </FormControl>
            </Stack>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                <FormControl mb='4' isRequired>
                  <FormLabel>Bairro</FormLabel>
                  <Input type="text" value={bairro} onChange={e => setBairro(e.target.value)}/>
                </FormControl>
                <FormControl mb='4' isRequired>
                  <FormLabel>Cidade</FormLabel>
                  <Input type="text" value={cidade} onChange={e => setCidade(e.target.value)}/>
                </FormControl>
            </Stack>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                    <FormControl mb='4' isRequired>
                        <FormLabel>
                        Estado
                        </FormLabel>
                        <Select 
                            placeholder='Selecione um estado'
                            value={estado}
                            onChange={e => setEstado(e.target.value)}>
                            {estados.map((estado)=> (
                                <option key={estado.sigla} value={estado.sigla}>{estado.nome}</option>
                            ))}
                        </Select>
                    </FormControl>
            </Stack>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                <FormControl mb='4' isRequired>
                  <FormLabel>Cor do Texto</FormLabel>
                  <Input type="color" value={corTexto} onChange={e => setCorTexto(e.target.value)}/>
                </FormControl>
                <FormControl mb='4' isRequired>
                  <FormLabel>Cor do Fundo</FormLabel>
                  <Input type="color" value={corFundo} onChange={e => setCorFundo(e.target.value)}/>
                </FormControl>
            </Stack>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                    <FormControl>
                        <FormLabel>
                            Logotipo
                        </FormLabel>
                        <Input mb='4' type="file" id="imagem" name="imagem" onChange={handlerLogotipo}/>
                    </FormControl>
            </Stack>
            <Stack px={['0','0','12']} direction={['column', 'column', 'row']} spacing={['6', '6', '5']}>
                <Button 
                        isLoading={isLoading}
                        onClick={onSalvar}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{bg: 'blue.500',}}
                    >
                        SALVAR
                </Button>
                <Button 
                        isLoading={isLoading}
                        onClick={onCancelar}
                        bg={'red.400'}
                        color={'white'}
                        _hover={{bg: 'red.500',}}
                    >
                        CANCELAR
                </Button>
            </Stack>
        </Box>
    </Flex>
  )
}

export default Novo