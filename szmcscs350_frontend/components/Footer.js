import Link from "next/link";
import Image from 'next/image'
import styles from '@/styles/Footer.module.css'
import Icon from '@/images/icon.jpg'
import { CgCopyright } from "react-icons/cg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <div className={styles.logocontainer}>
                    <Image src={Icon} width={65} height={65} className={styles.logo}/>
                    <div>Szent Márton Cserkészcsapat</div>
                </div>
                <div className={styles.contact}>
                    <div>Email-cím: szmcscs350@gmail.com</div>
                    <div>Cím: 9700, Szombathely, Szent Márton utca 40.</div>
                </div>
                <div className={styles.copyright}>
                    <div className={styles.creator}>Created by MDnD-it</div>
                    <div className={styles.copytext}><CgCopyright/>2023 Csepreg MDnD-it. Minden jog fenntartva.</div>
                </div>
        </footer>
    );
}