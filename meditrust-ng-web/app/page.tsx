"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "/app/onboarding/onboarding.css"; // custom CSS for silhouettes & animations

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const totalSlides = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      icon: "🔍",
      title: "Find Your Doctor",
      desc: "Browse our network of certified healthcare professionals. Filter by specialty, availability, language, and ratings to find the perfect match.",
    },
    {
      icon: "💬",
      title: "Live Consultation",
      desc: "Choose from video calls, voice calls, or secure messaging based on your needs.",
    },
    {
      icon: "🚨",
      title: "Red Alert Emergency",
      desc: "Need urgent help? Use Red Alert to alert the nearest hospital while you're still in the app — when every second matters.",
    },
    {
      icon: "💳",
      title: "Secure Escrow Payments",
      desc: "Your money is held safely in escrow. Patients get refunds when things go wrong, and doctors are guaranteed payment for completed sessions. Our policies protect both sides.",
    },
    {
      icon: "🩺",
      title: "Get Expert Care",
      desc: "Connect with your doctor from anywhere. Receive professional medical advice, prescriptions, and follow-up care plans.",
    },
    {
      icon: "📋",
      title: "Track Your Health",
      desc: "Access your medical records, track symptoms, set medication reminders, and monitor your health journey over time.",
    },
  ];

  const handleFinish = async () => {
    // Hit an API route to set cookie
    await fetch("/api/seen-onboarding", { method: "POST" });
    router.replace("/sign-in"); // or wherever your next step is
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-gradient-to-br from-slate-50 to-slate-200 overflow-hidden">
      {/* Doctor silhouettes */}
      <div className="doctors-background">
        <div className="doctor-silhouette doctor-1"></div>
        <div className="doctor-silhouette doctor-2"></div>
        <div className="doctor-silhouette doctor-3"></div>
        <div className="doctor-silhouette doctor-4"></div>
      </div>

      {/* Content Container - Full Height Layout */}
      <div className="relative z-10 flex flex-col min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Logo */}
        <div className="flex justify-center pt-8 pb-4 sm:pt-12 sm:pb-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="MediTrust Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-xl sm:text-2xl font-bold text-blue-700 ml-2">Doki Health</span>
          </div>
        </div>

        {/* Main Content Area - Flexible Height */}
        <div className="flex-1 flex flex-col justify-center items-center py-4 sm:py-8">
          
          {/* Slides Container */}
          <div className="relative w-full max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white/90 backdrop-blur 
                            h-[50vh] sm:h-[45vh] md:h-[50vh] lg:h-[45vh] xl:h-[50vh]">
              <div
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((s, i) => (
                  <div
                    key={i}
                    className="min-w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center 
                                    rounded-full bg-gradient-to-br from-blue-400 to-blue-700 
                                    text-2xl sm:text-4xl lg:text-5xl text-white shadow-lg mb-4 sm:mb-6">
                      {s.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-800 
                                   mb-3 sm:mb-4 lg:mb-6 text-center px-2">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 text-center text-sm sm:text-base lg:text-lg 
                                  max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl px-2 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer transition-all ${
                      currentSlide === i ? "bg-blue-500 scale-125" : "bg-blue-300/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
                           text-xs sm:text-sm font-medium bg-blue-100 text-blue-700">
              🛡️ Refund-Backed Escrow
            </span>
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
                           text-xs sm:text-sm font-medium bg-green-100 text-green-700">
              ⚖️ Doctor & Patient Protection
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg">
            <button
              onClick={handleFinish}
              className="w-full sm:flex-1 px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 
                         text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200 
                         text-sm sm:text-base"
            >
              Get Started Now
            </button>
            <button className="w-full sm:flex-1 px-6 py-3 sm:py-4 rounded-full border-2 border-blue-500 
                             text-blue-600 font-semibold hover:bg-blue-500 hover:text-white 
                             transition-colors duration-200 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="pb-8 sm:pb-12"></div>
      </div>
    </div>
  );
}