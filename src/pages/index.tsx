import React, { useEffect, useState } from 'react'
import { observer, useLocalObservable } from "mobx-react-lite";
import { Box, chakra, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { useStore } from "../store";
import { Footer } from "../components/Footer";
import { SubTitle, Title } from '../components/Home/styles';
import { Button } from "../components/Button";
import IopayDownload from '../components/Home/IopayDownload';
import { subgraphAPI } from "../lib/iotexGraphApi";
import BigNumber from "bignumber.js";
import { BigNumberState } from '../store/standard/BigNumberState';
import axios from 'axios';
import { numberWithCommas } from "../utils/helper";
import { Header } from "../components/Header";
import { Container } from 'src/components/Container';
import { NextPage } from "next";


const Index: NextPage = observer(() => {
    const {lang} = useStore()
    const store = useLocalObservable(() => ({
        stakers: 0,
        totalIotexStaked: new BigNumber(0),
        totalBurnDropStaked: 0,
        staked: new BigNumberState({}),
        bucketsAmount: 0,
        getAnalysisData: async () => {
            const response = await subgraphAPI.query({
                KV: [
                    {
                        where: {
                            key: {
                                _in: ["stakers", "totalIotexStaked"],
                            },
                        },
                    },
                    {
                        key: true,
                        value: true,
                    },
                ],
            });
            response.data.KV.forEach((item) => {
                store[`${item.key}`] = Number(item.value);
            });
            const {data} = await axios.post('/burndrop/getLatestStats')
            store.totalBurnDropStaked = numberWithCommas(Number(data['total_staked_amount']));
            store.bucketsAmount = numberWithCommas(Number(data['bucket_amount']))
        },
    }))

    useEffect(() => {
        store.getAnalysisData().then(() => {
            store.staked.setValue(store.totalIotexStaked)
        })
    }, [])

    return (
        <Container bg='black' textColor='white'>
            <Header />
            <Box maxWidth={{base: '90%', md: '90%', lg: '90%', xl: '90%', '2xl': '1554px'}}
                 mx={'auto'}>
                {/*   section 1*/}
                <Flex
                    bg={{base: 'none', lg: 'url(images/iopay/section1_bg.png)  no-repeat bottom'}}
                    bgSize={{lg: 'contain'}}
                    pb={{base: 0, lg: 28, xl: 32}}
                    mt={{base: 20, lg: 40}}
                    justifyContent={'space-between'}
                    flexDirection={{base: 'column-reverse', lg: 'row'}}
                    alignItems={'center'}
                >
                    <Image mt={{base: 10, lg: 0}} src='images/iopay/mobile.png' alt='mobile.png'
                           display={{base: 'none', lg: 'block'}}
                           width={{base: '100%', md: '80%', lg: '45%'}}/>
                    <Box width={{base: '100%', lg: '50%'}}>
                        <Title text={lang.t('iopay.section1.title')} whiteSpace={'pre-line'}
                               textAlign={{base: 'center', lg: 'unset'}}/>
                        <SubTitle text={lang.t('iopay.section1.subtitle')} textAlign={{base: 'center', lg: 'unset'}}
                                  mt={{base: 5, md: 0}}/>
                        <Image mt={{base: 20, lg: 0}} src='images/iopay/mobile.png' alt='mobile.png' mx={'auto'}
                               width={{base: '100%', md: '80%', lg: '45%'}}
                               display={{base: 'block', md: 'block', lg: 'none'}}/>
                        <Image src={'images/iopay/section1_bg.png'} display={{base: 'block', md: 'block', lg: 'none'}}/>
                        <IopayDownload/>
                    </Box>
                </Flex>

                {/*	section 2*/}
                <Box mt={{base: 20, lg: 0}}>
                    <Flex
                        flexDirection={{base: 'column-reverse', lg: 'row'}}
                        alignItems={'center'}
                    >
                        <Box mt={{base: 10, lg: 0}}>
                            <Title text={lang.t('iopay.section2.title')} whiteSpace={{base: 'pre-line', md: 'unset'}}/>
                            <Text fontSize={{base: '1.2rem', xl: '1.35rem', '2xl': '2.25rem'}} mt={5}
                                  dangerouslySetInnerHTML={{__html: lang.t("iopay.section2.subtitle")}}/>
                        </Box>
                        <Image src={'images/iopay/img_crosschain.png'} w={{base: '100%', md: '90%', lg: '45%'}} px={5}/>
                    </Flex>
                    <SimpleGrid columns={[1, 3]} spacing={5} mt={14} spacingY={14}>
                        <Flex flexDirection='column' justifyContent={'center'} alignItems={'center'}>
                            <Image src='images/iopay/icon_staker.png'/>
                            <Text
                                mt={2}
                                fontSize={{
                                    base: '2rem',
                                    md: '2rem',
                                    lg: '2.25rem',
                                    xl: '3rem',
                                    '2xl': '3.5rem'
                                }}>{numberWithCommas(store.stakers)}</Text>
                            <SubTitle fontWeight={400} text={'of Stakers'}/>
                        </Flex>
                        <Flex flexDirection='column' justifyContent={'center'} alignItems={'center'}>
                            <Image src='images/iopay/icon_stake.png'/>
                            <Text
                                mt={2}
                                textAlign={'center'}
                                fontSize={{
                                    base: '2rem',
                                    md: '2rem',
                                    lg: '2.25rem',
                                    xl: '3rem',
                                    '2xl': '3.5rem'
                                }}
                            >{numberWithCommas(store.staked.format)}</Text>
                            <SubTitle fontWeight={400} text='of IOTX Staked'/>
                        </Flex>
                        <Flex flexDirection='column' justifyContent={'center'} alignItems={'center'}>
                            <Image src='images/iopay/icon_APY.png'/>
                            <Text
                                mt={2}
                                fontSize={{
                                    base: '2rem',
                                    md: '2rem',
                                    lg: '2.25rem',
                                    xl: '3rem',
                                    '2xl': '3.5rem'
                                }}
                            >{'11%'}</Text>
                            <SubTitle fontWeight={400} text='APY'/>
                        </Flex>
                    </SimpleGrid>
                </Box>

                {/*section 3*/}
                <Box mt={{base: 40, md: 60}}>
                    <Flex
                        justifyContent={'space-between'}
                        flexDirection={{base: 'column', lg: 'row'}}
                        alignItems={'center'}
                    >
                        <Image src='images/iopay/img_rewards.png' w={{base: '100%', md: '70%', lg: '30%'}}/>
                        <Box mt={{base: 10, lg: 0}}>
                            <Text fontSize={{base: '2rem', md: '2rem', lg: '2.25rem', xl: '3.2rem', '2xl': '4rem'}}
                                  lineHeight={{lg: '3rem', xl: '4rem', '2xl': '5rem'}} fontWeight={'600'}
                                  dangerouslySetInnerHTML={{__html: lang.t('iopay.section3.title')}}/>
                            <SubTitle text={lang.t('iopay.section3.subtitle')} mt={5}/>
                            <SimpleGrid columns={[1, 2]} mt={10} spacingY={10}>
                                <Flex flexDirection='column' justifyContent={'center'} alignItems={'center'}>
                                    <Image src='images/iopay/icon_$iotx.png'/>
                                    <Text
                                        mt={2}
                                        fontSize={{
                                            base: '2rem',
                                            md: '2rem',
                                            lg: '2.25rem',
                                            xl: '3rem',
                                            '2xl': '3.5rem'
                                        }}>{numberWithCommas(store.totalBurnDropStaked)}</Text>
                                    <SubTitle fontWeight={400} text={' of IOTX Staked for Burn-Drop '}/>
                                </Flex>
                                <Flex flexDirection='column' justifyContent={'center'} alignItems={'center'}>
                                    <Image src='images/iopay/icon_bucket.png'/>
                                    <Text
                                        mt={2}
                                        fontSize={{
                                            base: '2rem',
                                            md: '2rem',
                                            lg: '2.25rem',
                                            xl: '3rem',
                                            '2xl': '3.5rem'
                                        }}>{numberWithCommas(store.bucketsAmount)}</Text>
                                    <SubTitle fontWeight={400} text={'Eligible Buckets'}/>
                                </Flex>
                            </SimpleGrid>
                        </Box>
                    </Flex>
                </Box>
                {/*	section4*/}
                <Box mt={{base: 40, md: 40}} as={Flex} flexDirection={'column'} alignItems={'center'}>
                    <Flex
                        flexDirection={{base: 'column-reverse', lg: 'row'}}
                        alignItems={'center'}
                    >
                        <Box mt={{base: 10, lg: 0}}>
                            <Title text={lang.t('iopay.section4.title')}/>
                            <SubTitle text={lang.t('iopay.section4.subtitle')} mt={5}/>
                        </Box>
                        <Image src='images/iopay/section4_right_bg.png' w={{base: '90%', md: '70%', lg: '35%'}}/>
                    </Flex>
                    <Image src='images/iopay/section4_bottom_bg.png' w={{base: '100%'}} px={{base: 0, lg: 20}} mt={10}
                           pb={16}/>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }} name={lang.t('download.iopay')} href={''} size={{base: '100%', xl: '40%'}}
                            boxHeight={{base: '3rem', md: '5rem', lg: '5rem', xl: '5rem'}}/>
                </Box>
            </Box>
            <Footer/>
        </Container>
    )
})

export default Index
