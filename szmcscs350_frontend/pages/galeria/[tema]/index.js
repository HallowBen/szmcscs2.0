import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import {  useRouter } from 'next/router'

export default function hirek() {
    const router = useRouter()
    console.log(router)
    return (
        <Layout>
            {router.query.tema}
        </Layout>
    );
}