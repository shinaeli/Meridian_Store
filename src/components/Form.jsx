import { Box, Text, Heading, Input, Button, Flex } from "@chakra-ui/react"
import { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter  } from 'react-icons/fa'




const Form = () => {
    const[email, setEmail] = useState()

    return (
        <Box w="35%" m={5} p={2.5}>
           <Heading mb={4}>Keep in touch</Heading>
           <Box mb={4}>
               <Input display="inline-block" w="60%" type='email' placeholder="Email address" onChange={e => setEmail(e.target.value)} />
               <Button display="inline-block" w="25%" mb={1}>SIGN UP</Button>
           </Box>
           <Text>Sign up to our mailing list and stay in the loop for product tips and offers. You can unsubscribe at any time.</Text>
           <Box w="15%" mt={6}>
            <Flex justify="space-between" align="center">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
            </Flex>
           </Box>
           </Box>
    )
}

export default Form
