import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

// Use Lucide icons for social, or fallback to text if not available
const socialIcons = [
  { icon: "/google.svg", alt: "Google" },
  { icon: "/reddit.svg", alt: "Reddit" },
  { icon: "/twitter.svg", alt: "Twitter" },
  { icon: "/facebook.svg", alt: "Facebook" },
  { icon: "/amazon.svg", alt: "Amazon" },
  { icon: "/tiktok.svg", alt: "TikTok" },
  { icon: "/spotify.svg", alt: "Spotify" },
  { icon: "/youtube.svg", alt: "YouTube" },
];

function SocialGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 my-6">
      {socialIcons.map((s, i) => (
        <div key={i} className="bg-white rounded-lg shadow-sm flex items-center justify-center p-3 border border-gray-100">
          <img src={s.icon} alt={s.alt} className="w-6 h-6" />
        </div>
      ))}
    </div>
  );
}

function MiniLineChart({ up = true }: { up?: boolean }) {
  // Simple up or down trend
  const points = up
    ? "0,40 20,30 40,25 60,20 80,15 100,10 120,5 140,0"
    : "0,0 20,10 40,20 60,30 80,35 100,38 120,39 140,40";
  return (
    <svg viewBox="0 0 140 40" width={90} height={32} className="inline-block align-middle">
      <polyline
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
        points={points}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polygon
        points={points + " 140,40 0,40"}
        fill="#2563eb22"
      />
    </svg>
  );
}

export function HowWeFindTrendsSection() {
  return (
    <section className="py-20 px-2 md:px-0 bg-[#f7fafd]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How We Find Trends</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We track every topic on the internet to identify under-the-radar trends before they go mainstream.
        </p>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {/* Analyze */}
          <Card className="bg-white border border-gray-100 shadow-md rounded-xl flex flex-col items-start mx-auto max-w-md">
            <CardHeader className="pb-2 flex flex-row items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">1</div>
              <CardTitle className="text-lg font-bold">Analyze</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 text-sm">
                Our trend identification process begins with a comprehensive data collection from a variety of online sources.
              </p>
              <SocialGrid />
              <ul className="text-sm text-gray-800 space-y-1 mt-6">
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Social media platforms</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Search engines</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Online forums and communities</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> News articles and blogs</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> E-commerce websites</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Podcasts</li>
              </ul>
            </CardContent>
          </Card>
          {/* Identify */}
          <Card className="bg-white border border-gray-100 shadow-md rounded-xl flex flex-col items-start mx-auto max-w-md">
            <CardHeader className="pb-2 flex flex-row items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">2</div>
              <CardTitle className="text-lg font-bold">Identify</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 text-sm">
                Our proprietary machine learning models are designed to detect the absolute earliest signs of an emerging trend.
              </p>
              <div className="flex items-center gap-8 mb-6">
                <div className="flex flex-col items-center">
                  <MiniLineChart up />
                  <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                </div>
                <div className="flex flex-col items-center">
                  <MiniLineChart up={false} />
                  <XCircle className="text-red-400 w-6 h-6 mt-1" />
                </div>
              </div>
              <ul className="text-sm text-gray-800 space-y-1">
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Analyze historical data to identify growth patterns</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Predict future trends based on current data trajectories</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Detect sudden spikes in interest or activity around specific topics</li>
              </ul>
            </CardContent>
          </Card>
          {/* Curate */}
          <Card className="bg-white border border-gray-100 shadow-md rounded-xl flex flex-col items-start mx-auto max-w-md">
            <CardHeader className="pb-2 flex flex-row items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">3</div>
              <CardTitle className="text-lg font-bold">Curate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4 text-sm">
                While our algorithms are powerful, human expertise is crucial for contextual understanding, ensuring quality topics.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="flex items-center gap-2"><span className="text-gray-800 text-xs">Custom Keycaps</span> <CheckCircle className="text-green-500 w-5 h-5" /></div>
                <div className="flex items-center gap-2"><span className="text-gray-400 text-xs">Star Wars</span></div>
                <div className="flex items-center gap-2"><span className="text-gray-800 text-xs">Generative NFTs</span> <CheckCircle className="text-green-500 w-5 h-5" /></div>
                <div className="flex items-center gap-2"><span className="text-gray-400 text-xs">Lab Milk</span> <CheckCircle className="text-green-500 w-5 h-5" /></div>
                <div className="flex items-center gap-2"><span className="text-gray-800 text-xs">NFL</span></div>
                <div className="flex items-center gap-2"><span className="text-gray-400 text-xs">Playstation</span></div>
                <div className="flex items-center gap-2"><span className="text-gray-800 text-xs">Data Lakehouse</span> <CheckCircle className="text-green-500 w-5 h-5" /></div>
              </div>
              <ul className="text-sm text-gray-800 space-y-1">
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Review the top-scoring trends identified by our models</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Validate the authenticity and relevance of these trends</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Filter out fads (movies, TV shows, celebrity gossip, etc.)</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Provide qualitative insights to complement quantitative data</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 