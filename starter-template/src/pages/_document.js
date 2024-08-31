import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
        <Head>

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            {/* <link
          rel="stylesheet"
          href="../../../../dist/css/bootstrap.min.css"
        /> */}

            {/* <link
          rel="stylesheet"
          href=".//globals.css"
        /> */}
            <script
                src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossOrigin="anonymous" async
            ></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGaU5Tw6Wc4GIy76P1Lt8JH2xr"
                crossOrigin="anonymous" async
            ></script>
            <script
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-ChfqqxuZUCnJSK3+djyKjLhcHYiirfHf+L6M5RQjtiYYfRRaIdRdftMUI8dCqldw"
                crossOrigin="anonymous" async
            ></script>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script
                src="https://mediafiles.botpress.cloud/f937f625-82c8-44a4-a0d0-e2e701e60a09/webchat/v2.1/config.js"></script>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
