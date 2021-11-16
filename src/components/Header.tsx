import { observer } from "mobx-react-lite";

import { Box, Flex, Link } from "@chakra-ui/react";
import { helper } from "../utils/helper";

export const Header = observer(() => {
    return (
        <Box
            w="100%"
            pl={{ base: "0.5rem", md: "1.125rem" }}
            pr={{ base: "0.5rem", md: 0 }}
            py={{ base: "0.8rem", md: "1rem" }}
            boxSizing="border-box"
            position="absolute"
            top="0"
            left="0"
            zIndex="5"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Link href={"/"} _focus={{}}>
                    <Box w={{ base: "6rem", md: "8rem", "2xl": "12rem" }}>
                        <img src={helper.cdn('images/logo.png')} alt="" />
                    </Box>
                </Link>
                <Flex
                    flex="1"
                    alignItems="center"
                    justifyContent="flex-end"
                    display={{ base: "none", lg: "flex" }}
                />
            </Flex>
        </Box>
    )
})
