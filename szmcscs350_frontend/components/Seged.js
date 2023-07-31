import styles from '@/styles/Seged.module.css'
import { useState } from 'react';
import Modal from './modal';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '@/config';
import { headers } from 'next/dist/client/components/headers';
// export function Segedhozzaadas() {
//     const showwindow= document.getElementById('PopupWindow')
//     showwindow.classList.remove("nonvisible")
//     showwindow.classList.add(styles.popupwindow)
//     document.body.classList.add(styles.frozen)
//     showwindow.innerHTML = "a"
    
// }

export function Segedszerkeztese() {
    return (
        <div>
            Enter
        </div>
    );
}

export  default function Segedsav(){
    const [CreateNew, setCreateNew] = useState(false)
    const router = useRouter

    let chekvalue = false

    const handleCheckbox = (e) => {
        if(e.target.checked == true) {
            e.target.value = true
        }
        else{
            e.target.value =false  
        }
    }

    const [CreateValues, setCreateValues] = useState({
        temakor: "",
        nev: "",
        tipus: "",
        vezetoknek: "false",
        segitseg: "",
    })

    const handlecreation = async (e) => {
        e.preventDefault()

        // validitation
        const hasEmptyFields = Object.values(CreateValues).some((element)=> element === ' ')
        if(hasEmptyFields){
            toast.error('Kérlek töltsd ki az összes mezőt!')
        }
        else{

            const formData = new FormData()
            console.log(CreateValues)
            Object.entries(CreateValues).forEach(el => {
                console.log(el)
            })


           const res = await fetch(`${API_URL}api/segedanyags?populate=*`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({CreateValues })
        }) 
        if(!res.ok){
            toast.error('Hiba a feltöltés közben!')
        } else{
            document.body.classList.remove("frozen")
            setCreateNew(false)
            toast.info('Feltöltve!') 
        } 
        }
        
    }

    const handleCreationChange = (e) => {
        const {name, value} = e.target
        setCreateValues({...CreateValues, [name]: value })
    }

    return(
        <div>
            <div className={styles.sav}>
                <div className={styles.szerkeszto}>
                    <div onClick={()=>setCreateNew(true)} className={[styles.hozzaadas, styles.menupont].join(" ")}>Új hozzáadása</div>
                    <div className={[styles.szerkesztes, styles.menupont].join(" ")}>Meglévő szerkesztése</div>
                    <div className={[styles.torles, styles.menupont].join(" ")}>Meglévő törlése</div>
                </div>
            </div>
            {CreateNew && 
            <Modal onClose={()=>setCreateNew(false)} title="Új segédadat feltöltése">
            <ToastContainer pauseOnHover={false} className={styles.toast}/>
                <form onSubmit={handlecreation} className={styles.form}>
                    <div className={styles.flex}>
                        <div className={styles.mezo}>
                            <label htmlFor="nev"> Segítség megnevezése </label>
                            <input type="text" id="nev" name='nev' value={CreateValues.nev} onChange={handleCreationChange} />
                        </div>
                        <div className={styles.mezo}>
                            <label htmlFor="temakor"> Segítség témaköre </label>
                            <input type="text" id="temakor" name='temakor' value={CreateValues.temakor} onChange={handleCreationChange} />
                        </div>
                        <div className={styles.mezo}>
                            <label htmlFor="tipus"> Segítség típusa </label>
                            <input type="text" id="tipus" name='tipus' value={CreateValues.tipus} onChange={handleCreationChange} />
                        </div>
                        <div className={styles.mezo}>
                            <label htmlFor="vezetoknek"> Vezetőknek </label>
                            <input type="checkbox" id="vezetoknek" name='vezetoknek' value={""} onChange={(e)=>{handleCheckbox(e), handleCreationChange(e)}} />
                        </div>
                        <div className={styles.mezo}>
                            <label htmlFor="segitseg"> Segítség </label>
                            <input type="file" id="segitseg" name='segitseg' value={CreateValues.segitseg} onChange={handleCreationChange} />
                        </div>
                    </div>
                    <input type="submit" value="Segéd feltöltése" className={styles.btn}></input>
                </form>
            </Modal>
            }














        </div>
    )
}

export async function getStaticProps(){


    return {
        props:{
            data:null
        }
    }
}
