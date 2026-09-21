import Image from "next/image";

export default function Locations() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          {/* About */}
          <div className="bg-gray-100 px-8 py-10 sm:px-10 rounded">
            <div className="grid gap-8 sm:grid-cols-[160px_1fr] md:grid-cols-[190px_1fr] lg:grid-cols-[200px_1fr]">
              {/* Logo */}
              <div className="w-32 shrink-0 sm:w-40 md:w-44 lg:w-48">
                <Image
                  src="/jr-painting.png"
                  alt="Jacob Reitz Painting"
                  width={200}
                  height={200}
                  className="h-auto w-full"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  One of Southern California&apos;s Leading Paint Services
                </h2>

                <div className="mt-2 h-0.5 w-12 bg-orange-800" />

                <p className="mt-6 leading-7 text-gray-600">
                  Being one of the top in our field means that we are committed
                  to every project, we have the experience to make your vision a
                  reality and we make every client happy.
                </p>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="p-8">
            <h2 className="mt-5 text-2xl font-bold sm:text-3xl ">
              Where We Work
            </h2>
            {/* <div className="mt-2 h-0.5 w-12 bg-orange-800" /> */}
            <div className="mt-8 space-y-7">
              <div className="flex items-center gap-5">
                <div className="h-8 w-0.5 bg-orange-800" />
                <p className="text-lg font-semibold tracking-wide">
                  Southern California
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="h-8 w-0.5 bg-orange-800" />
                <p className="text-lg font-semibold tracking-wide">
                  Houston Gulf Coast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
