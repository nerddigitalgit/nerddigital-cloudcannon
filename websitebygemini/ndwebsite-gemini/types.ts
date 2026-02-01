export interface Expert {
  id: number;
  name: string;
  role: string;
  image: string;
  company?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
  companyLogo?: string;
}

export interface NavItem {
  label: string;
  href: string;
}