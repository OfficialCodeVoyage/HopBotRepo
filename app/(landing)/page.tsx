import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <Link href="/dashboard">
                <Button>
                  Login
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button>
                  Register
                </Button>
              </Link>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Learn more about Hopkins!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find out which major suits you best!
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/dashboard"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Get started
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
          <div className="w-full mx-auto mt-16 flex sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 xl:ml-32">
            <div className="w-full max-w-3xl flex-none sm:max-w-5xl">
              <div className="w-full -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                      src="/hopkinsad2.jpeg"
                      alt=""
                      className="w-full h-auto rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
              </div>
           </div>
          </div>
      </div>
    </div>
  );
}
