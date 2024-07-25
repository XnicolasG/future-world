import { getCollections } from 'app/services/shopify/collections'
import Link from 'next/link'
import React from 'react'
import styles from './layout.module.css'

const layout = async ({ children }: { children: React.ReactNode }) => {
    const collections = await getCollections()
    console.log(collections);
    
    return (
        <main>
            <nav
                className={styles.collection}
            >
                {
                     collections.map((collection: any) => (
                        <Link key={collection.id}
                            href={`/store/${collection.handle}`}
                            className={styles.collection_item}
                        >
                            {collection.title}
                        </Link>
                    ))
                }
            </nav>
            {children}
        </main>
    )
}

export default layout