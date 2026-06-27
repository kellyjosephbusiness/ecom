import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import categoryData from "@/components/Home/Categories/categoryData";

export const metadata: Metadata = {
  title: "Our Community | Evergreen Senior Living",
  description:
    "Explore the levels of care and lifestyle amenities offered at Evergreen Senior Living.",
};

const groups = [
  {
    kind: "care" as const,
    eyebrow: "Levels of Care",
    title: "Find the Right Level of Care",
    copy: "From an active, independent lifestyle to specialized memory and skilled nursing care, our community supports every stage of the senior-care journey.",
  },
  {
    kind: "amenity" as const,
    eyebrow: "Lifestyle & Amenities",
    title: "Everyday Comforts & Amenities",
    copy: "Restaurant-style dining, wellness programs, transportation, and a full calendar of events make every day feel like home.",
  },
];

const CommunityPage = () => {
  return (
    <>
      <Breadcrumb title="Our Community" pages={["community"]} />

      {groups.map((group, index) => {
        const items = categoryData.filter((item) => item.kind === group.kind);

        return (
          <section
            key={group.kind}
            className={`overflow-hidden py-17.5 ${
              index === 0 ? "" : "border-t border-gray-3"
            }`}
          >
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
              <div className="mb-10 max-w-[600px]">
                <span className="inline-block font-medium text-custom-sm text-blue mb-2.5">
                  {group.eyebrow}
                </span>
                <h2 className="font-semibold text-xl xl:text-heading-5 text-dark mb-3">
                  {group.title}
                </h2>
                <p>{group.copy}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7.5">
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={`/community/${item.slug}`}
                    className="group rounded-xl bg-white shadow-1 p-6 ease-out duration-200 hover:shadow-3"
                  >
                    <div className="bg-[#F2F3F8] rounded-lg h-40 flex items-center justify-center mb-5">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={100}
                        height={75}
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-dark mb-2 group-hover:text-blue">
                      {item.title}
                    </h3>
                    <p className="text-custom-sm text-dark-4 mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-medium text-custom-sm text-blue">
                      Learn more
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L13 6M19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default CommunityPage;
