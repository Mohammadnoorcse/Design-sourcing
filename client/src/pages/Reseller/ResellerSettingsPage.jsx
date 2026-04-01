import { useState } from 'react';
import { User, Store, CreditCard, Bell, Lock, Save, Upload } from 'lucide-react';

const ResellerSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const [formData, setFormData] = useState({
    fullName: "Mohammad Rahman",
    email: "mohammad@example.com",
    phone: "+880 1712-345678",
    storeName: "StyleHub BD",
    storeUrl: "stylehubbd.com",
    bio: "Premium fashion reseller in Dhaka. Specializing in men's blazers, jackets & casual wear.",
    address: "House 45, Road 12, Block E, Banani, Dhaka 1213",
    bankName: "Dutch Bangla Bank",
    accountName: "Mohammad Rahman",
    accountNumber: "1234567890123",
    routingNumber: "090123456",
  });

  const [notifications, setNotifications] = useState({
    orderAlerts: true,
    priceChange: true,
    newDeals: true,
    marketing: false,
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'store', label: 'Store Info', icon: Store },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-gray-900">Reseller Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account and business preferences</p>
        </div>

        {/* Top Horizontal Sidebar / Tabs */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-2 mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-7 py-4 rounded-2xl font-medium whitespace-nowrap transition-all ${
                    isActive 
                      ? 'bg-black text-white shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
              
              <div className="flex flex-col md:flex-row gap-10">
                {/* Profile Picture */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-3xl overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src="https://picsum.photos/id/64/300/300" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="mt-4 flex items-center gap-2 text-sm font-medium text-black hover:underline">
                    <Upload size={18} /> Change Profile Photo
                  </button>
                </div>

                {/* Form */}
                <div className="flex-1 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea 
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black resize-y"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Store Info Tab */}
          {activeTab === 'store' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Store Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
                  <input 
                    type="text" 
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store URL</label>
                  <div className="flex rounded-2xl overflow-hidden border border-gray-300">
                    <span className="bg-gray-100 px-6 py-4 text-gray-500">https://</span>
                    <input 
                      type="text" 
                      name="storeUrl"
                      value={formData.storeUrl}
                      onChange={handleInputChange}
                      className="flex-1 px-6 py-4 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Payment Tab */}
          {activeTab === 'payment' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                  <input type="text" name="bankName" value={formData.bankName} onChange={handleInputChange} className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                    <input type="text" name="accountName" value={formData.accountName} onChange={handleInputChange} className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Routing Number</label>
                  <input type="text" name="routingNumber" value={formData.routingNumber} onChange={handleInputChange} className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black" />
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Notification Settings</h2>
              <div className="space-y-6">
                {Object.keys(notifications).map((key) => (
                  <div key={key} className="flex justify-between items-center py-5 border-b last:border-none">
                    <div>
                      <p className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {key === 'orderAlerts' && 'Receive alerts for new orders'}
                        {key === 'priceChange' && 'Get notified when prices change'}
                        {key === 'newDeals' && 'Flash sales and hot deals updates'}
                        {key === 'marketing' && 'Promotional and marketing emails'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange(key)}
                      className={`w-14 h-7 rounded-full transition-all relative ${notifications[key] ? 'bg-black' : 'bg-gray-300'}`}
                    >
                      <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all ${notifications[key] ? 'left-8' : 'left-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>
              <div className="max-w-md space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input type="password" className="w-full px-6 py-4 border border-gray-300 rounded-2xl" placeholder="••••••••" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input type="password" className="w-full px-6 py-4 border border-gray-300 rounded-2xl" placeholder="Enter new password" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input type="password" className="w-full px-6 py-4 border border-gray-300 rounded-2xl" placeholder="Confirm new password" />
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-12 flex justify-end">
            <button 
              onClick={handleSave}
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-2xl font-semibold transition text-lg"
            >
              <Save size={22} />
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerSettingsPage;