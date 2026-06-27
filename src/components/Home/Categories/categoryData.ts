import { Category } from "@/types/category";

// Senior living offerings, grouped into levels of care and lifestyle amenities.
// Images currently reuse the template's placeholder art — swap the paths under
// /public/images/categories with community photography when available.
const data: Category[] = [
  // ---- Levels of care -------------------------------------------------------
  {
    title: "Independent Living",
    id: 1,
    kind: "care",
    slug: "independent-living",
    img: "/images/categories/categories-01.png",
    description: "Maintenance-free living for active, self-sufficient seniors.",
    intro:
      "Independent Living is designed for active seniors who want a vibrant, maintenance-free lifestyle. Enjoy private residences, a full calendar of social events, and the freedom to live life on your own terms — with helpful services close at hand whenever you want them.",
    features: [
      "Spacious private apartments and cottages",
      "Chef-prepared dining and flexible meal plans",
      "Housekeeping, maintenance, and scheduled transportation",
      "Fitness center, clubs, and daily social activities",
    ],
  },
  {
    title: "Assisted Living",
    id: 2,
    kind: "care",
    slug: "assisted-living",
    img: "/images/categories/categories-02.png",
    description: "Personalized daily support that preserves independence.",
    intro:
      "Assisted Living blends comfortable private residences with personalized, around-the-clock support. Our care team helps with the activities of daily living — bathing, dressing, medication management, and more — so residents keep their independence while getting exactly the help they need.",
    features: [
      "Individualized care plans reviewed regularly",
      "24/7 on-site care staff and emergency response",
      "Medication management and health monitoring",
      "Assistance with bathing, dressing, and daily routines",
    ],
  },
  {
    title: "Memory Care",
    id: 3,
    kind: "care",
    slug: "memory-care",
    img: "/images/categories/categories-03.png",
    description: "Secure, compassionate care for Alzheimer's and dementia.",
    intro:
      "Our Memory Care neighborhood provides a secure, calming environment for residents living with Alzheimer's disease and other forms of dementia. Specially trained caregivers deliver purpose-built programming and compassionate, person-centered support every hour of the day.",
    features: [
      "Secure, easy-to-navigate neighborhood design",
      "Caregivers trained in dementia and memory support",
      "Structured daily routines and sensory programming",
      "Family education and ongoing care coordination",
    ],
  },
  {
    title: "Respite Care",
    id: 4,
    kind: "care",
    slug: "respite-care",
    img: "/images/categories/categories-04.png",
    description: "Short-term stays for recovery or caregiver relief.",
    intro:
      "Respite Care offers fully furnished short-term stays — perfect for recovering after a hospital visit or giving a family caregiver a well-earned break. Residents enjoy the same dining, activities, and personalized care our long-term residents receive.",
    features: [
      "Flexible short-term stays, no long-term commitment",
      "Furnished private accommodations",
      "Full access to dining, activities, and amenities",
      "Personalized care and post-hospital recovery support",
    ],
  },
  {
    title: "Skilled Nursing",
    id: 5,
    kind: "care",
    slug: "skilled-nursing",
    img: "/images/categories/categories-05.png",
    description: "Licensed nursing and rehabilitation services on site.",
    intro:
      "Skilled Nursing provides licensed, round-the-clock medical care and rehabilitation for residents with complex health needs. Our clinical team partners with physicians and therapists to support recovery, manage chronic conditions, and deliver long-term care with dignity.",
    features: [
      "Licensed nurses on site 24 hours a day",
      "Physical, occupational, and speech therapy",
      "Post-surgical and short-term rehabilitation",
      "Coordinated care with physicians and specialists",
    ],
  },
  // ---- Lifestyle amenities --------------------------------------------------
  {
    title: "Dining",
    id: 6,
    kind: "amenity",
    slug: "dining",
    img: "/images/categories/categories-06.png",
    description: "Restaurant-style dining with chef-crafted menus.",
    intro:
      "Dining at our community is a daily highlight. Our culinary team prepares fresh, seasonal menus served restaurant-style, with flexible meal plans and accommodations for every dietary need and preference.",
    features: [
      "Chef-prepared, seasonal menus",
      "Restaurant-style and private dining options",
      "Special diets and nutrition support",
      "All-day café and snacks",
    ],
  },
  {
    title: "Wellness & Fitness",
    id: 7,
    kind: "amenity",
    slug: "wellness-fitness",
    img: "/images/categories/categories-07.png",
    description: "Programs that keep body and mind active.",
    intro:
      "Our Wellness & Fitness program supports healthy aging in body, mind, and spirit. From group exercise classes to on-site therapy and wellness checks, residents have everything they need to stay strong and engaged.",
    features: [
      "Fitness center and group exercise classes",
      "On-site wellness checks and therapy",
      "Walking paths and outdoor spaces",
      "Lifelong-learning and mindfulness programs",
    ],
  },
  {
    title: "Activities & Events",
    id: 8,
    kind: "amenity",
    slug: "activities-events",
    img: "/images/categories/categories-04.png",
    description: "A full calendar of social and cultural events.",
    intro:
      "There is always something to look forward to. Our enrichment team curates a full calendar of social, cultural, and recreational events — from live music and outings to clubs, classes, and celebrations.",
    features: [
      "Daily clubs, classes, and social gatherings",
      "Live entertainment and cultural outings",
      "Hobby studios and game rooms",
      "Holiday and family celebration events",
    ],
  },
  {
    title: "Transportation",
    id: 9,
    kind: "amenity",
    slug: "transportation",
    img: "/images/categories/categories-01.png",
    description: "Scheduled rides to appointments and outings.",
    intro:
      "Getting where you need to go is simple. Our scheduled transportation service takes residents to medical appointments, shopping, and group outings — safely and on time, with assistance every step of the way.",
    features: [
      "Scheduled rides to medical appointments",
      "Group outings and shopping trips",
      "Accessible, professionally driven vehicles",
      "Door-to-door assistance",
    ],
  },
  {
    title: "Housekeeping",
    id: 10,
    kind: "amenity",
    slug: "housekeeping",
    img: "/images/categories/categories-02.png",
    description: "Weekly housekeeping, laundry, and maintenance.",
    intro:
      "Spend your time on what matters most. Our housekeeping and maintenance team handles weekly cleaning, linens, laundry, and home upkeep so residences always feel fresh and worry-free.",
    features: [
      "Weekly housekeeping and linen service",
      "Personal laundry options",
      "Prompt apartment maintenance",
      "Grounds keeping and common-area care",
    ],
  },
];

export default data;
