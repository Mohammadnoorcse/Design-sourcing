import React, { useState } from 'react';

const categories = [
  { id: 'account-order', label: 'একাউন্ট ও অর্ডার' },
  { id: 'delivery', label: 'ডেলিভারি' },
  { id: 'cancel-refund', label: 'ক্যান্সেল ও রিফান্ড' },
  { id: 'profit-payment', label: 'প্রফিট ও পেমেন্ট' },
  { id: 'return-warranty', label: 'রিটার্ন ও ওয়ারেন্টি' },
  { id: 'important-tips', label: 'গুরুত্বপূর্ণ টিপস' },
];

const faqData = [
  // একাউন্ট ও অর্ডার
  {
    category: 'account-order',
    question: 'ড্রপ-শপে কিভাবে নতুন একাউন্ট রেজিস্ট্রেশন করবো?',
    answer: 'আপনার যদি অলরেডি ফেইসবুক পেজ, গ্রুপ বা ইউটিউব চ্যানেল থাকে বা ফিজিক্যাল শপ থাকে এবং মার্কেটিং সম্পর্কে বেসিক আইডিয়া থাকে, সেক্ষেত্রে ড্রপ-শপে মাত্র ৩০০০ টাকা পেমেন্ট করে এবং কিছু তথ্য যেমন- আপনার নাম, মোবাইল নাম্বার, ইমেইল আইডি, ঠিকানা, শপ বা ফেইসবুক পেজের লিঙ্ক ইত্যাদি তথ্য দিয়ে সাবমিট করার ৭২ ঘণ্টার মধ্যেই আপনার রিসেলার একাউন্টটি একটিভ করে দেয়া হবে। ডিপোজিট ছাড়া একাউন্ট এপ্রুভ করা হবেনা এবং সেটি আপনাদের সাথে সাধারণ ক্রেতাদের পার্থক্য তৈরি করার জন্যই করা হয়েছে।',
  },
  {
    category: 'account-order',
    question: 'রেজিস্ট্রেশন ফী সম্পর্কে জানতে চাই!',
    answer: 'রেজিস্ট্রেশন ফী ৩০০০ টাকা (এককালীন)। এই টাকা দিলে আপনার রিসেলার প্যানেল এক্সেস, প্রোডাক্ট লিস্ট, অর্ডার সাবমিট সিস্টেম ও অন্যান্য সুবিধা পাবেন।',
  },
  {
    category: 'account-order',
    question: 'কিভাবে নতুন কাস্টমার অ্যাড করবো?',
    answer: 'আপনার রিসেলার ড্যাশবোর্ডে "Add New Customer" অপশনে গিয়ে কাস্টমারের নাম, মোবাইল (অন্তত ২টা), ঠিকানা ও অন্যান্য তথ্য দিয়ে সেভ করুন। পরবর্তীতে অর্ডার সাবমিট করার সময় এই কাস্টমার সিলেক্ট করতে পারবেন।',
  },
  {
    category: 'account-order',
    question: 'কিভাবে নতুন অর্ডার সাবমিট করবো?',
    answer: 'ড্যাশবোর্ড > New Order > প্রোডাক্ট সার্চ/সিলেক্ট > কাস্টমার সিলেক্ট > কোয়ান্টিটি ও সাইজ/কালার > কাস্টমারের পেমেন্ট ডিটেইলস > সাবমিট। অগ্রিম পেমেন্ট যোগ করে কনফার্ম করুন।',
  },
  {
    category: 'account-order',
    question: 'অর্ডার সাবমিট করতে কত টাকা অগ্রিম পেমেন্ট করতে হবে?',
    answer: 'প্রতি অর্ডারে কমপক্ষে ২০০ টাকা অগ্রিম (অথবা ফুল পেমেন্ট) নেয়ার পরামর্শ দেওয়া হয়। এতে ফেক/ক্যান্সেল অর্ডার কমে এবং ডেলিভারি রেট বাড়ে।',
  },
  {
    category: 'account-order',
    question: 'একাউন্ট পার্মানেন্ট ক্লোজ করার নিয়ম কি?',
    answer: 'হেল্পলাইনে (09648-500500) অথবা ফেইসবুক গ্রুপে যোগাযোগ করে রিকোয়েস্ট করুন। অ্যাকটিভ অর্ডার থাকলে সেগুলো ক্লিয়ার হওয়ার পর ক্লোজ করা হবে।',
  },

  // ডেলিভারি
  {
    category: 'delivery',
    question: 'অর্ডার করা প্রোডাক্টের ইনভয়েস কি আমার শপের নামে হবে?',
    answer: 'জি, ড্রপ-শিপিং মানেই হলো সব কিছুই আপনার নামে হবে অর্থাৎ ইনভয়েস আপনার ষ্টোরের নামে হবে, সেখানে আপনার মোবাইল নাম্বার দেয়া থাকবে। কাস্টমারের প্রয়োজন হলে সে যাতে আপনার সাথেই যোগাযোগ করতে পারে।',
  },
  {
    category: 'delivery',
    question: 'অর্ডার করা প্রোডাক্ট কোন কুরিয়ারের মাধ্যমে ডেলিভারি হবে?',
    answer: 'ঢাকার ভিতরে: Sundarban, SA Paribahan, ঢাকার বাইরে: Sundarban, SA Paribahan, RedX ইত্যাদি (অর্ডার অনুযায়ী সেরা অপশন ব্যবহার করা হয়)।',
  },
  {
    category: 'delivery',
    question: 'ঢাকায় এবং ঢাকার বাইরে কুরিয়ার চার্জ কত টাকা?',
    answer: 'চার্জ প্রোডাক্ট ও ওজন অনুযায়ী পরিবর্তনশীল। সাধারণত ঢাকায় ৫০-১২০ টাকা, ঢাকার বাইরে ১২০-২৫০ টাকা। অর্ডার সাবমিটের সময় সঠিক চার্জ দেখাবে।',
  },
  {
    category: 'delivery',
    question: 'আমি কি কুরিয়ারের পার্সেল অনলাইনে ট্র্যাক করতে পারবো?',
    answer: 'হ্যাঁ, অর্ডার কুরিয়ারে হ্যান্ডওভার হলে ট্র্যাকিং নম্বর ও লিঙ্ক ড্যাশবোর্ডে ও SMS-এ পাবেন। কাস্টমারকেও দিতে পারবেন।',
  },
  {
    category: 'delivery',
    question: 'অর্ডার বুকিং এর কত দিনের মধ্যে ডেলিভারি হবে?',
    answer: 'প্রসেসিং ৭২ ঘণ্টা + কুরিয়ার: ঢাকায় ২-৩ দিন, ঢাকার বাইরে ৪-৭ দিন (সাধারণত)। কাস্টমারকে আগে থেকে জানিয়ে কনফার্ম করুন।',
  },

  // প্রফিট ও পেমেন্ট
  {
    category: 'profit-payment',
    question: 'আমি কি আমার পছন্দমত দামে প্রোডাক্ট সেল করতে পারবো?',
    answer: 'জি পারবেন! আমাদের লিস্টের যেকোনো প্রোডাক্ট আপনি আপনার মত দাম সেট করে সেল করতে পারবেন। তবে সব প্রোডাক্টের ক্ষেত্রেই আমাদের সাজেস্টেড প্রাইস দেয়া থাকবে। মার্কেট প্রাইসের থেকে খুব কমে সেল করা যাবেনা।',
  },
  {
    category: 'profit-payment',
    question: 'কোন অর্ডারে কত প্রফিট সেটি কিভাবে দেখবো?',
    answer: 'ড্যাশবোর্ড > My Orders > প্রতিটি অর্ডারের ডিটেইলে "Profit" দেখাবে। মাসিক রিপোর্টও পাবেন।',
  },
  {
    category: 'profit-payment',
    question: 'প্রফিটের টাকা আমি কিভাবে পাবো বা উত্তোলন করবো?',
    answer: 'বিকাশ, নগদ, ব্যাংক ট্রান্সফার অথবা মোবাইল ব্যাংকিং এর মাধ্যমে উত্তোলন করতে পারবেন। মিনিমাম উত্তোলন ১০০০ টাকা।',
  },
  {
    category: 'profit-payment',
    question: 'কতদিন পর পর প্রফিটের টাকা দেয়া হবে?',
    answer: 'সাপ্তাহিক (প্রতি শুক্রবার) অথবা মাসিক (প্রতি মাসের ৫ তারিখ) – আপনার পছন্দ অনুযায়ী সেট করা যায়।',
  },

  // অন্যান্য ক্যাটাগরি (রিটার্ন, টিপস ইত্যাদি) একইভাবে যোগ করা যাবে...
];

