import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evergreen Senior Living | Compassionate Care & Vibrant Community",
  description:
    "Independent living, assisted living, memory care, and more — discover a welcoming senior living community designed around you.",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
