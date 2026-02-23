import type { StaticImageData } from "next/image";

import waterpikImg from "@/images/waterpik.jpg";
import acrostoneDentalImg from "@/images/Acrostone Dental.jpg";
import acrostoneLabImg from "@/images/Acrostone Laboratory.jpeg";
import dharmaImg from "@/images/dharma.jpeg";
import glovesImg from "@/images/gloves.png";
import medisporexImg from "@/images/medisporex_tools.jpg";
import septodontImg from "@/images/Septodont.jpeg";
import trentDentImg from "@/images/trentDent.jpeg";

export type ProductCategory =
  | "Waterpik"
  | "Acrostone Dental"
  | "Acrostone Laboratory"
  | "Dharma"
  | "Gloves"
  | "Medisporex"
  | "Septodont"
  | "TrentDent"
  | "Elegant Dent";

export type ProductType = "Consumer" | "Professional" | "Laboratory" | "Disposables";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  type: ProductType;
  image: StaticImageData;
  /** Price in EGP (Egyptian Pounds). Omit for "Contact for price". */
  price?: number;
  /** Star rating 0–5 (e.g. 4.5). Omit to hide rating. */
  rating?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Waterpik Cordless Advanced",
    description: "Portable water flosser for on the go oral care. Rechargeable and travel-friendly.",
    category: "Waterpik",
    type: "Consumer",
    image: waterpikImg,
    price: 2499,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Waterpik Complete Care 9.0",
    description: "Sonic toothbrush and water flosser in one. Complete oral care system for daily use.",
    category: "Waterpik",
    type: "Consumer",
    image: waterpikImg,
    price: 3299,
    rating: 4.6,
  },
  {
    id: "3",
    name: "Professional Composite Kit",
    description: "Complete composite restoration system. High-quality materials for lasting restorations.",
    category: "Acrostone Dental",
    type: "Professional",
    image: acrostoneDentalImg,
    price: 1850,
    rating: 4.9,
  },
  {
    id: "4",
    name: "Dental Impression Material",
    description: "High-precision silicone impression material for accurate molds and prosthetics.",
    category: "Acrostone Dental",
    type: "Professional",
    image: acrostoneDentalImg,
    price: 720,
    rating: 4.5,
  },
  {
    id: "5",
    name: "Acrylic Teeth Set",
    description: "Premium quality acrylic teeth for dentures and restorative applications.",
    category: "Acrostone Laboratory",
    type: "Laboratory",
    image: acrostoneLabImg,
    price: 450,
    rating: 4.4,
  },
  {
    id: "6",
    name: "Lab Polishing Kit",
    description: "Complete polishing system for dental laboratory work and finishing.",
    category: "Acrostone Laboratory",
    type: "Laboratory",
    image: acrostoneLabImg,
    price: 1200,
    rating: 4.7,
  },
  {
    id: "7",
    name: "Dharma Diamond Burs",
    description: "High-quality diamond burs for precision cutting and shaping in restorative work.",
    category: "Dharma",
    type: "Professional",
    image: dharmaImg,
    price: 890,
    rating: 4.8,
  },
  {
    id: "8",
    name: "Nitrile Examination Gloves",
    description: "Premium powder-free nitrile gloves. Latex-free, comfortable fit for extended use.",
    category: "Gloves",
    type: "Disposables",
    image: glovesImg,
    price: 95,
    rating: 4.3,
  },
  {
    id: "9",
    name: "Latex Surgical Gloves",
    description: "Sterile latex gloves for surgical procedures. Reliable barrier protection.",
    category: "Gloves",
    type: "Disposables",
    image: glovesImg,
    price: 75,
    rating: 4.2,
  },
  {
    id: "10",
    name: "Sterilization Pouches",
    description: "Self-sealing sterilization pouches for instruments. Clear visibility and secure seal.",
    category: "Medisporex",
    type: "Disposables",
    image: medisporexImg,
    price: 180,
    rating: 4.6,
  },
  {
    id: "11",
    name: "Septanest Anesthetic",
    description: "Fast-acting articaine-based dental anesthesia solution for efficient pain control.",
    category: "Septodont",
    type: "Professional",
    image: septodontImg,
    price: 420,
    rating: 4.9,
  },
  {
    id: "12",
    name: "Biodentine",
    description: "Bioactive dentin substitute for restorative dentistry. Excellent biocompatibility.",
    category: "Septodont",
    type: "Professional",
    image: septodontImg,
    price: 1350,
    rating: 4.7,
  },
  {
    id: "13",
    name: "TrentDent Bonding Agent",
    description: "Universal bonding agent for composite restorations. Strong, reliable adhesion.",
    category: "TrentDent",
    type: "Professional",
    image: trentDentImg,
    price: 680,
    rating: 4.5,
  },
  {
    id: "14",
    name: "Elegant Dent Composite",
    description: "High-aesthetic nano-hybrid composite for anterior and posterior restorations.",
    category: "Elegant Dent",
    type: "Professional",
    image: acrostoneDentalImg,
    price: 950,
    rating: 4.6,
  },
];

export const categories: ProductCategory[] = [
  "Waterpik",
  "Acrostone Dental",
  "Acrostone Laboratory",
  "Dharma",
  "Gloves",
  "Medisporex",
  "Septodont",
  "TrentDent",
  "Elegant Dent",
];

export const productTypes: ProductType[] = ["Consumer", "Professional", "Laboratory", "Disposables"];
