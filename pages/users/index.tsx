import { Heading, Container, Text,Box } from '@chakra-ui/layout';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import TableUsers from '../../components/TableUsers';

const Users: NextPage = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/api/users/list')
        .then(response => response.json()
        .then(data=>{setUsers(data);
        })
    )},[]);
    return(
        <div>
            <Container maxW='1200px' mt={10}>
                <Heading as='h3' size='lg'>
                    List of Users
                </Heading>
                <Box width="80%">
                    <Text fontSize='lg' mb={10} mt={2}>These are the candidates who have applied to work at Sanjow. The candidates below have outstanding performance skills and advanced knowledge of general technology and professional knowledge of React and NextJs.</Text>
                </Box>
                <TableUsers data={users}></TableUsers>
            </Container>
        </div>
    )
}
export default Users;