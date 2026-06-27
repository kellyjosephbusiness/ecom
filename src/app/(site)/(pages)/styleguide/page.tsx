import { Metadata } from "next";
import CommunityCard from "@/components/directory/CommunityCard";
import StarRating from "@/components/directory/StarRating";
import CostComparison from "@/components/directory/CostComparison";
import FaqList from "@/components/directory/FaqList";
import LeadForm from "@/components/directory/LeadForm";
import { CommunityCardData } from "@/types/directory";

export const metadata: Metadata = { title: "Directory components — styleguide" };

// Internal styleguide to preview the reusable directory components.
// Remove (or gate) before launch.
const sampleFacilities: CommunityCardData[] = [
  {
    name: "Sunny Meadows Assisted Living",
    href: "/community/sunny-meadows",
    tagline: "Warm, family-style assisted living with 24/7 on-site nursing.",
    city: "Austin",
    state: "TX",
    careTypes: ["Assisted Living", "Memory Care"],
    logoUrl: "/images/products/product-1-bg-1.png",
    rating: 4.6,
    startingMonthlyCost: 4200,
    featured: true,
  },
  {
    name: "Cedar Grove Memory Care",
    href: "/community/cedar-grove",
    tagline: "Specialized memory care in a secure, calming setting.",
    city: "Dallas",
    state: "TX",
    careTypes: ["Memory Care"],
    logoUrl: "/images/products/product-2-bg-1.png",
    rating: 4.2,
    startingMonthlyCost: 5300,
  },
  {
    name: "Lakeside Senior Living",
    href: "/community/lakeside",
    tagline: "Independent and assisted living by the water.",
    city: "Houston",
    state: "TX",
    careTypes: ["Independent Living", "Assisted Living"],
    logoUrl: "/images/products/product-3-bg-1.png",
    rating: 3.9,
    startingMonthlyCost: 3800,
  },
];

const h2 = "mb-4 text-lg font-semibold text-dark";

export default function StyleguidePage() {
  return (
    <main className="bg-gray-2 py-16">
      <div className="mx-auto max-w-[1170px] space-y-12 px-4 sm:px-8 xl:px-0">
        <h1 className="text-2xl font-bold text-dark">Directory components</h1>

        <section>
          <h2 className={h2}>Community cards</h2>
          <div className="grid gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
            {sampleFacilities.map((f) => (
              <CommunityCard key={f.name} facility={f} />
            ))}
          </div>
        </section>

        <div className="grid gap-7.5 lg:grid-cols-2">
          <section>
            <h2 className={h2}>Star rating (with subcategory bars)</h2>
            <div className="rounded-xl bg-white p-6 shadow-1">
              <StarRating
                overall={4.3}
                subcategories={[
                  { label: "Staff", score: 4.5 },
                  { label: "Cleanliness", score: 4.1 },
                  { label: "Care", score: 4.2 },
                  { label: "Food", score: 3.8 },
                  { label: "Activities", score: 4.6 },
                ]}
              />
            </div>
          </section>

          <section>
            <h2 className={h2}>Cost comparison</h2>
            <CostComparison
              rows={[
                { name: "Sunny Meadows", startingMonthlyCost: 4200, highlight: true },
                { name: "Cedar Grove", startingMonthlyCost: 5300 },
                { name: "Lakeside", startingMonthlyCost: 3800 },
              ]}
            />
          </section>

          <section>
            <h2 className={h2}>FAQ</h2>
            <FaqList
              items={[
                {
                  question: "What is assisted living?",
                  answer:
                    "Assisted living provides housing, meals, and help with daily activities while supporting independence.",
                },
                {
                  question: "How much does it typically cost?",
                  answer:
                    "Costs vary by location and care level; this directory shows each community's starting monthly price.",
                },
                {
                  question: "Is memory care available?",
                  answer:
                    "Many communities offer dedicated, secure memory care for residents with Alzheimer's or dementia.",
                },
              ]}
            />
          </section>

          <section>
            <h2 className={h2}>Lead form</h2>
            <LeadForm facilityName="Sunny Meadows Assisted Living" />
          </section>
        </div>
      </div>
    </main>
  );
}
