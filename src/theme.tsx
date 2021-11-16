import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
    untitled: 'Untitled Sans, apple-system, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
    body: "Montserrat, sans-serif",
    heading: 'Montserrat, sans-serif'
}

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
})

const theme = extendTheme({
    colors: {
        black: '#16161D',
        btnBgColor: "linear-gradient(92.18deg, #44FFB2 19.21%, #00D3DC 105.06%)",
        btnTextColor: '#1C1F24'
    },
    fonts,
    breakpoints,
    styles: {
        global: {
            'html, #__next': {
                height: '100%',
                padding: 0,
                background: "#110F1C"
            },
            body: {
                overflowY: 'scroll',
                margin: 0,
                color: "white",
                background: "rgba(0,0,0,0)"
            },
            '.emailInput': {
                backgroundColor: 'transparent',
                width: '100%',
                height: '100%',
                flex: 1,
                paddingLeft: '0.5rem',
                outline: 'none'
            },
            '.emainBtn': {
                fontWeight: "600",
                fontFamily: 'Montserrat'
            },
            '.commonBtnBox': {
                position: "relative",
                display: "block",
                '.commonBtn': {
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    marginTop: "0px",
                    transition: 'margin 0.5s',
                    '&:hover': {
                        marginTop: '-5px',
                        marginLeft: '5px'
                    }
                },
            },
        }
    }
})

export default theme
