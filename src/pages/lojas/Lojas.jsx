import React, {useState,useEffect,useContext} from 'react';
import { Flex,Box,useColorModeValue,Heading,Button,Text } from '@chakra-ui/react';
import DataTable from 'react-data-table-component';
import DataContext from '../../context/DataContext';
import Api from '../../api/Api';
import { useNavigate } from 'react-router-dom';


const Lojas = () => {
  const [lojas,setLojas] = useState([]);
  const {apiToken} = useContext(DataContext);
  const navigate = useNavigate();


  const Ativo = ({ativo}) => {
    return <Text>{ativo?'SIM':'NÃO'}</Text>
  }


  const columns = [
    {
        name: 'id',
        width: '50px',
        selector: row => row.id,
        hide: 'sm',
    },
    {
      name: 'Logo',
      width: '100px',
      center: true,
      hide: 'sm',
      cell: row => <img style={{margin:5,width:60,height:60,borderRadius:15}} src={`${Api.base_storage}/${row.logotipo}`} />,
    },
    {
        name: 'Nome',
        selector: row => row.name,
    },
    {
      name: 'Logradouro',
      selector: row => row.logradouro,
      hide: 'sm',
  },
    {
      name: 'Telefone',
      selector: row => row.telefone,
      hide: 'sm',
  },
  {
    name: 'Ativo',
    width: '100px',
    cell: row => <Ativo ativo={row.ativo}/>,
    hide: 'sm',
},
{
  name: 'Aberto',
  width: '100px',
  cell: row => <Ativo ativo={row.aberto}/>,
},
{
  name: 'Actions',
  cell: row => <Button onClick={()=>alert('Editar '+ row.id)} bg={'blue.400'} color={'white'} _hover={{bg: 'blue.500',}} size='xs'>EDITAR</Button>,

},

];



  useEffect(()=>{
    const getLojas = async () => {
      
      let response = await Api.getTenants(apiToken);
      if(response.status===200) {
        let json = await response.json();
        setLojas(json);
      }
      
    }
    getLojas();

 },[]);

 const onAdd = () => {
  navigate('/lojas/nova');
 }

  return (
    <Flex minH={'100vh'} height='100vh' direction='column' align={'center'} justify={'flex-start'} bg={['white','gray.100']} p='8'>
       <Heading mb='4' fontSize={['1xl','3xl']}>Lojas Cadastradas</Heading>
       
       <Box w={['350px','1200px']} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={['none','lg']} p={[0,8]}>
          <Button onClick={onAdd} bg={'blue.400'} color={'white'} _hover={{bg: 'blue.500',}} size='sm'>NOVA LOJA</Button>
          <DataTable
                columns={columns}
                data={lojas}
                highlightOnHover
            />
       </Box>
    </Flex>
  )
}

export default Lojas