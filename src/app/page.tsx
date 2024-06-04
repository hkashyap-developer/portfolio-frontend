
import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { sanityFetch } from "@/sanity/client";


import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

import Homehero from '@/components/home-hero/home-hero'
import Categories from '@/components/categories/fourxtwo'
import Packages from '@/components/packages/packages'
import Calendly from '@/components/calendly/calendly'

const EVENTS_QUERY = `*[_type == "event"]{_id, name, slug, date}|order(date desc)`;



export default async function IndexPage() {
  const events = await sanityFetch<SanityDocument[]>({query: EVENTS_QUERY});

  return (
    <>

    <Header/>
    <Homehero/>
    <Categories/>
    <Packages/>
    <Calendly/>
    <Footer/>
    </>
    // <main className="flex bg-black min-h-screen flex-col p-24 gap-12">
    //   <h1 className="text-4xl font-bold tracking-tighter">
    //     Events
    //   </h1>
    //   <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
    //     {events.map((event) => (
    //       <li
    //         className="bg-black-300 p-4 rounded-lg"
    //         key={event._id}
    //       >
    //         <Link
    //           className="hover:underline"
    //           href={`/events/${event.slug.current}`}
    //         >
    //           <h2 className="text-xl font-semibold">{event?.name}</h2>
    //           <p className="text-gray-500">
    //             {new Date(event?.date).toLocaleDateString()}
    //           </p>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </main>
  );
}