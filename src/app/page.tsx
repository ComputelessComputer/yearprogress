import { DownloadButton } from "@/components/DownloadButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Year Progress App
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Track the passage of time with elegant progress bars right from your
            menu bar
          </p>
          <Image
            src="/assets/year.jpg"
            alt="Year Progress"
            width={570}
            height={420}
            className="mx-auto rounded-lg shadow-lg dark:shadow-gray-700/30 w-full"
            priority
          />

          <DownloadButton className="mt-16" />
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="relative">
              <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                Simple &amp; Elegant
              </dt>
              <dd className="mt-2 text-base text-gray-600 dark:text-gray-300">
                Clean, minimalist interface that shows you exactly what you need
                to know at a glance.
              </dd>
            </div>
            <div className="relative">
              <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                Multiple Time Scales
              </dt>
              <dd className="mt-2 text-base text-gray-600 dark:text-gray-300">
                Track progress for the year, month, and day all in one place.
              </dd>
            </div>
            <div className="relative">
              <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                Menu Bar Integration
              </dt>
              <dd className="mt-2 text-base text-gray-600 dark:text-gray-300">
                Always accessible from your menu bar, with keyboard shortcuts
                for quick access.
              </dd>
            </div>
            <div className="relative">
              <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                Native macOS App
              </dt>
              <dd className="mt-2 text-base text-gray-600 dark:text-gray-300">
                Built specifically for macOS, following platform design
                guidelines and best practices.
              </dd>
            </div>
          </div>
        </div>

        {/* Background Section */}
        <div className="mx-auto max-w-2xl mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            Background
          </h2>
          <div className="mt-10 space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
            <p>
              I was looking into{" "}
              <Link
                href="https://nat.org"
                target="_blank"
                className="underline decoration-dotted"
              >
                Nat Friedman&apos;s homepage
              </Link>{" "}
              about 5 months ago and read a really obvious yet astonishing
              statement:
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}
                &ldquo;A week is 2% of the year&rdquo;
              </span>
              .
            </p>
            <p>
              Everyone knows that time is precious. But it&apos;s really not
              that tangible when you&apos;re stuck in the absolute scale of a
              clock. Instead, using relative scales is far more effective for
              humans, at least that is what I propose.
            </p>
            <p>
              I really fell in love with Nat&apos;s concept of &ldquo;a week is
              2% of the year&rdquo; and have been adopting this to measure my
              life.
            </p>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-16 mb-6">
            Why use this?
          </h3>
          <div className="space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
            <p>
              You might wonder, &lsquo;Why not use existing apps in the
              market?&rsquo; However, my research suggested that many existing
              applications charge excessively for minimal utility.
            </p>
            <p>
              So, that is why I decided to build it myself and turns out it was
              the right choice. Most of all, it&apos;s free!
            </p>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-16 mb-6">
            Why is it free?
          </h3>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            I initially considered pricing it, but given my involvement in other
            businesses, I preferred not to deal with the hassle. Moreover, I
            wanted to contribute to enhancing productivity freely.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-24 pb-12 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Year Progress App. All rights
          reserved.
        </footer>
      </main>
    </div>
  );
}
