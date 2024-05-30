/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T4xFS1P0RoI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"


import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

export default function Component() {
  return (

<>

<Header/>

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in touch</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
          </p>
        </div>
        <Card>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={4} />
              </div>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
<Footer/>

    </>

  )
}