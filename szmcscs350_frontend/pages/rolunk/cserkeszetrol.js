import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import styles from '@/styles/Cserkeszetrol.module.css'
import { API_URL } from '@/config'


export default function hirek(photos) {
    let photoarray= []
    const a = photos.photos
    
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
        else if(el.attributes.formats.small){
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
        else{
            var temp =[
                {
                id: index,
                url: el.attributes.formats.thumbnail.url,
                name: el.attributes.name,
                width: el.attributes.formats.thumbnail.width,
                height: el.attributes.formats.thumbnail.height,
                style: [styles.kep, styles[(el.attributes.name).split(".")[0]]].join(" ")
                }
            ]
            photoarray=photoarray.concat(temp)
        }
    });


    return (
        <Layout>
             <div className={styles.container}>
                <div className={styles.oldalcim}>A cserkészet rövid története</div>
            <div className={styles.bekezdes}>
                <div className={styles.alcim}>Megalakulás</div>
                <tartalom>
                        {photoarray.map((img) => (
                                    img.id===1 ? <kep className={styles.kepcontainer}><Image className={img.style} src={img.url} width={img.width} height={img.height} /> <kepalairas>{img.name.split(".")[0].split("_").join(" ")}</kepalairas> </kep> : ""
                                ))}
                    
                    <div className={styles.szoveg}>
                            A cserkészet alapítója Lord Robert Stephenson Smyth Baden-Powell of Gilwell (B-P, Bi-Pi), aki katona tisztként szolgált a brit hadseregben a birodalom különböző gyarmatain, főként India és Afrika területén. A szolgálati ideje alatt összegyüjtött tapasztalatait használta fel később a fiataloknak szóló könyve (Scouting for Boys) megírásához. Bi-Pi Mafeking ostroma közben lett figyelmes az ott szolgáló fiatalok ügyességére és találékonyságára, úgy vélte, hogy a városi fiatalok is képesek hasonló találékonyságra és értékes munkára, ha felelősséget kapnának.
                            Az anyaországba visszatérve, 1907-ben tábort szervezett kamasz fiúknak az angliai Brownsea szigetén, hogy ezen elméletét gyakorlatban is tesztelje. A tábor folyamán a fiatalok kisebb csoprtokra (őrsökre) voltak osztva, amikben az elit iskolák diákjai együtt voltak jelen a szegényebb sorban élő társaikkal. Közösen vettek részt a különböző sporteseményeken és turákon, mindvégig egyenruhában, ami elfedte a társadalmi különbségeket. A tábornak igen csak nagy sikere lett, ami következtében tanácsolta az "őrsi" rendszer bevezetését. Ebben a rendszerben 4-5 fő alkot egy őrsöt, ahol a legidőseb az őrsvezető, aki felelős az egész őrse viselkedéséért.
                    </div>
                    {photoarray.map((img) => (
                                img.id===5 ? <kep className={styles.kepcontainer}><Image className={img.style} src={img.url} width={img.width} height={img.height} /> <kepalairas>{img.name.split(".")[0].split("_").join(' ')}</kepalairas> </kep> : ""
                            ))}
                </tartalom>
                
            </div>
            <div className={styles.bekezdes}>
                    <div className={styles.alcim}>Cserkészet fiúknak</div>
                <tartalom>
                    {photoarray.map((img) => (
                                    img.id===4 ? <kep className={styles.kepcontainer}><Image className={img.style} src={img.url} width={img.width} height={img.height} /> <kepalairas>{img.name.split(".")[0].split("_").join(' ')}</kepalairas> </kep> : ""
                                ))}
                    <div className={styles.szoveg}>
                        A tábor sikerét és a ott szerzett tapasztait öszefoglaló könyve a Scouting for Boys népszerüségét követően a cserkészet rendkívüli sebességel terjedt el elösször a szigetország területén, majd az egész világon. Katonai viszavonulása után Bi-Pi minden idejét és erejét a cserkészetnek szentelte. Számos országot beutazott, s hirdette a cserkészetet és annak eszményeit. Utazási során egyaránt buzdította a fiatlokat és a veztetőket ezek követésére. Bi-Pi utolsó éveit visszavonultan Kenyában, Nyeriben töltötte 1941. január 8-án bekövetkezett haláláig.
                    </div>
                    {photoarray.map((img) => (
                                img.id===2 ? <kep className={styles.kepcontainer}><Image className={img.style} src={img.url} width={img.width} height={img.height} /> <kepalairas>{img.name.split(".")[0].split("_").join(" ")}</kepalairas> </kep> : ""
                            ))}
                </tartalom>
            </div>
            <div className={styles.bekezdes}>
                <div className={styles.alcim}>A cserkészliliom</div>
            <tartalom>
                {photoarray.map((img) => (
                                img.id===0 ? <kep className={styles.kepcontainer}><Image className={img.style} src={img.url} width={img.width} height={img.height} /> <kepalairas>{img.name.split(".")[0].split("_").join(" ")}</kepalairas> </kep> : ""
                            ))}
                <div className={styles.szoveg}>
                    Az alapító (Bi-Pi) választotta a liliomot, mint a cserkészek jelképének. Ennek több oka is van. A liliom már a régi időkben is a tisztaságot szimbolizálta, amit a cserkészek legfontosabb erényének tartott. Ezen felül a térképeken az észeki irányt jelölték liliommal, ami segítette az utazokat a helyes irány megtalálásában, ezzel vonta párhuzamba a jelvényt, hogy segítse a cserkészeket. A stilizált liliom három ága, pedig a cserkészfogadalom három részére utal: kötelességteljesítés, segítőkészség, törvénytisztelet.
                </div>
                {photoarray.map((img) => (
                            img.id===3 ? <kep className={styles.kepcontainer}> <Image className={img.style} src={img.url} width={img.width} height={img.height} /> <kepalairas>{img.name.split(".")[0].split("_").join(" ")}</kepalairas> </kep>: ""
                        ))}
            </tartalom>
            </div>
        </div>
        </Layout>
    );
}



export async function getStaticProps(){
    const res = await fetch(`${API_URL}api/photos?populate=*&filters[Oldal][$eq]=Cserkesz`)
    const photosl = await res.json()
    const photos = photosl.data[0].attributes.photo.data

    return{
        props:{ photos },
        revalidate: 1,
    }
}