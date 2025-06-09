"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/ShopRight/Navbar/Navbar";
import { X, ChevronDown, ChevronUp, Star, Battery, Camera, Cpu, HardDrive, Smartphone, Package, Truck, CreditCard, Shield, Award, Clock, Zap, Volume2, Mouse, Keyboard, Headphones, Monitor } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AdForLeaderBoard from "@/components/Leaderboard/AdForLeaderBoard";

const iconMap = {
  'product_title': <Smartphone className="h-4 w-4 mr-2" />,
  'price': <CreditCard className="h-4 w-4 mr-2" />,
  'rating': <Star className="h-4 w-4 mr-2" />,
  'ram': <HardDrive className="h-4 w-4 mr-2" />,
  'cpu': <Cpu className="h-4 w-4 mr-2" />,
  'battery': <Battery className="h-4 w-4 mr-2" />,
  'display': <Monitor className="h-4 w-4 mr-2" />,
  'camera': <Camera className="h-4 w-4 mr-2" />,
  'delivery': <Truck className="h-4 w-4 mr-2" />,
  'availability': <Package className="h-4 w-4 mr-2" />,
  'features': <Award className="h-4 w-4 mr-2" />,
  'sound': <Volume2 className="h-4 w-4 mr-2" />,
  'charging': <Zap className="h-4 w-4 mr-2" />,
  'warranty': <Shield className="h-4 w-4 mr-2" />,
  'performance': <Cpu className="h-4 w-4 mr-2" />,
  'dpi': <Mouse className="h-4 w-4 mr-2" />,
  'connectivity': <Keyboard className="h-4 w-4 mr-2" />,
  'sensor': <Mouse className="h-4 w-4 mr-2" />,
  'buttons': <Mouse className="h-4 w-4 mr-2" />,
  'weight': <Package className="h-4 w-4 mr-2" />,
};

const getProductType = (product) => {
  if (product.category_path?.some(item => item.name.toLowerCase().includes('mouse'))) {
    return 'mouse';
  }
  if (product.category_path?.some(item => item.name.toLowerCase().includes('keyboard'))) {
    return 'keyboard';
  }
  if (product.category_path?.some(item => item.name.toLowerCase().includes('headphone') || item.name.toLowerCase().includes('earphone'))) {
    return 'headphones';
  }
  if (product.category_path?.some(item => item.name.toLowerCase().includes('monitor') || item.name.toLowerCase().includes('display'))) {
    return 'monitor';
  }
  if (product.category_path?.some(item => item.name.toLowerCase().includes('phone') || item.name.toLowerCase().includes('mobile'))) {
    return 'mobile';
  }
  return 'other';
};

