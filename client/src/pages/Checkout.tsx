import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link, useLocation } from "wouter";

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [, setLocation] = useLocation();
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "online" | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <header className="bg-white border-b border-amber-100 shadow-sm">
          <div className="container flex items-center py-4">
            <Link href="/cart">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                ফিরে যান
              </Button>
            </Link>
          </div>
        </header>
        <div className="container py-20 text-center">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">কার্ট খালি</h2>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">কেনাকাটা চালিয়ে যান</Button>
          </Link>
        </div>
      </div>
    );
  }

  const productTotal = getTotalPrice();
  const codAmount = 130; // Fixed amount for Cash on Delivery
  const finalAmount = paymentMethod === "cod" ? codAmount : productTotal;

  const handleSubmitOrder = async () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert("অনুগ্রহ করে সমস্ত তথ্য পূরণ করুন");
      return;
    }

    if (!paymentMethod) {
      alert("অনুগ্রহ করে একটি পেমেন্ট পদ্ধতি নির্বাচন করুন");
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      const order = {
        id: `ORD-${Date.now()}`,
        items,
        productTotal,
        paymentAmount: finalAmount,
        paymentMethod,
        customerInfo,
        timestamp: new Date().toISOString(),
      };

      // Store order in localStorage
      const orders = JSON.parse(localStorage.getItem("orders") || "[]");
      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));

      clearCart();
      setLocation(`/confirmation?orderId=${order.id}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-amber-100 shadow-sm">
        <div className="container flex items-center py-4">
          <Link href="/cart">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ফিরে যান
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-amber-900 ml-4">চেকআউট</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-8">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card className="p-6 border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-4">ব্যক্তিগত তথ্য</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    নাম *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="আপনার নাম"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    ফোন নম্বর *
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    ঠিকানা *
                  </label>
                  <textarea
                    value={customerInfo.address}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, address: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="আপনার সম্পূর্ণ ঠিকানা"
                    rows={3}
                  />
                </div>
              </div>
            </Card>

            {/* Payment Method Selection */}
            <Card className="p-6 border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-4">পেমেন্ট পদ্ধতি</h3>
              <div className="space-y-3">
                {/* Cash on Delivery */}
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-amber-600 bg-amber-50"
                      : "border-amber-200 hover:border-amber-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-amber-900">ক্যাশ অন ডেলিভারি</h4>
                      <p className="text-sm text-amber-700">
                        পণ্য গ্রহণের সময় পেমেন্ট করুন
                      </p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "cod"
                          ? "border-amber-600 bg-amber-600"
                          : "border-amber-300"
                      }`}
                    >
                      {paymentMethod === "cod" && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Online Payment */}
                <div
                  onClick={() => setPaymentMethod("online")}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "online"
                      ? "border-amber-600 bg-amber-50"
                      : "border-amber-200 hover:border-amber-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-amber-900">অনলাইন পেমেন্ট</h4>
                      <p className="text-sm text-amber-700">
                        বিকাশ, নগদ, রকেট ইত্যাদি
                      </p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "online"
                          ? "border-amber-600 bg-amber-600"
                          : "border-amber-300"
                      }`}
                    >
                      {paymentMethod === "online" && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Order Items Summary */}
            <Card className="p-6 border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-4">অর্ডার আইটেম</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.productId}
                    className="flex justify-between text-amber-700 pb-3 border-b border-amber-100 last:border-0 last:pb-0"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>৳{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-amber-100 sticky top-4">
              <h3 className="text-lg font-bold text-amber-900 mb-4">অর্ডার সারাংশ</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-amber-100">
                <div className="flex justify-between text-amber-700">
                  <span>পণ্য মূল্য:</span>
                  <span>৳{productTotal}</span>
                </div>
                <div className="flex justify-between text-amber-700">
                  <span>ডেলিভারি চার্জ:</span>
                  <span>বিনামূল্যে</span>
                </div>

                {/* Show payment amount based on method */}
                {paymentMethod === "cod" && (
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="flex justify-between text-green-700 font-bold">
                      <span>ক্যাশ অন ডেলিভারি:</span>
                      <span>৳{codAmount}</span>
                    </div>
                    <p className="text-xs text-green-600 mt-1">
                      শুধুমাত্র ডেলিভারি চার্জ পরিশোধ করুন
                    </p>
                  </div>
                )}

                {paymentMethod === "online" && (
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="flex justify-between text-blue-700 font-bold">
                      <span>মোট পরিশোধ:</span>
                      <span>৳{productTotal}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between text-lg font-bold text-amber-900 mb-6 pb-6 border-b border-amber-100">
                <span>চূড়ান্ত পরিশোধ:</span>
                <span className="text-green-600">৳{finalAmount}</span>
              </div>

              <Button
                onClick={handleSubmitOrder}
                disabled={isProcessing || !paymentMethod}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50"
              >
                {isProcessing ? "প্রক্রিয়াকরণ..." : "অর্ডার নিশ্চিত করুন"}
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
