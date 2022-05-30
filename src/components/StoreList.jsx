import { Box, Heading, Image, Button, Flex } from "@chakra-ui/react"

const StoreList = ({image, title, price, description}) => {
    return (
        <Box w="30%" m={5} p={2.5}>
            <Box mb={2}>
                <Image display="block" w={24} src={image}  bg='orange.100' />
            </Box>
            <Flex justify="space-between" align="center" mb={2}>
                <Heading fontSize='3xl' fontWeight='medium'>{title}</Heading>
                <Heading fontSize='3xl' fontWeight='medium'>${price}</Heading>
            </Flex>
            <Heading fontSize='2xl' fontWeight='light' mb={2}>{description}</Heading>
            <Button display="block" w="100%" mt={5}>SHOP NOW</Button>
        </Box>
    )
}

export default StoreList
