/**
 * v0 by Vercel.
 * @see https://v0.dev/t/la0qJOlts0K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import bg from '/public/HeroBG.jpg'

export default function Component() {
  return (
    <section
      className="bg-blend-darken relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"

      style={{
        backgroundImage: `url(${bg.src})`,

      }}


    >
      <div className="bg-[#00000080] absolute inset-0 " />
      <div className="relative z-1 max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-5xl">
        Beauty Empowers The Soul
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Discover the ultimate platform for bringing your ideas to life. Explore our suite of powerful tools and start
          creating today.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            className="rounded-md bg-pink-900 px-3.5 py-2.5 text-lg font-medium text-white shadow-sm hover:bg-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            href="#"
          >
            Book A Package
          </Link>
          <Link className="text-lg font-medium leading-6 text-white" href="#">
            My Portfolio&nbsp;
            <span aria-hidden="true"></span>
          </Link>
        </div>
      </div>
    </section>
  )
}