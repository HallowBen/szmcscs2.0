import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useState } from 'react';
import { API_URL } from '@/config'
import styles from '@/styles/Csapatrol.module.css'

export default function csapatrol({ photos, orsok, vezetoseg, csapatletszam, taborok, cspk }) {
    const a = photos.data[0].attributes.photo.data;
    let orsarray = []


    orsok.forEach(function(el, index) {
        var temp =[
            {
            id: index,
            nev: el.attributes.orsneve,
            vezeto: el.attributes.vezetosegs.data[0].attributes.nev,
            tarsvezeto: el.attributes.vezetosegs.data[1]? el.attributes.vezetosegs.data[1].attributes.nev : "",
            letszam: el.attributes.letszam,
            }
        ]
        orsarray=orsarray.concat(temp)
    })

    let taboraarray = []


    taborok.forEach(function(el, index) {
        var temp =[
            {
            id: index,
            hely: el.attributes.Hol,
            datum: el.attributes.Mikor,
            }
        ]
        taboraarray=taboraarray.concat(temp)
    })
    let cspkarray = []


    cspk.forEach(function(el, index) {
        var temp =[
            {
            id: index,
            nev: el.attributes.nev,
            mikor: el.attributes.mikortol,
            meddig: el.attributes.meddig,
            }
        ]
        cspkarray=cspkarray.concat(temp)
    })

    let photoarray= []
    a.forEach(function(el, index) {
        if(el.attributes.formats.medium){
            var temp =[
                {
                id: index,
                url: el.attributes.formats.medium.url,
                name: el.attributes.name,
                width: el.attributes.formats.medium.width,
                height: el.attributes.formats.medium.height,
                style: [styles.kep, styles[(el.attributes.name).split(".")[0]]].join(" ")
                }
            ]
            photoarray=photoarray.concat(temp)
        }
        else{
            var temp =[
                {
                id: index,
                url: el.attributes.formats.small.url,
                name: el.attributes.name,
                width: el.attributes.formats.small.width,
                height: el.attributes.formats.small.height,
                style: [styles.kep, styles[(el.attributes.name).split(".")[0]]].join(" ")
                }
            ]
            photoarray=photoarray.concat(temp)
        }
    });




    return (
        
        <Layout>
            <div className={styles.container}>
                <div className={styles.oldalcim}>A csapat rövid története</div>
                    <div className={[styles.elso, styles.hasab].join(" ")}>
                        <div className={styles.szoveg}>
                            <div className={styles.alcim}>A kezdetek 1928-tól</div>
                            <div className={styles.bekezdes}>
                                „Csapatunk a 48. Rákóczi Ferenc Cserkészcsapat védőszárnyai alatt alakult meg, mint annak kisraja 1925 szeptemberében... 1928. január 10-én a Kerületi Intéző Bizottság jóváhagyásával megalakult az önálló szervezőtestület... Nyári nagytáboraink: 1926-ban Kenyeriben (10 napos), 1927-ben Répceszentgyörgyön (3 hetes), 1928-ban rajki erdőben (18 napos) és 1929-ben Szilvásváradon (20 napos). Minden alkalommal testvércsapatunk a 48. Rákóczi csapat táborában, de önálló rajműködéssel. A csapat jelenlegi létszáma: 34 fő, melyből 14 fiú kiscserkész, 20 pedig jelölt.” Ezen összeállítás a MI TÍZ ÉVÜNK 1920-1930. jubileumi emlékkönyvben található, Herold M. István írásában. Az emlékkönyvet dr. Szendy László apát-plébános szerkesztette. A cserkészcsapat 1946-ig az általános iskolai rendszer bevezetéséig működött.
                            </div>
                        </div>
                        {photoarray.map((img) => (
                            img.id===0 ? <Image className={img.style} src={img.url} width={img.width} height={img.height} /> : ""
                        ))}
                    </div>

                    <div className={[styles.masodik, styles.hasab].join(" ")}>
                        <div className={styles.szoveg}>
                            <div className={styles.alcim}>Az újraalakulás</div>
                            <div className={styles.bekezdes}>
                                1989-ben a Szent Márton Plébánia káplánja Dóka Ferenc kezdeményezte a cserkészcsapat alakítását. A plébánia támogatta a kezdeményezést és a szervező káplán lett a csapat megbízott parancsnoka. A csapat nevét az egyházközség védőszentjétől vette és a korábbi kiscserkészcsapat utódjaként kezdte meg a működését. 1989 novemberében tett a fiúkból álló csapat fogadalmat. Az első csapattábor 1990 nyarán, Nádasdon volt. 1991 ősze folyamán áthelyezés miatt parancsnokváltásra került sor. Bundics Antal cserkésztiszt lett a parancsnok.
                                1993-ban Bundics Antalt szolgálata Rómába szólította. A csapat két segédtisztje sem tudott töretlen munkát végezni. 1993-ban a csapat élére Aigner Géza káplán került, aki még nem rendelkezett cserkészismeretekkel, illetve az őrsvezetők közül is többen iskolát váltottak, s nem tudtak cserkészmunkát végezni. Két évre volt szükség, hogy az új parancsnok Aigner Géza képesítést szerezzen, és hivatali elfoglaltsága mellett a cserkészettel megismerkedjen. 1994-től új jelöltek felvétele történt a csapathoz... 1996-ban a Szent Márton Év keretében Velemben táborozott a cserkészcsapat másik két Szent Márton nevét viselő csapattal.
                                1997-től újabb őrsvezetői képesítések megszerzésével tovább nőt a cserkészmunka minősége. 1998-ban főiskolás korú fiatalok vezetésével új lendületet vett a cserkészcsapat munkája.
                            </div>
                        </div>
                        {photoarray.map((img) => (
                            img.id===1 ? <Image className={img.style} src={img.url} width={img.width} height={img.height} /> : ""
                        ))}
                    </div>
                <div className={[styles.harmadik, styles.hasab].join(" ")}>
                <div className={styles.szoveg}>
                    <div className={styles.alcim}>Jelen</div>
                        <div className={styles.bekezdes}>Ez a színvonalas munka, napjainkig is tart. Jelenleg a csapat létszáma {csapatletszam} fő (papírforma szerint). Cserkésztiszt: {vezetoseg.tiszt} fő, segédtiszt: {vezetoseg.segedtiszt} fő, őrsvezető: {vezetoseg.orsvezeto} fő. Jelenleg a csapatban {orsarray.length} őrs van:
                            <div className={styles.orsok}>
                                <div className={[styles.ors, styles.tcim].join(" ")}>
                                    <div className={styles.orsneve}>Őrs neve</div>
                                    <div className={styles.vl}></div>
                                    <div className={styles.osvezetok}>
                                        <div className={styles.osvezeto}>Őrsvezető</div>
                                    </div>
                                    <div className={styles.vl}></div>
                                    <div className={styles.orsletszama}>Létszám</div>
                                    <hr className={styles.hr}/>
                                </div>
                                {orsarray.map((ors, index)=>(
                                    <div className={styles.ors}>
                                        <div className={styles.orsneve}>{ors.nev}</div>
                                        <div className={styles.vl}></div>
                                        <div className={styles.osvezetok}>
                                            <div className={styles.osvezeto}>{ors.vezeto}</div>
                                            <div className={ors.tarsvezeto? styles.osvezeto : styles.nonevisible}>{ors.tarsvezeto}</div>
                                        </div>
                                        <div className={styles.vl}></div>
                                        <div className={styles.orsletszama}>{ors.tarsvezeto? ors.letszam+2 : ors.letszam + 1 }</div>
                                        <hr className={orsarray[index+1]? styles.hr: styles.nonevisible}/>
                                    </div>
                                ))}
                            </div>
                            Csapat tagjai rendszeresen vettek részt a népdaléneklési versenyeken, tájékozódási versenyeken. A 2000-es évek elején több alkalommal indultak cserkészeink katasztrófavédelmi és elsősegélynyújtó versenyeken, melyeken kiemelkedő eredményeket értek el.</div>
                        {photoarray.map((img) => (
                            img.id===2 ? <Image className={img.style} src={img.url} width={img.width} height={img.height} /> : ""
                        ))}
                    </div>
                </div>
                <div className={styles.tablazatok}>
                    <div className={styles.tablazat}>
                        <div className={[styles.tabor, styles.tcim].join(" ")}>
                            <div className={styles.hely}>Hol</div>
                            <div className={styles.mikor}>Mikor</div>
                                    <hr className={styles.hr1}/>
                        </div>
                    {taboraarray.map((tabor, index)=>(
                                        <div className={styles.tabor}>
                                            <div className={styles.hely}>{tabor.hely}</div>
                                            <div className={styles.mikor}>{tabor.datum}</div>
                                            <hr className={taboraarray[index+1]? styles.hr1: styles.nonevisible}/>
                                        </div>
                                    ))}
                    </div>

                    <div className={styles.tablazat}>
                        <div className={[styles.csp, styles.tcim].join(" ") }>
                            <div className={styles.cspnev}>Ki</div>
                            <div className={styles.cspmikor}>Mikortól</div>
                            <div className={styles.cspmeddig}>Meddig</div>
                                    <hr className={styles.hr2}/>
                        </div>
                    {cspkarray.map((csp, index)=>(
                        <div className={styles.csp}>
                            <div className={styles.cspnev}>{csp.nev}</div>
                            <div className={styles.cspmikor}>{csp.mikor}</div>
                            <div className={styles.cspmeddig}>{csp.meddig? csp.meddig : "-"}</div>
                            <hr className={cspkarray[index+1]? styles.hr2: styles.nonevisible}/>
                        </div>
                                    ))}
                    </div>
                </div>

            </div>
        </Layout>
    );
}





