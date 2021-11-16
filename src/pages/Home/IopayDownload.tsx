import {Box, chakra, Flex, Image, SimpleGrid, Text} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";
import React, {useEffect, useState} from "react";
import {getIopayDownloadUrl, publicConfig} from "../../config/public";

const MobileItem = props => <Image cursor="pointer" alt="" {...props}
                                   bgColor='linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 133.06%)'/>
const DesktopItem = ({href, ...restProps}) => <chakra.a href={href} display="flex" alignItems="center"
                                                        justifyContent="center" cursor="pointer"
                                                        bg="linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)"
                                                        boxSizing="border-box"
                                                        w={{
	                                                        base: '160px',
	                                                        md: '180px',
	                                                        lg: '160px',
	                                                        xl: '147.67px',
	                                                        '2xl':'160px'
                                                        }}
                                                        h={{base: '48px', md: '54px', lg: '48px'}}
                                                        textAlign="center"
                                                        fontFamily="Roboto"
                                                        font-weight="bold"
                                                        fontSize="20px"
                                                        borderRadius="4px" {...restProps} />
const IopayDownload = observer((props) => {
	const {lang} = useStore()
	const [packages, setPackages] = useState<{ mac: string; linux: string; window: string; }>()
	useEffect(() => {
		getIopayDownloadUrl().then((res) => {
			setPackages(res)
		})

	}, [])
	return (
		<Box {...props}>
			<Box mt='5'>
				<Text fontSize={{base: '1.2rem', xl: '1.55rem', '2xl': '1.75rem'}} opacity={0.6}>{lang.t(`iopay.mobile`)}</Text>
				<SimpleGrid columns={[2, 2, 3, 2, 4]} mt="16px" spacingY={5} spacingX={{xl:2}} >
					<chakra.a href={publicConfig.IOPAY_GOOGLE_DOWNLOAD}>
						<MobileItem
							w={{base: '160px', md: '180px', lg: '160px', xl: '160px'}}
							src="images/iopay/btn_google_play.png"/>
					</chakra.a>
					<chakra.a href={publicConfig.IOPAY_IOS_DOWNLOAD}>
						<MobileItem
							w={{
								base: '160px',
								md: '180px',
								lg: '160px',
								xl: '160px'
							}}
							src="/images/iopay/btn_app_store.png"/>
					</chakra.a>

					<chakra.a href={publicConfig.IOPAY_APK_DOWNLOAD}>
						<MobileItem
							w={{
								base: '160px',
								md: '180px',
								lg: '160px',
								xl: '160px'
							}}
							src="/images/iopay/btn_apk.png"/></chakra.a>
					<chakra.a href={publicConfig.IOPAY_MIRROR_DOWNLOAD}
					><MobileItem
						w={{base: '48px', md: '54px', lg: '48px'}}
						h={{base: '48px', md: '54px', lg: '48px'}}
						src="/images/iopay/btn_mirror.png"/>
					</chakra.a>
				</SimpleGrid>
			</Box>
			<Box mt="5">
				<Text fontSize={{base: '1.2rem', xl: '1.55rem', '2xl': '1.75rem'}}
				      opacity={0.6}>{lang.t(`iopay.desktop`)}</Text>
				<SimpleGrid columns={[2, 2, 3, 2, 4]} mt="16px"  spacingY={5} spacingX={{xl:2}}>
					<DesktopItem href={packages?.mac}>
						<Image w="32px" h="32px" mr="8px" src="/images/iopay/iopay_mac.svg" alt=""/>MacOS
					</DesktopItem>
					<DesktopItem href={packages?.window}>
						<Image w="32px" h="32px" mr="8px" src="/images/iopay/iopay_windows.svg" alt=""/>Windows
					</DesktopItem>
					<DesktopItem
					             href={packages?.linux}>
						<Image w="32px" h="32px" mr="8px" src="/images/iopay/iopay_linux.svg" alt=""/>Linux
					</DesktopItem>
					<Box
						w={{base: '48px', md: '54px', lg: '48px'}}
						h={{base: '48px', md: '54px', lg: '48px'}}
					>

					</Box>
				</SimpleGrid>
			</Box>
			<Text>
				<Text></Text>
				<Text></Text>
			</Text>
		</Box>
	)
})

export default IopayDownload
