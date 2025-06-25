import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TopicInsightsSection() {
  return (
    <section className="py-16 px-2 md:px-0 bg-[#181c36] rounded-xl max-w-6xl mx-auto my-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Instant Insights on Any Topic</h2>
        <p className="text-lg text-gray-200 mb-8">Curious about a specific topic? Enter it below to unlock free insights.</p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-2xl mb-6 relative">
          <span className="absolute -left-48 top-1/2 -translate-y-1/2 text-blue-100 text-xl hidden md:block" style={{fontFamily: 'cursive'}}>
            Get 10 free<br/>searches per day
            <span className="block text-2xl mt-2">→</span>
          </span>
          <Input
            type="text"
            placeholder="Enter topic..."
            className="rounded-md h-14 text-lg px-5 bg-white text-gray-900 border-2 border-white focus:border-blue-500 w-full md:w-[400px] md:mr-2"
          />
          <Button className="h-14 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-4 md:mt-0 md:ml-2">
            Search
          </Button>
        </div>
        <p className="text-gray-300 text-base mb-2">Trusted by over 1.1 million users. No credit card required.</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-gray-400 text-sm">Powered by</span>
          <span className="font-bold text-white text-base tracking-wide">SEMRUSH</span>
        </div>
      </div>
    </section>
  );
} 