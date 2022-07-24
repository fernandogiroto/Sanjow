import { Heading, Container, Text} from '@chakra-ui/layout';
import { NextPage } from 'next';

const User: NextPage = () => {
return(
    <div>
        <Container maxW='1200px' mt={10}>
            <Heading as='h3' size='lg'>
                Edit User
            </Heading>
            <Text fontSize='lg' mb={10}>Edit User Description</Text>
        </Container>
    </div>
)}

export default User;