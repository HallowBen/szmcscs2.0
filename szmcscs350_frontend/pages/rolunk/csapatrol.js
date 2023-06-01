import Link from 'next/link'
import Layout from '@/components/Layout'
import zaszlo  from '@/csapatrol/zaszlo.jpg'
import a_mi_tiz_evunk from '@/csapatrol/a_mi_tiz_evunk.jpg'
import cserkesz_csapat from  '@/csapatrol/cserkesz_csapat.jpg'
import Image from 'next/image'
import React, { useState } from 'react';
import { API_URL } from '@/config'
import { ApiError } from 'next/dist/server/api-utils'

const images = [
    {
        src: zaszlo.src,
        loading: 'lazy',
        alt: 'Windows 10 Dark Mode Setting',
    },
    {
        src: a_mi_tiz_evunk.src,
        loading: 'lazy',
        alt: 'macOS Mojave Dark Mode Setting',
    },
    {
        src: cserkesz_csapat.src,
        loading: 'lazy',
        alt: 'Android 9.0 Dark Mode Setting',
    },
];

export default function csapatrol({ photos }) {
    console.log(photos)
    return (
        <div>
            c
        </div>
    );
}

export async function getServerSideProps(ctx){
    const res = await fetch(`${API_URL}/api/photos`)
    console.log(`${API_URL}api/photos`)
    const photos = await res.json()
    return {
        props:{
            // photos
        }
    }
}
