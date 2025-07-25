'use client'

import Head from 'next/head'
import { SEO } from '@/types/types' // Adjust path as per your actual structure

interface SeoHeadProps {
  seo?: SEO
}

const SeoHead: React.FC<SeoHeadProps> = ({ seo }) => {
  if (!seo) return null

  return (
    <Head>
      {seo.title && <title>{seo.title}</title>}
      {seo.description && (
        <meta name="description" content={seo.description} />
      )}
      {seo.keywords?.length > 0 && (
        <meta name="keywords" content={seo.keywords.join(', ')} />
      )}

      {seo.defaultMeta?.map((meta, index) => {
        const attrName = meta.type === 'name' ? 'name' : 'property'
        return (
          <meta
            key={index}
            {...{ [attrName]: meta.value }}
            content={meta.content}
          />
        )
      })}

      {seo.schema?.map((schema, index) =>
        schema.type === 'ld-json' && schema.meta_value ? (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schema.meta_value }}
          />
        ) : null
      )}
    </Head>
  )
}

export default SeoHead
