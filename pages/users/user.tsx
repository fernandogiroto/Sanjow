import { Heading, Container, Text} from '@chakra-ui/layout';
import { NextPage } from 'next';
import MenuNavbar from '../../components/MenuNavbar';
import UserDetails from '../../components/UserDetails';
import {useRouter} from 'next/router';

const User: NextPage = () => {
const router =  useRouter();  
const id = router.query.id;
return(
    <div>
        <Container maxW='1200px' mt={10}>
            <Heading as='h3' size='lg'>
                @NameOfTheUser
            </Heading>
            <Text fontSize='lg' mb={10}>Short Description of @NameOfTheUser</Text>
            <UserDetails></UserDetails>
        </Container>
    </div>
)}

export default User;