import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useState } from 'react';
import { API_URL } from '@/config'
import styles from '@/styles/Csapatrol.module.css'

export default function csapatrol({ photos }) {
    const a = photos.data[0].attributes.photo.data;
    console.log(a);
    let array= []
    a.forEach(el => {
        if(el.attributes.formats.medium){
            var temp =[
                {
                url: el.attributes.formats.medium.url,
                name: el.attributes.name,
                width: el.attributes.formats.medium.width,
                height: el.attributes.formats.medium.height,
                style: [styles.kep, styles[(el.attributes.name).split(".")[0]]].join(" ")
                }
            ]
            array=array.concat(temp)
        }
        else{
            var temp =[
                {
                url: el.attributes.formats.small.url,
                name: el.attributes.name,
                width: el.attributes.formats.small.width,
                height: el.attributes.formats.small.height,
                style: [styles.kep, styles[(el.attributes.name).split(".")[0]]].join(" ")
                }
            ]
            array=array.concat(temp)
        }
        console.log(array)
    });
    return (
        
        <Layout>
            {/* <Image src={photos.}/> */}
            {array.map((img) => (
            <Image className={img.style} src={img.url} width={img.width} height={img.height} />
            ))}

        </Layout>
    );
}

export async function getStaticProps(){
    const res = await fetch(`${API_URL}api/photos?populate=*&Oldal=csapat`)
    const photos = await res.json()
    return{
        props:{ photos },
        revalidate: 1,
    }
}
  