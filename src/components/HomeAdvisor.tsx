import Image from "next/image";

export default function HomeAdvisor() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 text-center">
        <h2 className="text-2xl font-bold sm:text-4xl">
          We are highly rated at{" "}
          <a
            href="https://www.homeadvisor.com/rated.JacobReitzPainting.48249658.html"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-orange-900"
          >
            Home Advisor
          </a>
          !
        </h2>

        <div className="mx-auto mt-8 flex w-full flex-col items-center gap-6 sm:w-[80%] sm:flex-row sm:justify-between sm:gap-0 lg:w-[60%]">
          <Image
            src="/ha-toprated.jpg"
            alt="Home Advisor Top Rated"
            width={200}
            height={200}
            className="h-32 w-auto object-contain"
          />

          <Image
            src="/boha-2019.jpg"
            alt="Home Advisor Best of 2019"
            width={200}
            height={200}
            className="h-32 w-auto object-contain"
          />

          <Image
            src="/ha-elite.jpg"
            alt="Home Advisor Elite Service"
            width={200}
            height={200}
            className="h-32 w-auto object-contain"
          />
        </div>
        <div className="mx-auto mt-10 w-[90%]">
          <div className="h-px bg-gray-300" />
          <div
            className="h-3 w-full bg-linear-to-b from-black/50 to-transparent"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
