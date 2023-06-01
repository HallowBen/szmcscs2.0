import Link from "next/link";
import styles from '@/styles/Header.module.css'

export default function Navitem({title, mhref, subnav}) {

if(mhref===null){
    return(
        <div className={styles.navholder}>
                <div onClick={e=>subnavigation(e, "mobile")} onMouseOver={e=>subnavigation(e, "on")} onMouseOut={e=>subnavigation(e, "out")} className={[styles.subnavcontroller, styles.navitem].join(" ")}>{title}</div>
                
                <div onMouseOver={e=>subnavigation(e, "on")} onMouseOut={e=>subnavigation(e, "out")} className={[styles.subnavholder, styles.nonvisible].join(" ")}>

                {subnav.map((menu) => (
                    <Link onMouseOver={e=>subnavigation(e, "on")} onMouseOut={e=>subnavigation(e, "out")} href={menu.href} className={[styles.subnavitem, styles.navlink].join(" ")}>{menu.title}</Link>
                ))}
                </div>
        </div>
        )
}
else{
    return (
        <div className={styles.navholder}>
            <Link href={mhref} className={[styles.navitem, styles.navlink].join(" ")}>{title}</Link>
        </div>
    );
}
    
}

async function subnavigation(e, state){
    if(screen.width>1100){
        if(e.target.classList.contains(styles.subnavcontroller)){
        if(state==="on"){
            e.target.nextSibling.classList.remove(styles.nonvisible)
        }
        else if(state==="out"){
            e.target.nextSibling.classList.add(styles.nonvisible)
        }
    }
    else if(e.target.classList.contains(styles.subnavholder)){
        if(state==="on"){
            e.target.classList.remove(styles.nonvisible)
        }
        else if(state==="out"){
            e.target.classList.add(styles.nonvisible)
        }
    }
    else if(e.target.classList.contains(styles.subnavitem,)){
        if(state==="on"){
            e.target.parentElement.classList.remove(styles.nonvisible)
        }
        else if(state==="out"){
            e.target.parentElement.classList.add(styles.nonvisible)
        }
    }
    }
    else{
        if(state==="mobile"){
            if(e.target.nextSibling.classList.contains(styles.nonvisible)){
                e.target.nextSibling.classList.remove(styles.nonvisible)
                e.target.nextSibling.classList.remove(styles.subnavholder)
                e.target.nextSibling.classList.add(styles.mobilesubnavholder)
            }
            else{
                e.target.nextSibling.classList.add(styles.nonvisible)
                e.target.nextSibling.classList.add(styles.subnavholder)
                e.target.nextSibling.classList.remove(styles.mobilesubnavholder)
            }
        }
    } 
}