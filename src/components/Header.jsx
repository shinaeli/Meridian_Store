import { Box, Image, Flex, Heading, Text, Container } from "@chakra-ui/react"

const Header = () => {
    return (
        <Box bg='yellow.400'>
        <Container maxW="98%">
            <Flex justify="space-between" align="center">
                <Box w="40%" mx={5} px={5}>
                    <Heading mb={5} fontSize='5xl' fontWeight='bold'>Shop the goods</Heading>
                    <Text fontSize='3xl' fontWeight='medium'>Everything you could ever need to protect those private parts and take precision-grade care down there - all in one place.</Text>
                </Box>
                <Box w="40%" mx={5} px={5}>
                    <Image display="block" w="100%" src="/Images/20200811185702.jpg" />
                </Box>
            </Flex>
        </Container>
        </Box>
    )
}

export default Header
