import { useState } from 'react';
import { TrendingUp, Users, DollarSign, ShoppingCart, Eye, Award, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

const ResellerAnalyticsPage = () => {
  const [timeframe, setTimeframe] = useState('30days');

  // Mock Data
  const stats = [
    {
      title: "Total Sales",
      value: "৳248,650",
      change: "+18.2%",
      isPositive: true,
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Total Orders",
      value: "184",
      change: "+12.5%",
      isPositive: true,
      icon: ShoppingCart,
      color: "text-blue-600"
    },
    {
      title: "Total Customers",
      value: "87",
      change: "-2.1%",
      isPositive: false,
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Page Views",
      value: "12,459",
      change: "+24.8%",
      isPositive: true,
      icon: Eye,
      color: "text-orange-600"
    }
  ];

  const topProducts = [
    { name: "Jorpeche Oversize Fit Blazer", sales: 42, revenue: "৳12,558", image: "https://picsum.photos/id/1015/80/80" },
    { name: "Slim Fit Premium Jeans", sales: 38, revenue: "৳3,382", image: "https://picsum.photos/id/1080/80/80" },
    { name: "Oversized Hooded Sweatshirt", sales: 29, revenue: "৳1,711", image: "https://picsum.photos/id/201/80/80" },
    { name: "Leather Chelsea Boots", sales: 21, revenue: "৳3,969", image: "https://picsum.photos/id/106/80/80" },
  ];

  const recentOrders = [
    { id: "ORD-78495", customer: "Rahim Khan", amount: "৳2,990", status: "Delivered", date: "2 hours ago" },
    { id: "ORD-78494", customer: "Fatima Begum", amount: "৳1,890", status: "Shipped", date: "Yesterday" },
    { id: "ORD-78493", customer: "Sohail Ahmed", amount: "৳4,480", status: "Processing", date: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Track your reseller performance and growth</p>
          </div>

          {/* Timeframe Selector */}
          <div className="flex gap-2 mt-6 md:mt-0 bg-white p-1.5 rounded-2xl border border-gray-100">
            {['7days', '30days', '90days', '12months'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  timeframe === period 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {period === '7days' && '7 Days'}
                {period === '30days' && '30 Days'}
                {period === '90days' && '90 Days'}
                {period === '12months' && '12 Months'}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl ${stat.color.replace('text', 'bg').replace('600', '100')}`}>
                    <Icon size={28} className={stat.color} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.isPositive ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
                    {stat.change}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-4xl font-semibold text-gray-900 tracking-tight">{stat.value}</p>
                  <p className="text-gray-500 mt-2 font-medium">{stat.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Revenue Trend Chart Placeholder */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">Revenue Trend</h2>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <TrendingUp size={20} className="text-green-500" />
                +18.2% from last month
              </div>
            </div>
            
            <div className="h-80 bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-300">
              <div className="text-center">
                <p className="text-gray-400 text-lg">Revenue Chart (Line Graph) will appear here</p>
                <p className="text-xs text-gray-400 mt-2">Using Chart.js or Recharts in real project</p>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award size={24} /> Top Selling Products
            </h2>
            
            <div className="space-y-6">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center gap-5">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-2xl"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 line-clamp-2">{product.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{product.sales} units sold</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="lg:col-span-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">Recent Orders</h2>
              <button className="text-black hover:underline text-sm font-medium flex items-center gap-2">
                View All Orders <span>→</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-5 px-4 font-medium text-gray-600">Order ID</th>
                    <th className="text-left py-5 px-4 font-medium text-gray-600">Customer</th>
                    <th className="text-left py-5 px-4 font-medium text-gray-600">Amount</th>
                    <th className="text-left py-5 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-5 px-4 font-medium text-gray-600">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-none hover:bg-gray-50">
                      <td className="py-6 px-4 font-mono text-sm">{order.id}</td>
                      <td className="py-6 px-4 font-medium">{order.customer}</td>
                      <td className="py-6 px-4 font-semibold">{order.amount}</td>
                      <td className="py-6 px-4">
                        <span className={`px-5 py-1.5 text-xs font-medium rounded-2xl ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-6 px-4 text-gray-600 text-sm">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Commission Summary */}
        <div className="mt-12 bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-gray-400 text-sm">Your Commission Rate</p>
              <p className="text-5xl font-semibold mt-2">15%</p>
              <p className="text-green-400 text-sm mt-1">+2% this month</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Commission Earned</p>
              <p className="text-5xl font-semibold mt-2">৳37,298</p>
              <p className="text-gray-400 text-sm mt-1">This month</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Next Payout</p>
              <p className="text-5xl font-semibold mt-2">৳12,450</p>
              <p className="text-gray-400 text-sm mt-1">Expected on April 15, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerAnalyticsPage;