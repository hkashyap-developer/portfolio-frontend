/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zhQnH59GpeP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Logo from '/public/NishaLogo.png'
import Image from 'next/image'


export default function Component() {
    return (
      <section className="w-full  self-center py-12 md:py-16 lg:py-20 lg:pb-12">
        <div className="container max-w-screen-md px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <Image
              alt="Image 1"
              className="aspect-square object-cover rounded-lg"
              height={300}
              src={Logo}
              width={300}
            />
            <Image
              alt="Image 1"
              className="aspect-square object-cover rounded-lg"
              height={300}
              src={Logo}
              width={300}
            />
            <Image
              alt="Image 1"
              className="aspect-square object-cover rounded-lg"
              height={300}
              src={Logo}
              width={300}
            />
            <Image
              alt="Image 1"
              className="aspect-square object-cover rounded-lg"
              height={300}
              src={Logo}
              width={300}
            />

          </div>
        </div>
      </section>
    )
  }