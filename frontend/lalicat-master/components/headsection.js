import Head from "next/head";

const Headsection = ({title = '', keywords = '', description = '', opImgURL = ''})  => {
    return (
        <>
      <Head>
       <title>{title}</title>
       <meta charSet="utf-8"/>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="images/common/favicon.png" sizes="32x32" />
       <meta name="keywords" content={keywords} />
       <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={opImgURL} />
      </Head>
        </>
    )
}

export default Headsection