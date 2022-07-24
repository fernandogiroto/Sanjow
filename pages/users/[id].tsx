import { Heading, Container, Text} from '@chakra-ui/layout';
import { NextPage } from 'next';
import UserDetails from '../../components/UserDetails';
import {useRouter,} from 'next/router';
import { useEffect, useState } from 'react';

const User: NextPage = () => {

    const router = useRouter();
    const [user, setUser] = useState([])
        useEffect(()=>{
        if(!router.isReady) return;
        const id = router.query.id
   
        fetch(`http://localhost:3000/api/users/${id}`)
        .then(response => response.json()
        .then(data=>{
            setUser(data.filter((d) => d.id == id ))   
        })
    )}, [router.isReady]);

return(
    
    <div>
        <Container maxW='1200px' mt={10}>
            <UserDetails data={user}></UserDetails>
        </Container>
    </div>
)}

export default User;