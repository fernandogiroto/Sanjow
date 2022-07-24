import {Flex,Container,Spacer,Button} from '@chakra-ui/react'
import Image from 'next/image'
import { NextPage } from 'next';
import Link from 'next/link';

const MenuNavbar: NextPage = () => {
  return(
    <Container maxW='1200px'>
        <Flex minWidth='max-content' alignItems='center' gap='2' mt={2}>
            <Link href="/"><Image src="/images/logo.png" alt="Vercel Logo" width={85} height={75}  /></Link>
            <Spacer />
            <Button colorScheme='teal' size='sm'>
                <Link href="/users"> View Users</Link>
            </Button>
        </Flex>
    </Container>
  )}
export default MenuNavbar;