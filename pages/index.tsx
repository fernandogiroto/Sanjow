import { Heading,Box,Button,Text,Image,Grid,GridItem,Container} from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  // State

  // Hooks

  // Handlers

  // Template
  return (
    <div>
      <Container maxW='1200px' mt={10}>
        <Grid templateColumns='repeat(2, 1fr)' gap={2}>
          <GridItem w='100%'>
            <Link href="/"><Image src="/images/ecommerce.gif" alt="San Jow Logo" width={600} height={440}  /></Link>
          </GridItem>
          <GridItem w='100%'  mt={10}>
            <Heading as='h3' size='lg'>Who are we?</Heading>
              <Box width="80%">
                <Text fontSize='lg' textAlign='justify' mb={10} mt={5}> We are a European e-commerce group specialized in digital services. At Sanjow, we make admin stuff easy and we rock at it! Our businesses are mainly focused on the UK but we are moving overseas. Our brand's name comes from the contraction of support in Japanese ("sanjo") and flow. It is part of our brand's DNA to assist individuals and businesses with our turnkey online solutions.</Text>
              </Box>
              <Button colorScheme='teal' size='md'>Read More</Button>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
