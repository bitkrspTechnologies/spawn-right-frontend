import { CustomersSection } from "@/components/ui/customers-section";

const customers = [
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Nvidia Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/column.svg",
    alt: "Column Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/github.svg",
    alt: "GitHub Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nike.svg",
    alt: "Nike Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
    alt: "Lemon Squeezy Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/laravel.svg",
    alt: "Laravel Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/lilly.svg",
    alt: "Lilly Logo",
    height: 28,
  },
  {
    src: "https://html.tailus.io/blocks/customers/openai.svg",
    alt: "OpenAI Logo",
    height: 24,
  },

// {
//     src: "/images/trustedby/com1.svg",
//     alt: "NA",
//     height: 24,
//   },
//   {
//     src: "/images/trustedby/com2.svg",
//     alt: "NA",
//     height: 24,
//   },
//   {
//     src: "/images/trustedby/com3.svg",
//     alt: "NA",
//     height: 24,
//   },
//   {
//     src: "/images/trustedby/com4.svg",
//     alt: "NA",
//     height: 24,
//   },
//   {
//     src: "/images/trustedby/com5.svg",
//     alt: "NA",
//     height: 30,
//   },

];

export function CustomersSectionDemo() {
  return (
    <CustomersSection customers={customers} />
  );
}