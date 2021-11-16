import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
          <title>IoPay - Official IOTEX crypto wallet for IOTX Token. Get It Here</title>
          <meta name="description" content="IoPay provdies most secure wallet for IOTX users. IOTEX is blockchain that powers ecosystemy of smart devices. Get wallet here...." />
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