const getComparisonSections = (products) => {
  if (products.length === 0) return [];

  const productType = getProductType(products[0]);

  const commonSections = [
    {
      title: "Overview",
      icon: <Smartphone className="h-4 w-4 mr-2" />,
      fields: [
        { key: "product_title", label: "Product Name" },
        { key: "product_price", label: "Price" },
        { key: "product_original_price", label: "Original Price" },
        { key: "product_star_rating", label: "Rating" },
        { key: "product_num_ratings", label: "Total Ratings" },
        { key: "sales_volume", label: "Sales Volume" },
        { key: "product_availability", label: "Availability" },
        { key: "is_prime", label: "Prime Eligible" },
        { key: "primary_delivery_time", label: "Delivery Time" },
      ]
    }
  ];

  const typeSpecificSections = {
    mobile: [
      {
        title: "Specifications",
        icon: <Cpu className="h-4 w-4 mr-2" />,
        fields: [
          { key: "product_details.RAM Memory Installed Size", label: "RAM" },
          { key: "product_details.CPU Model", label: "Processor" },
          { key: "product_details.CPU Speed", label: "Processor Speed" },
          { key: "product_information.Battery Power Rating", label: "Battery (mAh)" },
          { key: "product_information.Resolution", label: "Display Resolution" },
          { key: "product_information.Item Weight", label: "Weight" },
          { key: "product_information.OS", label: "Operating System" },
          { key: "product_information.Colour", label: "Color" },
          { key: "product_information.Product Dimensions", label: "Dimensions" },
        ]
      },
      {
        title: "Features",
        icon: <Award className="h-4 w-4 mr-2" />,
        fields: [
          { key: "product_information.Special features", label: "Key Features" },
          { key: "product_information.Connectivity technologies", label: "Connectivity" },
          { key: "product_information.Audio Jack", label: "Audio Jack" },
          { key: "product_information.GPS", label: "GPS" },
          { key: "product_information.Form factor", label: "Form Factor" },
          { key: "product_information.Other display features", label: "Display Features" },
        ]
      },
      {
        title: "Multimedia",
        icon: <Camera className="h-4 w-4 mr-2" />,
        fields: [
          { key: "product_information.Camera", label: "Camera Features" },
          { key: "product_information.Display", label: "Display Type" },
          { key: "product_information.Speakers", label: "Speaker Type" },
        ]
      }
    ],
    mouse: [
      {
        title: "Specifications",
        icon: <Mouse className="h-4 w-4 mr-2" />,
        fields: [
          { key: "product_details.Connectivity Technology", label: "Connectivity" },
          { key: "product_details.Movement Detection Technology", label: "Sensor Type" },
          { key: "product_details.Special Feature", label: "Special Features" },
          { key: "product_information.Item Weight", label: "Weight" },
          { key: "product_information.Colour", label: "Color" },
          { key: "product_information.Product Dimensions", label: "Dimensions" },
        ]
      },
      {
        title: "Features",
        icon: <Award className="h-4 w-4 mr-2" />,
        fields: [
          { key: "about_product.1", label: "Connection Type" },
          { key: "about_product.2", label: "DPI Range" },
          { key: "about_product.5", label: "Buttons" },
          { key: "about_product.6", label: "Surface Compatibility" },
          { key: "about_product.8", label: "Noise Level" },
        ]
      }
    ],
    keyboard: [
      {
        title: "Specifications",
        icon: <Keyboard className="h-4 w-4 mr-2" />,
        fields: [
          { key: "product_details.Connectivity Technology", label: "Connectivity" },
          { key: "product_details.Special Feature", label: "Special Features" },
          { key: "product_information.Item Weight", label: "Weight" },
          { key: "product_information.Colour", label: "Color" },
          { key: "product_information.Product Dimensions", label: "Dimensions" },
        ]
      },
      {
        title: "Features",
        icon: <Award className="h-4 w-4 mr-2" />,
        fields: [
          { key: "about_product.0", label: "Design" },
          { key: "about_product.1", label: "Key Features" },
          { key: "about_product.2", label: "Switch Type" },
          { key: "about_product.3", label: "Backlight" },
        ]
      }
    ],
    headphones: [
      {
        title: "Specifications",
        icon: <Headphones className="h-4 w-4 mr-2" />,
        fields: [
          { key: "product_details.Connectivity Technology", label: "Connectivity" },
          { key: "product_details.Special Feature", label: "Special Features" },
          { key: "product_information.Item Weight", label: "Weight" },
          { key: "product_information.Colour", label: "Color" },
          { key: "product_information.Product Dimensions", label: "Dimensions" },
          { key: "product_information.Battery Power Rating", label: "Battery Life" },
        ]
      },
      {
        title: "Features",
        icon: <Award className="h-4 w-4 mr-2" />,
        fields: [
          { key: "about_product.0", label: "Design" },
          { key: "about_product.1", label: "Sound Quality" },
          { key: "about_product.2", label: "Noise Cancellation" },
          { key: "about_product.3", label: "Microphone" },
        ]
      }
    ],
    monitor: [
      {
        title: "Specifications",
        icon: <Monitor className="h-4 w-4 mr-2" />,
        fields: [
          { key: "product_details.Screen Size", label: "Screen Size" },
          { key: "product_details.Resolution", label: "Resolution" },
          { key: "product_details.Special Feature", label: "Special Features" },
          { key: "product_information.Item Weight", label: "Weight" },
          { key: "product_information.Colour", label: "Color" },
          { key: "product_information.Product Dimensions", label: "Dimensions" },
        ]
      },
      {
        title: "Features",
        icon: <Award className="h-4 w-4 mr-2" />,
        fields: [
          { key: "about_product.0", label: "Display Type" },
          { key: "about_product.1", label: "Refresh Rate" },
          { key: "about_product.2", label: "Response Time" },
          { key: "about_product.3", label: "Ports" },
        ]
      }
    ],
    other: [
      {
        title: "Details",
        icon: <Package className="h-4 w-4 mr-2" />,
        fields: [
          { key: "product_information.Item Weight", label: "Weight" },
          { key: "product_information.Colour", label: "Color" },
          { key: "product_information.Product Dimensions", label: "Dimensions" },
        ]
      },
      {
        title: "Features",
        icon: <Award className="h-4 w-4 mr-2" />,
        fields: products[0].about_product?.slice(0, 5).map((_, index) => ({
          key: `about_product.${index}`,
          label: `Feature ${index + 1}`
        })) || []
      }
    ]
  };

  const commonEndSections = [
    {
      title: "About Product",
      icon: <Smartphone className="h-4 w-4 mr-2" />,
      fields: products[0].about_product?.map((_, index) => ({
        key: `about_product.${index}`,
        label: `Feature ${index + 1}`
      })) || []
    }
  ];

  return [
    ...commonSections,
    ...(typeSpecificSections[productType] || typeSpecificSections.other),
    ...commonEndSections
  ];
};

