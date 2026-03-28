export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "DXN লিংজি কফি",
    price: 850,
    description: "গানোডার্মা সমৃদ্ধ প্রিমিয়াম কফি - শক্তি এবং সুস্থতার জন্য",
    image: "https://via.placeholder.com/300x300?text=Lingzhi+Coffee",
    category: "পানীয়",
    benefits: ["শক্তি বৃদ্ধি", "রোগ প্রতিরোধ", "প্রাকৃতিক"],
  },
  {
    id: "2",
    name: "DXN লেমনজি",
    price: 1350,
    description: "লেমন এবং গানোডার্মা সমৃদ্ধ পানীয় - রোগ প্রতিরোধে",
    image: "https://via.placeholder.com/300x300?text=Lemonzhi",
    category: "পানীয়",
    benefits: ["রোগ প্রতিরোধ", "শক্তি", "প্রাকৃতিক"],
  },
  {
    id: "3",
    name: "DXN গানোজি সাবান",
    price: 520,
    description: "গানোডার্মা সমৃদ্ধ প্রাকৃতিক সাবান - ত্বকের যত্নে",
    image: "https://via.placeholder.com/300x300?text=Ganozhi+Soap",
    category: "ত্বকের যত্ন",
    benefits: ["ত্বকের যত্ন", "প্রাকৃতিক উপাদান", "মসৃণ ত্বক"],
  },
  {
    id: "4",
    name: "DXN গানোজি শ্যাম্পু",
    price: 990,
    description: "গানোডার্মা সমৃদ্ধ প্রিমিয়াম শ্যাম্পু - চুলের যত্নে",
    image: "https://via.placeholder.com/300x300?text=Ganozhi+Shampoo",
    category: "চুলের যত্ন",
    benefits: ["চুলের শক্তি", "খুশকি দূর করে", "প্রাকৃতিক"],
  },
  {
    id: "5",
    name: "DXN হেয়ার অয়েল",
    price: 738,
    description: "গানোডার্মা হেয়ার অয়েল - চুলের বৃদ্ধি এবং যত্নে",
    image: "https://via.placeholder.com/300x300?text=Hair+Oil",
    category: "চুলের যত্ন",
    benefits: ["চুলের বৃদ্ধি", "চকচকে করে", "খুশকি দূর করে"],
  },
  {
    id: "6",
    name: "DXN নিম ফেস ওয়াশ",
    price: 400,
    description: "নিম এবং গানোডার্মা সমৃদ্ধ ফেস ওয়াশ - ত্বক পরিষ্কারে",
    image: "https://via.placeholder.com/300x300?text=Neem+Face+Wash",
    category: "ত্বকের যত্ন",
    benefits: ["ত্বক পরিষ্কার", "ব্রণ নিয়ন্ত্রণ", "প্রাকৃতিক"],
  },
  {
    id: "7",
    name: "DXN RG (রেইশি গানো)",
    price: 1200,
    description: "পরিপক্ক গানোডার্মা মাশরুম সাপ্লিমেন্ট - লিভার স্বাস্থ্যের জন্য",
    image: "https://via.placeholder.com/300x300?text=RG+Supplement",
    category: "সাপ্লিমেন্ট",
    benefits: ["বিষমুক্তকরণ", "লিভার স্বাস্থ্য", "শক্তি"],
  },
  {
    id: "8",
    name: "DXN স্পিরুলিনা",
    price: 950,
    description: "প্রাকৃতিক পুষ্টি সমৃদ্ধ সাপ্লিমেন্ট - সম্পূর্ণ খাদ্য",
    image: "https://via.placeholder.com/300x300?text=Spirulina",
    category: "সাপ্লিমেন্ট",
    benefits: ["দৈনন্দিন পুষ্টি", "শক্তি", "সুস্থতা"],
  },
];
