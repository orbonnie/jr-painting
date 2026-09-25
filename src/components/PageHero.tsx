import Link from "next/link";

type PageHeroProps = {
  title: string;
};

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className="relative h-64">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/paintbrush.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6 lg:justify-start">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {title}
          </h1>

          <div className="mt-4 text-sm text-white">
            <Link href="/" className="hover:text-orange-700">
              Home
            </Link>

            <span className="mx-2 text-orange-800 font-bold">›</span>

            <span className="text-orange-800 font-bold">{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
