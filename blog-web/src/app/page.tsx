import Image from "next/image";
import {client} from "@/sanity/lib/client" 
import Link from "next/link";
import { urlFor } from '@/sanity/lib/image';

export default async function Home() {

  const query = `*[_type == 'post']{
  title,headline,summary,image,
    "slug":slug.current,
}`;

const post = await client.fetch(query)

return (
    <>
<div>
    <div className="">
    <Image src='/image/tech-123.jpg' alt='banner' height={100} width={100} className='relative w-screen overflow-hidden object-cover' unoptimized quality={100}></Image>
</div>
</div>

<div className='w-9/12 sm:h-[350px] bg-blue-950 lg:mx-40 md:mx-16 md:top-[400px] top-[260px] mx-12 absolute xl:top-[550px] border-2 border-gray-100 border-opacity-20 text-white shadow-2xl shadow-blue-950 rounded-md -mt-10 sm:mx-20'>
    <p className='text-center text-semibold text-2xl p-4 sm:mt-6 font-mono'>TechSphere</p>
    <p className='w-9/12 mx-auto sm:mt-4 text-semibold text-center'>Explore the world of technology with TechSphere where innovation meets inspiration.</p>
    <p className='hidden sm:flex text-center mx-auto '>Discover blogs that ignite curiosity and empower ideas! From the latest breakthroughs in tech to practical insights for everyday life, TechSphere is your trusted guide in this ever-evolving digital era. Join us as we decode complex trends, share expert perspectives, and bring you closer to the future of technology. At TechSphere, we don't just talk about innovation we live it.</p>
    </div>

    <h1 className='text-4xl font-serif font-semibold xl:mt-40 mt-48 md:mt-56 sm:mx-20 mx-4'>Resent posts</h1>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {post.map((post: any) => (
        <div key={post.slug} className="p-4">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            {post.image && (
              <img
                src={urlFor(post.image).width(400).url()} // Set image width dynamically
                alt={post.title}
                className="lg:h-48 md:h-36 w-full object-cover object-center"
              />
            )}
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {post.title}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {post.headline}
              </h1>
              <p className="leading-relaxed mb-3">{post.summary}</p>
              <div className="flex items-center flex-wrap">
                <Link href= {`/blogs/${post.slug}`}>
                <button className="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0 font-semibold">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
                </Link>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 
  </>

  )}