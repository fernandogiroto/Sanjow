import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Avatar, AvatarGroup,Button} from '@chakra-ui/react'
import { NextPage } from 'next';

const UserDetails: NextPage = () => {
  return(
    <div>
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
              <Tr>
                <Td><AvatarGroup spacing='1rem'><Avatar size='xl' name='Fernando Giroto' src='../images/fernandogiroto.png' /></AvatarGroup></Td>
                <Td>Fernando Giroto</Td>
                <Td>giroto.luis@gmail.com</Td>
                <Td><Button colorScheme='teal' size='md'>Edit Profile</Button></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
  )}
export default UserDetails;