import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="leading-7 tracking-wide font-extralight font-montserrat text-custom_light">
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
