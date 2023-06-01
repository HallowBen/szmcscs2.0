import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

import mcssz from '@/images/mcssz.png'
import peldaulhu from '@/images/peldaulhu.png'
import scoutwiki from '@/images/scoutwiki.png'
import hker from '@/images/3ker.png'

export default function Home() {
  return (
    <Layout title="Kezdőlap">
      
      <div className={styles.bgvideo}>
        <div className={styles.overlay}></div>
        <video src={'../images/good.m4v'} muted loop autoPlay width={100} height={100} className={styles.video} />
        <div className={styles.heading}>
          <h1>350. Szent Márton </h1>
          <h3>Cserkészcsapat</h3>
        </div>
      </div>

      <div className={styles.main}>  
        {/* hírek */}
        <div></div>

        {/* Kapcsolodó oldalak */}
        <div>
          <h1 className={styles.kapcsoldalakcim}>Kapcsolodó oldalak</h1>
          <div className={styles.kapcsolodooladalak}>

            <div className={styles.kapcsoldal}>
              <Image src={mcssz} width={90} height={90}/>
              <div className={styles.kapcsleiras}>
                <h2>Magyar Cserkész szövetség</h2>
                <div>A magyar cserkész szövetség hivatalos weboldala!</div>
                <Link  draggable="false" className="btn" href="https://www.cserkesz.hu/" target='blank'>Tovább</Link>
              </div>
            </div>
            <div className={styles.kapcsoldal}>
              <Image src={peldaulhu} width={90} height={90}/>
              <div className={styles.kapcsleiras}>
                <h2>Például.hu</h2>
                <div>Módszertani jatékok online tárháza!</div>
                <Link draggable="false" className="btn" href="https://www.peldaul.hu/" target='blank'>Tovább</Link>
              </div>
            </div>
            <div className={styles.kapcsoldal}>
              <Image src={scoutwiki} width={90} height={90}/> 
              <div className={styles.kapcsleiras}>
                <h2>350. Szent Márton cserkészcsapat</h2>
                <div>A csapat hivatalos wikipédia oldala!</div>
                <Link draggable="false" className="btn" href="https://wiki.cserkesz.hu/350._Szent_M%C3%A1rton_cserk%C3%A9szcsapat" target='blank'>Tovább</Link>
              </div>
            </div>
            <div className={styles.kapcsoldal}>
              <Image src={hker} width={75} height={90}/>
              <div className={styles.kapcsleiras}>
                <h2>III. Kerülete</h2>
                <div>A III. számu nyugat magyaroszági cserkész kerület hivatalos weboldala!</div>
                <Link draggable="false" className="btn" href="https://3ker.cserkesz.hu/" target='blank'>Tovább</Link>
              </div>
            </div>
          
          </div>
        </div>

        {/* Galéria */}
        <div></div>
      </div>
    </Layout>
  )
}