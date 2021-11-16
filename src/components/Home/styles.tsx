import React from "react";
import {Text} from "@chakra-ui/react";

export const CONTAINER_MAX_WIDTH = {base: '90%', md: '80%', lg: '80%', '2xl': '1554px'}

export const TITLE_FONT = {base: '1.25rem', xl: '3.2rem', '2xl': '5.5rem'}

export const Title = ({text, ...props}) => {
	return (
		<Text fontSize={{base: '2.25rem',md:'2rem',lg:'2.25rem' ,xl: '3.2rem', '2xl': '4rem'}} lineHeight={{lg:'3rem',xl:'4rem','2xl':'5rem'}} fontWeight={'600'} {...props}>{text}</Text>
	)
}

export const SubTitle = ({text, ...props}) => {
	return (
		<Text fontSize={{base: '1.2rem', xl: '1.35rem', '2xl': '2.15rem'}}  {...props}>{text}</Text>
	)
}

export const Caption = ({text, ...props}) => {
	return (
		<Text fontWeight={'500'} fontSize={{xl: '1.25rem', '2xl': '1.5rem'}} opacity={'0.85'} {...props}>{text}</Text>
	)
}
