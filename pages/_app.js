import "../public/styles.css";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Auth0 DSE Sample Apps</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width,initial-scale=1' />
                <meta name="description" content="Auth0 DSE Sample Applications" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
                <meta property="og:site_name" content="Auth0 DSE Sample Applications" />
                <meta property="og:type" content="site" />
                <meta property="og:title" content="Auth0 DSE Sample Applications" />
                <meta property="og:description" content="A set of sample apps and tenant settings for Auth0 DSEs" />
                <meta property="og:url" content="https://dse.rosnovsky.us" />
                <meta property="og:image" content="https://dse.rosnovsky.us/og.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Auth0 DSE Sample Applications" />
                <meta name="twitter:description" content="A set of sample apps and tenant settings for Auth0 DSEs" />
                <meta name="twitter:url" content="https://dse.rosnovsky.us" />
                <meta name="twitter:image" content="https://dse.rosnovsky.us/og.png" />
                <meta name="twitter:label1" content="By" />
                <meta name="twitter:data1" content="Art Rosnovsky" />
                <meta property="og:image:width" content="894" />
                <meta property="og:image:height" content="483" />
            </Head>
            <Component {...pageProps} />
        </>
    )}
