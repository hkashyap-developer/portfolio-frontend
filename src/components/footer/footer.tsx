/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FMLPOaIz6TO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <footer className="bg-gray-100 py-6 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="flex items-center space-x-4">
          <Link className="text-sm hover:underline dark:text-gray-300" href="#">
            Terms
          </Link>
          <Link className="text-sm hover:underline dark:text-gray-300" href="#">
            Privacy
          </Link>
          <Link className="text-sm hover:underline dark:text-gray-300" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}