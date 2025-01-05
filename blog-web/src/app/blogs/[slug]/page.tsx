import React from 'react'
import {client} from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';




async function Blogpage({params}:{params:{slug:string}}) {

    const {slug} = params;

    const query= `*[_type == "post" && slug.current == $slug][0]{
        content
      }`

const post = await client.fetch(query, {slug})
console.log(post.content);


const serializers = {
  types: {
    image: ({ value }: { value: any }) => (
      <img
        src={urlFor(value.asset).width(800).url()} // Generate image URL with desired width
        alt={value.alt || 'Post Image'}
        style={{ maxWidth: '100%', borderRadius: '8px', margin: '20px 0' }}
      />
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{children}</h1>,
    h2: ({ children }: any) => <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{children}</h2>,
    h3: ({ children }: any) => (
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold' }}>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: 'bold' }}>{children}</h4>
    ),
    normal: ({ children }: any) => <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{children}</p>,
  },
}

  return (
    <>
    <div style={{ padding: '20px' }}>
        <PortableText value={post.content} components={serializers} />
    </div>
    </>
  )
}

export default Blogpage



