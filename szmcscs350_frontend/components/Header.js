import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import styles from '@/styles/Header.module.css'
import Icon from '@/images/icon.jpg' 
import Navitem from "./NavItem";
import { useEffect } from "react";


const Menu__List=[
    {
        title: "Kezdőlap",
        mhref: "/",
        subnav: null,
    },
    {
        title: "Hírek",
        mhref: "/hirek",
        subnav: null,
    },
    {
        title: "Rólunk",
        mhref: null,
        subnav: [
            {
                title: "Csapatról",
                href: "/rolunk/csapatrol",
            },
            {
                title: "Cserkészetről",
                href: "/rolunk/cserkeszetrol",
            },
        ]
    },
    {
        title: "Segédanyagok",
        mhref: "/segedlet",
        subnav: null,
    },
    {
        title: "Galéria",
        mhref: "/galeria",
        subnav: null,
    },

]


export default function Header() {
    const router = useRouter()

    useEffect(() => {
        
        router.events.on('routeChangeComplete', mobile);
        return () => {
          router.events.off('routeChangeComplete', mobile);
        };
      }, [router]);



    const a = router.asPath.split('/')[1]
    var search = false
    if ((a==="hirek" || a==="segedlet" || a==="galeria") && search===false) {
        search = true
    }

    return (
        <div className={styles.navbar}>
                <Link href={'/'}><Image src={Icon} width={65} height={65}/></Link>
                
                <div id="MobileBg" className={styles.navbg}>
                    <div id="NavWrapper" className={styles.navwrapper}>
                    
                    {Menu__List.map((menu) => (
                        <Navitem {...menu}/>
                    ))}
                    </div>
                </div>
            
            <div id="Icons" className={search===true ? styles.navicons : styles.navicons2}>
                <FaBars id="MobileBtn" onClick={mobileopen} className={[ styles.nonvisible, styles.navicon].join(" ")}/>
                < HiOutlineSearch className={search===true ? styles.navicon : styles.nonvisible}/>
                <FaFacebook className={styles.navicon}/>
                <FaInstagram className={styles.navicon}/>
                <LuLogIn className={styles.navicon} />
                <VscChromeClose onClick={mobileclose} id="MobileClose" className={[styles.nonvisible, styles.closebtn].join(" ")}/>
            </div>
            <script src={mobile({search})}/>
        </div>
       
    );
}

async function mobile({search}){
    const navwrapper=document.getElementById("NavWrapper")
    const mobilebtn= document.getElementById("MobileBtn")
    const icons = document.getElementById("Icons")
    const MobileClose= document.getElementById("MobileClose")
    window.onload = mobile;
    window.onresize = mobile;
    if(navwrapper !== null && mobilebtn !== null && icons !== null && MobileClose !== null){
        if(screen.width<=1100 & MobileClose.classList.contains(styles.nonvisible)){
        navwrapper.classList.add(styles.nonvisible)
        mobilebtn.classList.remove(styles.nonvisible)
        icons.classList.remove(styles.navicons)
        icons.classList.add(styles.navicons2)
    }
    else{
        navwrapper.classList.remove(styles.nonvisible)
        mobilebtn.classList.add(styles.nonvisible)
        if(search===true){
                icons.classList.remove(styles.navicons2)
                icons.classList.add(styles.navicons)
        }
        else if (search===false){
            icons.classList.add(styles.navicons2)
            icons.classList.remove(styles.navicons)
        }
    }
    }
    
}

async function mobileopen(){
    const navwrapper=document.getElementById("NavWrapper")
    const MobileClose= document.getElementById("MobileClose")
    const icons = [...document.getElementsByClassName(styles.navicon)]
    const mobilebg = document.getElementById("MobileBg")
    const mobilebtn= document.getElementById("MobileBtn")

    navwrapper.classList.remove(styles.navwrapper)
    navwrapper.classList.remove(styles.nonvisible)
    navwrapper.classList.add(styles.mobilenav)
    mobilebg.classList.remove(styles.navbg)
    mobilebtn.classList.add(styles.nonvisible)
    mobilebg.classList.add(styles.mobilebg)
    MobileClose.classList.remove(styles.nonvisible)
}

async function mobileclose(){
    const navwrapper=document.getElementById("NavWrapper")
    const MobileClose= document.getElementById("MobileClose")
    const icons = [...document.getElementsByClassName(styles.navicon)]
    const mobilebg = document.getElementById("MobileBg")
    const mobilebtn= document.getElementById("MobileBtn")

    navwrapper.classList.add(styles.navwrapper)
    navwrapper.classList.add(styles.nonvisible)
    navwrapper.classList.remove(styles.mobilenav)
    mobilebg.classList.add(styles.navbg)
    mobilebg.classList.remove(styles.mobilebg)
    mobilebtn.classList.remove(styles.nonvisible)
    MobileClose.classList.add(styles.nonvisible)
}