function FAQItem({ question, answer }) {
  return (
    <details className="group border-b border-gray-200 py-5 last:border-b-0">
      <summary className="flex justify-between items-center font-medium text-gray-900 cursor-pointer list-none hover:text-pink-600 transition-colors">
        {question}
        <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform duration-200">▼</span>
      </summary>
      <div className="mt-4 text-gray-700 leading-relaxed pr-6">
        {answer}
      </div>
    </details>
  );
}

export default function DropshipHelpPage() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('all');

  const filtered = faqData.filter(faq => {
    const matchSearch = faq.question.toLowerCase().includes(search.toLowerCase()) ||
                        faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCat === 'all' || faq.category === activeCat;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* হেডার / হিরো */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            ড্রপ-শপ রিসেলার হেল্প সেন্টার
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            একাউন্ট, অর্ডার, ডেলিভারি, প্রফিট, রিটার্ন – সবকিছুর উত্তর এখানে এক জায়গায়।
          </p>

          {/* সার্চ */}
          <div className="mt-10 max-w-2xl mx-auto relative">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="সার্চ করুন (যেমন: অগ্রিম পেমেন্ট, ডেলিভারি সময়...)"
              className="w-full px-5 py-4 pl-14 bg-white border border-gray-300 rounded-2xl shadow focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-12">
        {/* ক্যাটাগরি ট্যাব */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCat('all')}
            className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all shadow-sm ${
              activeCat === 'all' ? 'bg-pink-600 text-white' : 'bg-white border hover:bg-gray-50'
            }`}
          >
            সব টপিক
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all shadow-sm ${
                activeCat === cat.id ? 'bg-pink-600 text-white' : 'bg-white border hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ লিস্ট */}
        {filtered.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden px-4">
            {filtered.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-600 text-lg">
            কোনো প্রশ্ন মিলেনি। অন্য কীওয়ার্ড দিয়ে চেষ্টা করুন বা ক্যাটাগরি চেঞ্জ করুন।
          </div>
        )}

        {/* হেল্পলাইন CTA */}
        <div className="mt-16 text-center bg-white p-10 rounded-2xl shadow-lg border border-pink-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            এখনো প্রশ্ন আছে?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            আমাদের টিম ২৪/৭ সাপোর্ট দিতে প্রস্তুত। হেল্পলাইনে কল করুন অথবা ফেইসবুক গ্রুপে পোস্ট করুন।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="tel:09648500500"
              className="inline-flex items-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition shadow-md text-lg"
            >
              কল করুন: 09648-500500
            </a>
            <a
              href="https://facebook.com/groups/yourgroup" // তোমার গ্রুপ লিঙ্ক দাও
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-md text-lg"
            >
              ফেইসবুক গ্রুপে যোগ দিন
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            সময়: সকাল ১০ টা – সন্ধ্যা ৭ টা (প্রতিদিন)
          </p>
        </div>
      </div>
    </div>
  );
}