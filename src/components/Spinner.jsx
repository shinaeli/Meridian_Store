import { Box, Center, Image } from "@chakra-ui/react"

const Spinner = () => {
    return (
        <Box w="100%">
            <Center>
                <Image display="block" src="Images/spinner.gif" w='3%' alt="Loading..." />
            </Center>
        </Box>
    )
}

export default Spinner
