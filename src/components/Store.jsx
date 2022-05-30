import { Box, Container, Flex, Input, Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import StoreList from "./StoreList"

const Store = () => {
    const[storeItems, setStoreItems] = useState(null)
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setStoreItems(data);
            setLoading(false);
        })
        .catch(error => console.log(error.message));
    }, [])

    return (
        <Box bg='orange.100'>
        <Center>
        <Input display="block" w="60%" onChange={e => {
            let filtered = storeItems.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            console.log(filtered);
            setStoreItems(filtered);
        }} placeholder="Search" mt={4} />
        </Center>
        <Container maxW="95%">
        <Flex flexWrap="wrap" justify="space-between" align="center">
        {storeItems && (
            storeItems.map(item => {
                return <StoreList key={item.id} title={item.title} description={item.description.slice(0, 100)} image={item.image} price={item.price} />;
            })
        )}
        {loading && <Spinner />}
        </Flex>
        </Container>
        </Box>
    );
}

export default Store
