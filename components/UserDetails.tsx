import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Avatar,AvatarGroup,Button,Heading,Text,Link} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

export default function UserDetails(props){
  const {data} = props;
  const [userData, setCurrentItems] = useState([]);
  useEffect(() => {
    if(!data) return;
    setCurrentItems(data);
  }, [data]);  

  return(
    <div>
      {/* USER DATA HEADER DETAIL */}
      {userData.map(user=>{
        return(
          <div key={user.id}>
            <Heading as='h3' size='lg'>{user.name}</Heading>
            <Text fontSize='lg' mb={10}>Short Description of {user.name}</Text></div>
        )})
      }
      {/* USER DATA DETAILS */}  
      <TableContainer border='1px' borderColor='gray.200' boxShadow='md' p='6' rounded='md' bg='white'>
        <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Full Name</Th>
                <Th>Email </Th>
                <Th>Edit Profile</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData.map(user=>{
                return(
                  <Tr key={user.id}>
                    <Td><AvatarGroup spacing='1rem'><Avatar size='xl' name={user.name} src={"../" + user.avatar} /></AvatarGroup></Td>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td><Button colorScheme='teal' size='md'><Link href={"/users/update/" + user.id }>Update Profile</Link></Button></Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
      </TableContainer>
    </div>
  )
}