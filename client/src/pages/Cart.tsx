import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "wouter";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <header className="bg-white border-b border-amber-100 shadow-sm">
          <div className="container flex items-center py-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                ফিরে যান
              </Button>
            </Link>
          </div>
        </header>
        <div className="container py-20 text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">আপনার কার্ট খালি</h2>
          <p className="text-amber-700 mb-6">কিছু পণ্য যোগ করুন শুরু করতে</p>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">কেনাকাটা চালিয়ে যান</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-amber-100 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ফিরে যান
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-amber-900">আপনার কার্ট</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Cart Items */}
      <section className="py-8">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.productId} className="p-4 border-amber-100">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-amber-50 rounded flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-amber-900 mb-2">{item.name}</h3>
                    <p className="text-amber-700 mb-3">৳{item.price} প্রতিটি</p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="border-amber-200"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="border-amber-200"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.productId)}
                        className="ml-auto text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-amber-900">
                      ৳{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-amber-100 sticky top-4">
              <h3 className="text-lg font-bold text-amber-900 mb-4">অর্ডার সারাংশ</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-amber-100">
                <div className="flex justify-between text-amber-700">
                  <span>মোট পণ্য মূল্য:</span>
                  <span>৳{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-amber-700">
                  <span>ডেলিভারি চার্জ:</span>
                  <span>বিনামূল্যে</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold text-amber-900 mb-6">
                <span>মোট:</span>
                <span>৳{getTotalPrice()}</span>
              </div>
              <Link href="/checkout">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 mb-2">
                  চেকআউট করুন
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full border-amber-200"
                onClick={clearCart}
              >
                কার্ট খালি করুন
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
