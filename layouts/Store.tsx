import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import {
  companyLogo,
  companyName,
  description,
  footerLinkLists,
  getCopyrightText,
  headerLinks,
} from "util/constants";

export interface StoreLayoutProps {
  title?: string;
}

function Logo() {
  return (
    <Image
      alt={`${companyName} logo`}
      src={companyLogo}
      width={40}
      height={40}
    />
  );
}

export default function StoreLayout({
  title = "",
  children = null,
}: PropsWithChildren<StoreLayoutProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-10 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              <Link href="/">
                <Logo />
              </Link>

              <nav className="hidden sm:block space-x-8">
                {headerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-medium hover:text-red-500 hover:underline hover:underline-offset-2 transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t">
          <div className="container mx-auto px-4">
            <div className="pt-12 pb-16 gap-12 flex flex-col lg:flex-row">
              <div className="lg:flex-1 lg:max-w-sm space-y-2">
                <Link
                  href="/"
                  className="flex flex-col lg:flex-row items-center gap-2"
                >
                  <Logo />
                  <span className="font-semibold text-xl tracking-wide text-red-600">
                    {companyName}
                  </span>
                </Link>

                <p className="font-light text-center lg:text-left max-w-[210px] lg:max-w-none mx-auto">
                  {description}
                </p>
              </div>

              <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {footerLinkLists.map((linkList) => (
                  <ul key={linkList.groupLabel} className="space-y-6">
                    <h3 className="relative font-semibold text-xl after:content-[''] after:w-8 after:h-px after:block after:bg-black after:absolute md:after:static after:left-1/2 after:-translate-x-1/2 md:after:translate-x-0 after:mt-0">
                      {linkList.groupLabel}
                    </h3>
                    <li className="flex flex-col space-y-2">
                      {linkList.links.map((link) => (
                        <Link key={link.label} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="py-6">
              <p className="text-gray-500 text-sm text-center">
                {getCopyrightText()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
