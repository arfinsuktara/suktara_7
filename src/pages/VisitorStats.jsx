import React, { useState, useEffect } from "react";
import {
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiSmile,
  FiUserPlus,
  FiCalendar,
} from "react-icons/fi";
import Container from "../components/common/Flex"; // Assuming Flex or Container might be useful, but using standard div for layout clarity

const StatCard = ({ icon: Icon, label, value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = Number(value);
    const duration = 1500; // all counters finish in 1.5s
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="p-4 bg-orange-50 rounded-full mb-6">
        <Icon className="text-3xl text-orange-500" />
      </div>
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
        {label}
      </h3>
      <div className="text-4xl font-bold text-gray-900 font-Frank">
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  );
};

const VisitorStats = () => {
  const stats = [
    { icon: FiUsers, label: "Daily Visitors", value: "1250" },
    { icon: FiCalendar, label: "Monthly Visitors", value: "38400" },
    { icon: FiTrendingUp, label: "Total Registered Users", value: "15200" },
    { icon: FiUserPlus, label: "New Users Today", value: "84" },
    { icon: FiClock, label: "Avg. Session Duration", value: "12", suffix: "m" },
    { icon: FiSmile, label: "Happy Customers", value: "9800" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-Frank mb-4">
            Visitors Statistics
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-time insights into our community growth and engagement metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitorStats;
