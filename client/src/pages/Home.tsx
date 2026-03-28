import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Plus } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { Link } from "wouter";

export default function Home() {
  const { addToCart, getTotalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("সব");

  const categories = ["সব", "পানীয়", "ত্বকের যত্ন", "চুলের যত্ন", "সাপ্লিমেন্ট"];
  const filteredProducts =
    selectedCategory === "সব"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-amber-100 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍄</span>
            <h1 className="text-xl font-bold text-amber-900">DXN</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-amber-700 hover:text-amber-900">
              পণ্য
            </a>
            <a href="#contact" className="text-amber-700 hover:text-amber-900">
              যোগাযোগ
            </a>
          </nav>
          <Link href="/cart">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-100 to-green-100 py-12 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            প্রাকৃতিক স্বাস্থ্য, সম্পূর্ণ সুস্থতা
          </h2>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            DXN এর প্রিমিয়াম পণ্যগুলি গানোডার্মা মাশরুম থেকে তৈরি, যা আপনার পরিবারের স্বাস্থ্য এবং সুখ নিশ্চিত করে।
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-amber-100">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={
                  selectedCategory === cat
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "border-amber-200"
                }
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow border-amber-100">
                <div className="bg-gradient-to-b from-amber-50 to-white p-4 h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-amber-700 mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-900">৳{product.price}</span>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-amber-50 py-12 border-t border-amber-100">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">আমাদের সাথে যোগাযোগ করুন</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="tel:+8801340702733"
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900"
            >
              <span>📞</span> 8801340702733
            </a>
            <a
              href="https://wa.me/8801340702733"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900"
            >
              <span>💬</span> WhatsApp এ চ্যাট করুন
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-6 text-center">
        <p>Made with Manus</p>
      </footer>
    </div>
  );
}
