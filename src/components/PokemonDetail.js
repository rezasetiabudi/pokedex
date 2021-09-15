import React from 'react';
import { Button, 
    Box, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    Image,
    Center,
    Grid,
    GridItem,
    Lorem
 } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/hooks';

export default function PokemonDetail({pokemon}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Grid
            onClick={onOpen}
            padding={10}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg="tomato">
                    <Box
                    width={[84, 100]}
                    height={[84, 100]}
                    filter="drop-shadow(0 0 12px #A4A4A4)"
                    >
                        <Image
                            src={pokemon.image}
                            layout="responsive"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </GridItem>
                <GridItem colSpan={2} bg="papayawhip">
                    <p>{pokemon.name}</p>
                </GridItem>
                <GridItem colSpan={2} bg="papayawhip">
                    <p>Pokemon Number #{pokemon.id}</p>
                </GridItem>
            </Grid>

            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Lorem count={2} />
                    </ModalBody>

                    <ModalFooter>
                        {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                        </Button> */}
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
