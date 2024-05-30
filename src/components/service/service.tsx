import { BellRing, Check } from "lucide-react"

import Image from "next/image"
import ServiceImage from '/public/HeroBG.jpg'


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>


<Image className="rounded" src={ServiceImage} width="100%" height="100%"/>

      <CardHeader>
        <CardTitle className="text-center text-thin text-pink-800">Premium Gold Card</CardTitle>
        <CardDescription className="text-center">Gold card is available for exclusive members.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">

        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button  className="w-full bg-pink-800">
          <Check className="mr-2 h-4 w-4" /> Request a Booking
        </Button>
      </CardFooter>
    </Card>
  )
}
