import { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact IGLOBLE TECHNOLOGIES | Mechanical Design Services, Akurdi, Pune",
  description: "Contact IGLOBLE TECHNOLOGIES for mechanical product design, CAD modeling, FEA analysis and engineering drawings. Office in Akurdi, Pune. Call +91 96654 10263, Monday to Friday, 10:00–20:00.",
};

export default function ContactPage() {
  return <ContactContent />;
}