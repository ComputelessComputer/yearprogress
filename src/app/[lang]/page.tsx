import { DownloadButton } from "@/components/DownloadButton";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/middleware";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { features, background, home } = dict;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            {home.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {home.description}
          </p>
          <Image
            src="/assets/year.jpg"
            alt="Year Progress App Screenshot"
            width={190}
            height={140}
            className="mx-auto mt-10 rounded-xl shadow-2xl"
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <DownloadButton />
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto mt-32 max-w-2xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="relative">
              <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                {features.simple}
              </dt>
              <dd className="mt-2 text-base text-gray-600 dark:text-gray-300">
                {features.simpleDescription}
              </dd>
            </div>
            <div className="relative">
              <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                {features.multipleTimeScales}
              </dt>
              <dd className="mt-2 text-base text-gray-600 dark:text-gray-300">
                {features.multipleTimeScalesDescription}
              </dd>
            </div>
            <div className="relative">
              <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                {features.menuBarIntegration}
              </dt>
              <dd className="mt-2 text-base text-gray-600 dark:text-gray-300">
                {features.menuBarIntegrationDescription}
              </dd>
            </div>
            <div className="relative">
              <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                {features.nativeMacOSApp}
              </dt>
              <dd className="mt-2 text-base text-gray-600 dark:text-gray-300">
                {features.nativeMacOSAppDescription}
              </dd>
            </div>
          </div>
        </div>

        {/* Background Section */}
        <div className="mx-auto max-w-2xl mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            {background.title}
          </h2>
          <div className="mt-10 space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
            <p>
              {background.description1}
              <Link
                href="https://nat.org"
                target="_blank"
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {background.natFriedmanLink}
              </Link>
              {background.description2}
              <span className="font-semibold text-gray-900 dark:text-white">
                {background.quote}
              </span>
              .
            </p>
            <p>{background.description3}</p>
            <p>{background.description4}</p>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-16 mb-6">
            {background.whyUseThis.title}
          </h3>
          <div className="space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
            <p>{background.whyUseThis.description1}</p>
            <p>{background.whyUseThis.description2}</p>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-16 mb-6">
            {background.whyIsItFree.title}
          </h3>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            {background.whyIsItFree.description}
          </p>
        </div>
      </main>
    </div>
  );
}
