import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-poppins">
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
