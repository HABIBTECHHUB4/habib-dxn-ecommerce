import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Copy } from "lucide-react";
import { Link, useLocation } from "wouter";

interface Order {
  id: string;
  items: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  productTotal: number;
  paymentAmount: number;
  paymentMethod: "cod" | "online";
  customerInfo: {
    name: string;
    phone: string;
    address: string;
  };
  timestamp: string;
}

export default function Confirmation() {
  const [location] = useLocation();
  const [order, setOrder] = useState<Order | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.split("?")[1]);
    const orderId = params.get("orderId");

    if (orderId) {
      const orders = JSON.parse(localStorage.getItem("orders") || "[]");
      const foundOrder = orders.find((o: Order) => o.id === orderId);
      setOrder(foundOrder);
    }
  }, [location]);

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-amber-700 mb-4">অর্ডার খুঁজে পাওয়া যায়নি</p>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">হোম এ ফিরে যান</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(order.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-amber-100 shadow-sm">
        <div className="container py-4">
          <h1 className="text-2xl font-bold text-amber-900">অর্ডার নিশ্চিতকরণ</h1>
        </div>
      </header>

      {/* Success Message */}
      <section className="py-12">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-amber-900 mb-2">অর্ডার সফলভাবে স্থাপিত!</h2>
            <p className="text-amber-700">
              আপনার অর্ডার আমরা গ্রহণ করেছি। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
            </p>
          </div>

          {/* Order Details */}
          <Card className="p-6 border-amber-100 mb-6">
            <div className="mb-6 pb-6 border-b border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-3">অর্ডার আইডি</h3>
              <div className="flex items-center gap-2 bg-amber-50 p-3 rounded-lg">
                <code className="flex-1 font-mono text-amber-900">{order.id}</code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyOrderId}
                  className="border-amber-200"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              {copied && <p className="text-sm text-green-600 mt-2">কপি করা হয়েছে!</p>}
            </div>

            {/* Customer Info */}
            <div className="mb-6 pb-6 border-b border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-3">ডেলিভারি তথ্য</h3>
              <div className="space-y-2 text-amber-700">
                <p>
                  <span className="font-semibold">নাম:</span> {order.customerInfo.name}
                </p>
                <p>
                  <span className="font-semibold">ফোন:</span> {order.customerInfo.phone}
                </p>
                <p>
                  <span className="font-semibold">ঠিকানা:</span> {order.customerInfo.address}
                </p>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-6 pb-6 border-b border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-3">অর্ডার আইটেম</h3>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div
                    key={item.productId}
                    className="flex justify-between text-amber-700"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>৳{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Info */}
            <div className="mb-6 pb-6 border-b border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-3">পেমেন্ট তথ্য</h3>
              <div className="space-y-2 text-amber-700">
                <div className="flex justify-between">
                  <span>পণ্য মূল্য:</span>
                  <span>৳{order.productTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>পেমেন্ট পদ্ধতি:</span>
                  <span>
                    {order.paymentMethod === "cod"
                      ? "ক্যাশ অন ডেলিভারি"
                      : "অনলাইন পেমেন্ট"}
                  </span>
                </div>
              </div>
            </div>

            {/* Total Amount */}
            {order.paymentMethod === "cod" && (
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-900">ডেলিভারিতে পেমেন্ট:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ৳{order.paymentAmount}
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-2">
                  পণ্য গ্রহণের সময় এই পরিমাণ পরিশোধ করুন
                </p>
              </div>
            )}

            {order.paymentMethod === "online" && (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-900">মোট পরিশোধ:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ৳{order.paymentAmount}
                  </span>
                </div>
              </div>
            )}
          </Card>

          {/* Contact Info */}
          <Card className="p-6 border-amber-100 bg-amber-50 mb-6">
            <h3 className="text-lg font-bold text-amber-900 mb-3">আমাদের সাথে যোগাযোগ করুন</h3>
            <div className="space-y-2 text-amber-700">
              <p>
                যদি কোনো প্রশ্ন থাকে, আমাদের সাথে যোগাযোগ করুন:
              </p>
              <a
                href="tel:+8801340702733"
                className="block text-amber-900 font-semibold hover:text-amber-700"
              >
                📞 8801340702733
              </a>
              <a
                href="https://wa.me/8801340702733"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-amber-900 font-semibold hover:text-amber-700"
              >
                💬 WhatsApp এ চ্যাট করুন
              </a>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button className="bg-amber-600 hover:bg-amber-700">
                আরও কেনাকাটা করুন
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.print()}
              className="border-amber-200"
            >
              প্রিন্ট করুন
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
