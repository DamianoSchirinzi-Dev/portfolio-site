import { Zap, Star, Shield } from "lucide-react";

export const services = [
  {
    name: "Starter Website",
    subtitle: "Front-End Only",
    price: "£750 – £1,200",
    description:
      "Perfect for small businesses, personal brands, and portfolios looking to establish their online presence.",
    features: [
      "Custom-designed responsive website (up to 5 pages)",
      "Built with modern frameworks (Vue.js, React, or Next.js)",
      "Mobile & tablet optimisation",
      "Basic SEO setup",
      "Fast loading times (Lighthouse score optimisation)",
      "Contact form with email notifications",
      "Social media linking",
    ],
    icon: Zap,
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Website with CMS",
    subtitle: "Content Management System",
    price: "£1,500 – £2,800",
    description:
      "Ideal for businesses that need to update content regularly without any coding knowledge. This package provides a user-friendly interface for managing site content.",
    features: [
      "Everything in Starter Website",
      "CMS setup (Sanity, Strapi, or WordPress Headless)",
      "Dynamic pages (blogs, product listings, news updates)",
      "Custom admin dashboard",
      "Image and file uploads",
      "CMS training session (1 hour via video call)",
    ],
    icon: Star,
    popular: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Full Service Package",
    subtitle: "Website + CMS + Ongoing Support",
    price: "£2,500 – £4,500",
    monthlyPrice: "£150 – £500/month",
    description:
      "Complete solution for businesses wanting a long-term partnership for continuous growth and support.",
    features: [
      "Everything in Website with CMS Integration",
      "Priority bug fixing & updates",
      "Monthly site performance & SEO reports",
      "Minor content/design changes each month",
      "Plugin/module updates",
      "Security monitoring",
      "Hosting & domain management (optional)",
    ],
    icon: Shield,
    popular: false,
    gradient: "from-emerald-500 to-teal-500",
  },
];
