import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import styles from '@/styles/Segedlet.module.css'
import dynamic from 'next/dynamic';

import { API_URL } from '@/config';
import { BsDownload, BsFiletypeJpg, BsFiletypePdf, BsFiletypeGif,  BsFiletypePng, BsFiletypePpt, BsFiletypePptx , BsFiletypeDoc, BsFiletypeDocx, BsFiletypeXls, BsFiletypeXlsx } from "react-icons/bs"

export default function Segedlet(lista) {
    const Segedsav = dynamic(() => import('@/components/Seged'), {
        ssr: false,
      });
      
    let segedek = []
    lista.lista.forEach(el=> { 
        let icon;
        switch (el.attributes.segitseg.data.attributes.ext.split(".")[1]){
            case "jpg": icon=<BsFiletypeJpg/>; break;
            case "png": icon=<BsFiletypePng/>; break;
            case "gif": icon=<BsFiletypeGif/>; break;
            case "pdf": icon=<BsFiletypePdf/>; break;
            case "doc": icon=<BsFiletypeDoc/>; break;
            case "docx": icon=<BsFiletypeDocx/>; break;
            case "ppt": icon=<BsFiletypePpt/>; break;
            case "pptx": icon=<BsFiletypePptx/>; break;
            case "xls": icon=<BsFiletypeXls/>; break;
            case "xlsx": icon=<BsFiletypeXlsx/>; break;
        }
            var temp =[
                {
                url: el.attributes.segitseg.data.attributes.url.split("upload")[0] + `upload/fl_attachment:${el.attributes.temakor}` + el.attributes.segitseg.data.attributes.url.split("upload")[1],
                icon: icon,
                temakor: el.attributes.temakor,
                name: el.attributes.nev,
                feltoltve: el.attributes.createdAt,
                tipus: el.attributes.tipus,
                vezetoknek: el.attributes.vezetoknek,
                }
            ]
            segedek=segedek.concat(temp)
        });
    return (
        <Layout>
            <Segedsav />
            <div id='PopupWindow' className="nonvisible"></div>
            <div className={styles.oldalcím}>Segédanyagok</div>
            <div className={styles.táblázat}>
                <div className={[styles.sor,styles.elso].join(" ")}>
                    <icon className={styles.letöltés}>Letöltés</icon>
                    <icon className={styles.icon}>Ikon</icon>
                    <type className={styles.tipus}>Fájltípus</type>
                    <neve className={styles.nev}>Név</neve>
                    <temakor className={styles.temakor}>Téma</temakor>
                    <feltoltve className={styles.feltoltes}>Feltöltve</feltoltve>
                </div>
                {segedek.map((seged, index)=>(
                    <div className={styles.sor}>
                        <Link href={seged.url} className={[styles.letöltés, styles.letöltésicon].join(" ")}><BsDownload /></Link>
                        <icon className={styles.icon}>{seged.icon}</icon>
                        <type className={styles.tipus}>{seged.tipus}</type>
                        <neve className={styles.nev}>{seged.name}</neve>
                        <temakor className={styles.temakor}>{seged.temakor}</temakor>
                        <feltoltve className={styles.feltoltes}>{new Date(seged.feltoltve).toLocaleDateString('hu')}</feltoltve>
                        {segedek[index+1]? <hr className={styles.hr}/> : ""}
                    </div>
                ))}
                
            </div>
        </Layout>
    );
}

export async function getStaticProps(){


    const res = await fetch(`${API_URL}api/segedanyags?populate=*`)
    const nyers = await res.json()
    const lista = await nyers.data

    
    return{
        props:{lista},
        revalidate: 1,
    }
}

// jpg, pdf, png, ppt, docx, doc, gif, xls
// BsFiletypeJpg, BsFiletypePdf, BsFiletypePng, BsFiletypePpt, BsFiletypePptx , BsFiletypeDoc, BsFiletypeDocx, BiSolidFileGif, BsFiletypeXls, BsFiletypeXlsx 