import { Container, Icon, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons";

function ExchangeSupport() {
    const tokenForamt = [
        {
            name: 'Native IOTX',
            format: 'Native',
            description: 'the Native token on IoTeX network',
            usage: 'Most used. Staking. DeFi on IoTeX Network'
        },
        {
            name: 'IOTX-E',
            format: 'ERC20 (Ethereum)',
            description: 'IOTX in ERC20 format on Ethereum Network.',
            usage: 'Used in prior to IoTeX mainnet launched. Now used in certain Exchanges like Coinbase.'
        },
        {
            name: 'IOTX on BSC ',
            format: 'IOTX on BSC ',
            description: 'Binance Pegged IOTX',
            usage: 'Deposit to Binance and withdraw to BSC network. Can be used on DeFi Apps on BSC network'
        },
        {
            name: 'Wrapped IOTX (WIOTX)',
            format: 'XRC20 (IoTeX Network)',
            description: 'Wrapped version of IOTX on IoTeX network. ',
            usage: 'Loved by Dapps on IoTeX network, like mimoswap.'
        },
        {
            name: 'CrossChain IOTX (CIOTX)',
            format: 'XRC20 (IoTeX Network)\n' +
                'ERC20 (Polygon)\n' +
                'BEP20 (BSC)',
            description: 'Wrapped IOTX for Crosschain to other networks.',
            usage: 'Traded on Quickswap on Polygon.'
        }];
    const exchangesSupports = [
        {
            exchange: 'Binance',
            nativeIOTX: true,
            IOTX_E: 'Deposit Only',
            IOTX_b: true,
            WIOTX: false,
            CIOTX: false
        },{
            exchange: 'Coinbase',
            nativeIOTX: false,
            IOTX_E: true,
            IOTX_b: false,
            WIOTX: false,
            CIOTX: false
        },
        {
            exchange: 'Huobi',
            nativeIOTX: true,
            IOTX_E: false,
            IOTX_b: false,
            WIOTX: false,
            CIOTX: false
        },
        {
            exchange: 'Upbit',
            nativeIOTX: true,
            IOTX_E: false,
            IOTX_b: false,
            WIOTX: false,
            CIOTX: false
        },
        {
            exchange: 'Bittrex',
            nativeIOTX: false,
            IOTX_E: true,
            IOTX_b: false,
            WIOTX: false,
            CIOTX: false
        },{
            exchange: 'Kucoin',
            nativeIOTX: true,
            IOTX_E: false,
            IOTX_b: false,
            WIOTX: false,
            CIOTX: false
        },{
            exchange: 'Gate',
            nativeIOTX: true,
            IOTX_E: false,
            IOTX_b: false,
            WIOTX: false,
            CIOTX: false
        },{
            exchange: 'MXC',
            nativeIOTX: true,
            IOTX_E: false,
            IOTX_b: false,
            WIOTX: false,
            CIOTX: false
        }];

    return <Container>
        <Table variant="simple" w="100%" fontWeight='light' mt={5}>
            <TableCaption placement='top' fontSize='xl' fontWeight='light'>
                Different Formats and Networks of IOTX Tokens Supported by Exchanges
                <Text textAlign='left' mt={2} fontSize='sm' fontWeight='light'>Notice:  The list is based on the best knowledge available on the exchanges websites. Please
                    always check their help center for the most accurate information. </Text>
                <Text fontSize='sm' fontWeight='light' float='right'>Nov 14th, 2021</Text>
            </TableCaption>
            <Thead>
                <Tr>
                    <Th></Th>
                    <Th>Native IOTX</Th>
                    <Th>IOTX-E</Th>
                    <Th>IOTX on BSC</Th>
                    <Th>WIOTX</Th>
                    <Th>CIOTX</Th>
                </Tr>
            </Thead>
            <Tbody>
                {exchangesSupports.map((i, index) => (<Tr key={`tokens-${index}`}>
                    <Td><Text fontWeight='normal'>{i.exchange}</Text></Td>
                    <Td>{i.nativeIOTX?<Icon as={CheckCircleIcon} w={4} h={4} color="green" />:<Icon as={NotAllowedIcon} w={4} h={4} color="gray" />}</Td>
                    <Td>{i.IOTX_E === true?<Icon as={CheckCircleIcon} w={4} h={4} color="green" />:(i.IOTX_E?i.IOTX_E:<Icon as={NotAllowedIcon} w={4} h={4} color="gray" />)}</Td>
                    <Td>{i.IOTX_b?<Icon as={CheckCircleIcon} w={4} h={4} color="green" />:<Icon as={NotAllowedIcon} w={4} h={4} color="gray" />}</Td>
                    <Td>{i.WIOTX?<Icon as={CheckCircleIcon} w={4} h={4} color="green" />:<Icon as={NotAllowedIcon} w={4} h={4} color="gray" />}</Td>
                    <Td>{i.CIOTX?<Icon as={CheckCircleIcon} w={4} h={4} color="green" />:<Icon as={NotAllowedIcon} w={4} h={4} color="gray" />}</Td>
                </Tr>))}
            </Tbody>
        </Table>
        <Table variant="simple" w="100%" fontWeight='light' my={10}>
            <TableCaption placement='top' fontSize='xl' fontWeight='light'>Different Formats of IOTX Tokens.</TableCaption>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Format and Network</Th>
                    <Th>Description</Th>
                    <Th>Usage</Th>
                </Tr>
            </Thead>
            <Tbody>
                {tokenForamt.map((i, index) => (<Tr key={`tokens-${index}`}>
                    <Td><Text fontWeight='normal'>{i.name}</Text></Td>
                    <Td>{i.format}</Td>
                    <Td>{i.description}</Td>
                    <Td>{i.usage}</Td>
                </Tr>))}
            </Tbody>
        </Table>
    </Container>
}

export default ExchangeSupport