export async function getStaticProps(){
    const res = await fetch(`${API_URL}api/photos?populate=*&filters[Oldal][$eq]=csapat`)
    const res2 = await fetch(`${API_URL}api/orslistas?populate=*`)
    const res3 = await fetch(`${API_URL}api/vezetosegs?populate=*`)
    const res4 = await fetch(`${API_URL}api/tabors?populate=*`)
    const res5 = await fetch(`${API_URL}api/csapat-parancsnoks?populate=*`)
    const photos = await res.json()
    const orsokl = await res2.json()
    const vez = await res3.json()
    const taborokl = await res4.json()
    const taborok = taborokl.data
    const cspkl = await res5.json()
    const cspk = cspkl.data
    const orsok = orsokl.data
    const vezetoseg = szamol(vez.data)

    const csapatletszam = letszam(orsok, vez.data)


    return{
        props:{ photos, orsok, vezetoseg, csapatletszam, taborok, cspk },
        revalidate: 1,
    }
}
  

const szamol = function(vezetoseg){
    let ov =0
    let segedtiszt =0
    let tiszt =0
    vezetoseg.forEach( function (el,index){
        switch(el.attributes.kepesites){
            case "Tiszt": tiszt=tiszt+1; break;
            case "Segédtiszt": segedtiszt=segedtiszt+1; break;
            case "Őrsvezető": ov=ov+1; break;
            default : ""; break;
        }
    })
    return(
        {
            "segedtiszt": segedtiszt,
            "tiszt": tiszt,
            "orsvezeto": ov
        }
    )
}


const letszam = function(orsok, vezetoseg){
    let letszam = 0
    orsok.forEach(function(el, index){
        letszam=letszam+el.attributes.letszam
    })
    vezetoseg.forEach(function(el, index){
        letszam=letszam+1
    })
    return(letszam)
}