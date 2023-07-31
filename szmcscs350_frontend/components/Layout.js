import Head from "next/head";
import styles from "@/styles/Layout.module.css"
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({title, keywords, description, children}) {
    return (
        
        <div>
        <Head>
            <title>350. SzMcscs | {title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords}/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
        </Head>
        <Header />
        <div className={styles.container}>
        {children}
        </div>
        <Footer />
        </div>
    );
}

Layout.defaultProps={ 
    title: "honlap",
    description: "A 350. számú szent Márton cserkész csapat hivatalos honlapja",
    keywords: "szmcscs, 350.szmcscs, szent, márton, cserkész, csapat"
}
