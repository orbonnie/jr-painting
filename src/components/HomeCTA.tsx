import { Users, Gem, History, Heart } from "lucide-react";
import { Feature } from "../../types";

const iconMap = {
  Users,
  Gem,
  History,
  Heart,
};

// const features = [
//   {
//     title: "Professional Service",
//     description:
//       "Our team of professionals will help turn your vision into a reality.",
//     icon: Users,
//   },
//   {
//     title: "We deliver quality",
//     description:
//       "Quality workmanship and an attention to detail are cornerstones of our business.",
//     icon: Gem,
//   },
//   {
//     title: "Always on time",
//     description:
//       "You can expect our crew to arrive on time and finish projects within the timeframe discussed.",
//     icon: History,
//   },
//   {
//     title: "We Care",
//     description:
//       "We treat our customers and their projects with the same care and professionalism that we would our own families.",
//     icon: Heart,
//   },
// ];

export default function HomeCTA({
  features,
  heading,
  button,
  link,
}: {
  features: Feature[];
  heading: string;
  button: string;
  link: string;
}) {
  return (
    <section className="bg-white">
      {/* CTA */}
      <div className="bg-orange-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-evenly sm:text-left">
          <h3 className="text-2xl text-gray-900">
            Do you need professionals to scope out your project?
          </h3>

          <a
            href="/contact"
            className="shrink-0 bg-gray-700 px-5 py-4 text-sm rounded-sm text-white transition hover:bg-gray-800"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <div key={feature.title} className="text-center">
                <Icon
                  size={42}
                  strokeWidth={1.25}
                  className="mx-auto text-orange-800 stroke-1"
                />

                <h3 className="mt-5 text-lg uppercase">{feature.title}</h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-800">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
