import { Box, Link, Flex, Image, Container } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa"

const Navbar = () => {
    return (
       <Box bg='blue.700'>
        <Container maxW="95%" p={2.5}>
        <Flex justify="space-between" align="center">
            <Box w="30%">
                <Flex justify="space-between" align="center">
                        <Link display="block" fontWeight='medium' fontSize='lg'>Shop</Link>
                        <Link display="block" fontWeight='medium' fontSize='lg'>Bundles</Link>
                        <Link display="block" fontWeight='medium' fontSize='lg'>How To</Link>
                        <Link display="block" fontWeight='medium' fontSize='lg'>Gift Card</Link>
                        <Link display="block" fontWeight='medium' fontSize='lg'>Blog</Link>
                </Flex>
            </Box>
            <Box w="15%">
                <Image display="block" src="Images/MeridianLogoWhite.png" alt="Meridian Logo" />
            </Box>
            <Box w="5%">
                <select name="currency" id="currencylist" bg='blue.900'>
                    <option value="dollar">USD</option>
                    <option value="euro">EUR</option>
                    <option value="naira">NGN</option>
                    <option value="canadian dollar">CAD</option>
                </select>
            </Box>
            <Box w="5%">
                <select name="language" id="languagelist" bg='blue.900'>
                    <option value="arabic">AR</option>
                    <option value="english">EN</option>
                    <option value="spanish">ES</option>
                    <option value="french">FR</option>
                    <option value="portuguese">PT</option>
                    <option value="italian">IT</option>
                </select>
            </Box>
            <Box w="10%">
                <FaShoppingCart />
            </Box>
        </Flex>
        </Container>
       </Box>
    )
}

export default Navbar
