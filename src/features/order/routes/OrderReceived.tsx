
import { Button } from "@/components/Elements"
import { Box, Heading, Icon, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { FiCheckCircle, FiCheck } from "react-icons/fi"
import { useNavigate } from "react-router-dom"


export const OrderReceived = () => {
    const navigate = useNavigate()

    return (
        <Box textAlign="center" py={10} px={6}>
            <Icon as={FiCheckCircle} boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Beställning mottagen
            </Heading>
            <Text color={'gray.500'}>
                Vad händer nu?
            </Text>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={FiCheck} color="green.400" />
                    Vi skickar en förfrågan om godkännande till individen
                </ListItem>
                <ListItem>
                    <ListIcon as={FiCheck} color="green.400" />
                    Kontrollen påbörjas så fort godkännandets har inhämtats
                </ListItem>
                <ListItem>
                    <ListIcon as={FiCheck} color="green.400" />
                    Vi skickar ett mail till dig när rapporten är klar!
                </ListItem>
            </List>

            <Button onClick={() => navigate('/')}>
                Stäng
            </Button>
        </Box>
    )
}