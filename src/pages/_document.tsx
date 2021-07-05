import Document, { Html, Head, Main, NextScript} from 'next/document';
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                   {/* Do not use title element here, the better option its use in _app component */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}