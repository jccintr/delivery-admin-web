import React, {useState} from 'react';
import { Flex,Text,Box,useColorModeValue,Stack } from '@chakra-ui/react';
import { FormControl,FormLabel,Input,Select,Button,useToast } from '@chakra-ui/react';
import Api from '../../api/Api';


const Novo = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [telefone,setTelefone] = useState('');
    const [logradouro,setLogradouro] = useState('');
    const [bairro,setBairro] = useState('');
    const [cidade,setCidade] = useState('');
    const [estado,setEstado] = useState('');
    const [logotipo,setLogotipo] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const toast = useToast();

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
        let response = await Api.addTenant(fd);
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
      } else {
        //console.log(response.status);
        let erro = await response.json();
        //console.log(erro);
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
    

  return (
    <Flex minH={'100vh'} direction='column' align={'center'} justify={'flex-start'} bg={['white','gray.100']} p='8'>
        <Text mb='4' fontSize={'2xl'} >Nova Loja</Text>
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
                        Estado:
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
                    <FormControl>
                        <FormLabel>
                            Logotipo:
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
            </Stack>
        </Box>
    </Flex>
  )
}

export default Novo