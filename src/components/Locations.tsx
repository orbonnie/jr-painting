import Image from "next/image";

export default function Locations({
  aboutHeading,
  aboutIntro,
  locationsHeading,
  serviceAreas,
}: {
  aboutHeading: string;
  aboutIntro: string;
  locationsHeading: string;
  serviceAreas: string[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          {/* About */}
          <div className="rounded bg-gray-100 px-8 py-10 sm:px-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] lg:grid-cols-[150px_1fr]">
              {/* Logo */}
              <div className="shrink-0">
                <Image
                  src="/jr-logo-transp.png"
                  alt="Jacob Reitz Painting"
                  width={200}
                  height={200}
                  className="h-auto w-full max-w-36"
                />
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-2xl font-bold lg:text-3xl">
                  {aboutHeading}
                </h2>

                <div className="mt-2 h-px w-10 bg-orange-800" />
              </div>

              {/* Intro spans both columns */}
              <p className="leading-7 text-gray-600 sm:col-span-2">
                {aboutIntro}
              </p>
            </div>
          </div>

          {/* Locations */}
          <div className="p-8">
            <h2 className="mt-5 text-2xl font-bold sm:text-3xl ">
              {locationsHeading}
            </h2>
            {/* <div className="mt-2 h-0.5 w-12 bg-orange-800" /> */}
            <div className="mt-8 space-y-7">
              {serviceAreas.map((area, i) => (
                <div key={i}>
                  <div className="flex items-center gap-5">
                    <div className="h-8 w-px bg-orange-800" />
                    <p className="text-lg font-semibold tracking-wide">
                      {area}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
