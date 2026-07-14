export const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "RTO Management System",
        href: "/products/rto-mis",
        description: "Complete digital platform for Regional Transport Offices",
        icon: "Car",
      },
      {
        label: "All Products",
        href: "/products",
        description: "View our full product portfolio",
        icon: "LayoutGrid",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Software Development", href: "/services#custom-software", description: "Tailored enterprise solutions", icon: "Code2" },
      { label: "ERP Development", href: "/services#erp", description: "End-to-end ERP systems", icon: "Database" },
      { label: "GIS Solutions", href: "/services#gis", description: "Geospatial intelligence platforms", icon: "Map" },
      { label: "Mobile & Web Apps", href: "/services#mobile-web", description: "Cross-platform applications", icon: "Smartphone" },
      { label: "AI Solutions", href: "/services#ai", description: "Machine learning & automation", icon: "Brain" },
      { label: "Government Projects", href: "/services#government", description: "Digital transformation for public sector", icon: "Building2" },
      { label: "AMC & Support", href: "/services#amc", description: "Annual maintenance contracts", icon: "Wrench" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Government & Public Sector", href: "/industries#government", description: "", icon: "Building2" },
      { label: "Transport & RTO", href: "/industries#transport", description: "", icon: "Car" },
      { label: "Education", href: "/industries#education", description: "", icon: "GraduationCap" },
      { label: "Healthcare", href: "/industries#healthcare", description: "", icon: "Heart" },
      { label: "Smart City", href: "/industries#smart-city", description: "", icon: "Globe" },
      { label: "Manufacturing", href: "/industries#manufacturing", description: "", icon: "Factory" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", description: "Our story, mission, and values", icon: "Users" },
      { label: "Our Team", href: "/team", description: "The people building iTechQu", icon: "Users" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  products: [
    { label: "RTO Management System", href: "/products/rto-mis" },
    { label: "All Products", href: "/products" },
  ],
  services: [
    { label: "Custom Software", href: "/services#custom-software" },
    { label: "ERP Development", href: "/services#erp" },
    { label: "GIS Solutions", href: "/services#gis" },
    { label: "Mobile & Web Apps", href: "/services#mobile-web" },
    { label: "AI Solutions", href: "/services#ai" },
    { label: "Government Projects", href: "/services#government" },
    { label: "AMC & Support", href: "/services#amc" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "FAQ", href: "/faq" },
  ],
};
