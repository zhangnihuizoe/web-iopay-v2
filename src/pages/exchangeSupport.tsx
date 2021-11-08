import { Container, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

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
            nativeIOTX: 'Y',
            IOTX_E: 'Deposit Only',
            IOTX_b: 'Y',
            WIOTX: 'N',
            CIOTX: 'N'
        },{
            exchange: 'Coinbase',
            nativeIOTX: 'N',
            IOTX_E: 'Y',
            IOTX_b: 'N',
            WIOTX: 'N',
            CIOTX: 'N'
        },
        {
            exchange: 'Huobi',
            nativeIOTX: 'Y',
            IOTX_E: 'N',
            IOTX_b: 'N',
            WIOTX: 'N',
            CIOTX: 'N'
        },
        {
            exchange: 'Upbit',
            nativeIOTX: 'Y',
            IOTX_E: 'N',
            IOTX_b: 'N',
            WIOTX: 'N',
            CIOTX: 'N'
        },
        {
            exchange: 'Bittrex',
            nativeIOTX: 'N',
            IOTX_E: 'Y',
            IOTX_b: 'N',
            WIOTX: 'N',
            CIOTX: 'N'
        },{
            exchange: 'Kucoin',
            nativeIOTX: 'Y',
            IOTX_E: 'N',
            IOTX_b: 'N',
            WIOTX: 'N',
            CIOTX: 'N'
        },{
            exchange: 'Gate',
            nativeIOTX: 'Y',
            IOTX_E: 'N',
            IOTX_b: 'N',
            WIOTX: 'N',
            CIOTX: 'N'
        },{
            exchange: 'MXC',
            nativeIOTX: 'Y',
            IOTX_E: 'N',
            IOTX_b: 'N',
            WIOTX: 'N',
            CIOTX: 'N'
        },{
            exchange: 'OKex',
            nativeIOTX: 'N',
            IOTX_E: 'N',
            IOTX_b: 'N',
            WIOTX: 'N',
            CIOTX: 'N'
        }];

    return <Container>
        <Table variant="simple" w="100%" fontWeight='light' mt={5}>
            <TableCaption placement='top' fontSize='xl' fontWeight='light'>Overview of exchanges supporting IOTX tokens</TableCaption>
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

        <Table variant="simple" w="100%" fontWeight='light' my={10}>
            <TableCaption placement='top' fontSize='xl' fontWeight='light'>Exchanges support different formats and networks on IOTX</TableCaption>
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
                    <Td>{i.nativeIOTX}</Td>
                    <Td>{i.IOTX_E}</Td>
                    <Td>{i.IOTX_b}</Td>
                    <Td>{i.WIOTX}</Td>
                    <Td>{i.CIOTX}</Td>
                </Tr>))}
            </Tbody>
        </Table>
    </Container>
}

export default ExchangeSupport
