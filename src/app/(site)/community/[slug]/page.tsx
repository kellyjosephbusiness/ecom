import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import categoryData from "@/components/Home/Categories/categoryData";

type Params = { params: Promise<{ slug: string }> };

const getCategory = (slug: string) =>
  categoryData.find((category) => category.slug === slug);

export async function generateStaticParams() {
  return categoryData.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return { title: "Not found | Evergreen Senior Living" };
  }

  return {
    title: `${category.title} | Evergreen Senior Living`,
    description: category.description,
  };
}

const CategoryPage = async ({ params }: Params) => {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const kindLabel = category.kind === "care" ? "Levels of Care" : "Amenities";

  const related = categoryData
    .filter((item) => item.kind === category.kind && item.slug !== category.slug)
    .slice(0, 4);

  return (
    <>
      <Breadcrumb title={category.title} pages={["community", category.title]} />

      <section className="overflow-hidden py-17.5 lg:py-22.5 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 xl:gap-12.5">
            {/* <!-- intro + features --> */}
            <div className="w-full lg:max-w-[570px]">
              <span className="inline-block font-medium text-custom-sm text-blue mb-2.5">
                {kindLabel}
              </span>

              <h2 className="font-semibold text-dark text-xl lg:text-heading-4 xl:text-heading-3 mb-5">
                {category.title}
              </h2>

              <p className="mb-7.5">{category.intro ?? category.description}</p>

              {category.features && category.features.length > 0 && (
                <ul className="flex flex-col gap-4 mb-9">
                  {category.features.map((feature, key) => (
                    <li className="flex items-start gap-3" key={key}>
                      <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5.5 h-5.5 rounded-full bg-blue-light-5 text-blue">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12.5L10 17.5L19 6.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex font-medium text-custom-sm text-white bg-blue py-3 px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark"
                >
                  Schedule a Tour
                </Link>
                <Link
                  href="/community"
                  className="inline-flex font-medium text-custom-sm py-3 px-9.5 rounded-md border border-gray-3 bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
                >
                  All Offerings
                </Link>
              </div>
            </div>

            {/* <!-- image --> */}
            <div className="w-full lg:max-w-[510px]">
              <div className="relative z-1 rounded-xl bg-[#F2F3F8] flex items-center justify-center aspect-[4/3] overflow-hidden">
                <Image
                  src={category.img}
                  alt={category.title}
                  width={300}
                  height={225}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- related offerings --> */}
      {related.length > 0 && (
        <section className="overflow-hidden pb-20">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pt-12.5 border-t border-gray-3">
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark mb-7.5">
              Explore More {kindLabel}
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7.5">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/community/${item.slug}`}
                  className="group rounded-xl bg-white shadow-1 p-5 ease-out duration-200 hover:shadow-3"
                >
                  <div className="bg-[#F2F3F8] rounded-lg h-32.5 flex items-center justify-center mb-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={82}
                      height={62}
                    />
                  </div>
                  <h3 className="font-medium text-dark mb-1.5 group-hover:text-blue">
                    {item.title}
                  </h3>
                  <p className="text-custom-sm text-dark-4">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryPage;
