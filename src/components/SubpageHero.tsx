import Link from "next/link";
import { services } from "@/data/services";

type SubpageHeroProps = {
  title: string;
  parent: string;
  parentHref: string;
  showServiceNav?: boolean;
};

export default function SubpageHero({
  title,
  parent,
  parentHref,
  showServiceNav = false,
}: SubpageHeroProps) {
  return (
    <section className=" bg-grey-800">
      <div className="mx-auto flex min-h-60 max-w-6xl flex-col px-10 pt-16 md:px-20">
        <h1 className="text-5xl text-white font-semibold sm:text-4xl">
          {title}
        </h1>
        <div className="mt-3 text-sm text-white">
          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>

          <span className="mx-2">›</span>

          <Link href={parentHref} className="hover:text-orange-600">
            {parent}
          </Link>

          <span className="mx-2 text-orange-800">›</span>

          <span className="text-orange-800">{title}</span>
        </div>
        {/* Service navigation */}
        {showServiceNav && (
          <nav className="mt-auto border-t border-grey-300/20">
            <div className="flex flex-wrap gap-x-8 gap-y-3 py-4">
              {services.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    item.slug === title.toLowerCase()
                      ? "text-orange-800"
                      : "text-white hover:text-orange-600"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