export default function CompareAll() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [comparisonSections, setComparisonSections] = useState([]);
  const [activeSection, setActiveSection] = useState('Overview');

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("compareProducts") || "[]");
    setSelectedProducts(products);
    prepareComparisonData(products);
  }, []);

  const prepareComparisonData = (products) => {
    if (products.length === 0) {
      setComparisonSections([]);
      return;
    }

    const sections = getComparisonSections(products);

    const formattedSections = sections.map(section => ({
      ...section,
      data: section.fields.map(field => ({
        ...field,
        values: products.map(product => {
          const keys = field.key.split('.');
          let value = product;
          for (const key of keys) {
            value = value?.[key];
            if (value === undefined) break;
          }

          if (field.key === "product_star_rating") {
            return value ? `${value} ★` : "--";
          }
          if (field.key === "is_prime") {
            return value ? "Yes" : "No";
          }
          if (typeof value === 'boolean') {
            return value ? "Yes" : "No";
          }
          if (Array.isArray(value)) {
            return value.join(', ');
          }
          return value || "--";
        })
      }))
    }));

    setComparisonSections(formattedSections);
  };

  const removeProduct = (asin) => {
    const updatedProducts = selectedProducts.filter((p) => p.asin !== asin);
    setSelectedProducts(updatedProducts);
    localStorage.setItem("compareProducts", JSON.stringify(updatedProducts));
    prepareComparisonData(updatedProducts);
  };

  const clearAll = () => {
    setSelectedProducts([]);
    setComparisonSections([]);
    localStorage.removeItem("compareProducts");
  };

  const toggleSection = (title) => {
    setActiveSection(title);
  };

  // Mobile view - Side-by-side comparison with horizontal scrolling
  const MobileComparisonView = () => {
    const currentSection = comparisonSections.find(section => section.title === activeSection) || comparisonSections[0];

    return (
      <div className="space-y-4">
        {/* Section selector */}
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          {comparisonSections.map((section) => (
            <button
              key={section.title}
              onClick={() => toggleSection(section.title)}
              className={cn(
                "flex-shrink-0 px-3 py-2 text-sm font-medium rounded-md mr-2",
                activeSection === section.title
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              )}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Products header with horizontal scrolling */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 scrollbar-hide">
            {selectedProducts.map((product) => (
              <div key={product.asin} className="flex-shrink-0 w-48 mr-4 relative">
                <div className="bg-gray-800 rounded-lg p-3 h-full">
                  <button
                    onClick={() => removeProduct(product.asin)}
                    className="absolute top-1 right-1 text-gray-400 hover:text-white z-10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="h-32 w-full bg-gray-700 rounded mb-2 relative">
                    <Image
                      src={product.product_photo}
                      alt={product.product_title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <h4 className="text-sm font-medium line-clamp-2 mb-1">
                    {product.product_title}
                  </h4>
                  <div className="flex items-center mb-2">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xs text-gray-300">
                      {product.product_star_rating || "N/A"} ({product.product_num_ratings || "0"})
                    </span>
                  </div>
                  <div className="text-sm font-bold text-purple-400">
                    {product.product_price}
                  </div>
                  <a
                    href={product.product_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block py-1 mt-2 text-xs border font-medium rounded-sm text-center",
                      "border-[#4D32AA] text-[#FF1ADF]",
                      "hover:border-[#9D0A88] transition-all"
                    )}
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        {currentSection && (
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            {currentSection.data.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  "p-3 border-b border-gray-800",
                  rowIndex % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                )}
              >
                <div className="text-xs font-medium text-gray-400 mb-1">
                  {row.label}
                </div>
                <div className="flex overflow-x-auto scrollbar-hide">
                  {row.values.map((value, i) => (
                    <div key={i} className="flex-shrink-0 w-48 pr-4">
                      <div className="text-sm text-white">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Desktop view - Comparison table
  const DesktopComparisonView = () => (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 px-4 py-3 text-left text-sm font-medium text-gray-700">
                Features
              </th>
              {selectedProducts.map((product, index) => (
                <th key={index} className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 bg-gray-200 rounded flex-shrink-0 relative">
                      <Image
                        src={product.product_photo}
                        alt={product.product_title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Product {index + 1}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {comparisonSections.map((section, sectionIndex) => (
              <>
                <tr key={`section-${sectionIndex}`} className="bg-gray-50">
                  <td colSpan={selectedProducts.length + 1} className="px-4 py-2">
                    <div className="flex items-center font-medium text-gray-800">
                      {section.icon}
                      {section.title}
                    </div>
                  </td>
                </tr>
                {section.data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-blue-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        {iconMap[row.label.toLowerCase().split(' ')[0]] || <span className="w-4 h-4 mr-2"></span>}
                        {row.label}
                      </div>
                    </td>
                    {row.values.map((value, i) => (
                      <td key={i} className="px-4 py-3 text-sm text-gray-700">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="relative w-full h-full overflow-y-auto scrollbar-hide">
        {!isMobile && (
          <div className="fixed right-0 top-16 bottom-0 w-[350px] flex flex-col gap-4 p-4 z-10">
            <AdForLeaderBoard />
            <AdForLeaderBoard />
          </div>
        )}
        <div
          className={`pt-16 ${isMobile ? "" : "pr-[350px] pl-5"}`}
          style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}
        >
          <div className={`flex-1 mt-12 mb-5 overflow-y-auto ${isMobile ? "" : ""}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Product Comparison</h2>
              {selectedProducts.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-purple-500 hover:text-purple-400 text-xs font-medium flex items-center cursor-pointer"
                  disabled={selectedProducts.length === 0}
                >
                  <X className="h-3 w-3 mr-1 " />
                  CLEAR ALL
                </button>
              )}
            </div>

            {selectedProducts.length > 0 ? (
              isMobile ? (
                <MobileComparisonView />
              ) : (
                <DesktopComparisonView />
              )
            ) : (
              <div className={`text-center py-10 ${isMobile ? "" : "px-6"}`}>
                <h3 className="text-lg font-medium text-white mb-2">
                  No products selected for comparison
                </h3>
                <p className="text-gray-400 mb-4">
                  Add products to compare from the product pages
                </p>
                <Button
                  variant="outline"
                  className="text-white border-white cursor-pointer"
                  onClick={() => window.history.back()}
                >
                  Go Back to Products
                </Button>
              </div>
            )}
          </div>
          <Footer />
        </div>

      </div>
    </>
  );
}