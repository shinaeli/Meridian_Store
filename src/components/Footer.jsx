import { Box, Flex, Container, Link } from "@chakra-ui/react"
import Form from "./Form"


const Footer = () => {

    return (
       <Box bg='pink.500'>
           <Container maxW="98%" p={10}>
           <Flex flexWrap="wrap" justify="space-between" align="start">
            <Form />
            <Box w="25%" m={5} p={2.5}>
                <Link display="block" mb={2.5}>Customer Support</Link>
                <Link display="block" mb={2.5}>Shop Now</Link>
                <Link display="block" mb={2.5}>Press Inquiries</Link>
                <Link display="block" mb={2.5}>Wholesale Programme</Link>
                <Link display="block" mb={2.5}>Privacy Policy</Link>
                <Link display="block" mb={2.5}>Terms Of Service</Link>
                <Link display="block" mb={2.5}>Accessibility</Link>
            </Box>
            <Box w="25%" m={5} p={2.5}>
                <Link display="block" mb={2.5}>The Trimmer</Link>
                <Link display="block" mb={2.5}>The Spray</Link>
                <Link display="block" mb={2.5}>The Complete Package</Link>
                <Link display="block" mb={2.5}>Gift Card</Link>
            </Box>
            </Flex>
            </Container>
       </Box>
    )
}

export default Footer
