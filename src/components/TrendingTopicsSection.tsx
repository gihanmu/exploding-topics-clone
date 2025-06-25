import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const topics = [
  {
    title: "Ai Image Enhancer",
    volume: "135K",
    growth: "+99X",
    status: "EXPLODING",
    description:
      "Advanced software solutions that utilize artificial intelligence and machine learning algorithms to improve the quality of images...",
    chart: [10, 20, 30, 50, 80, 120, 135],
  },
  {
    title: "20K PowerBank",
    volume: "1.6K",
    growth: "+99X",
    status: "EXPLODING",
    description:
      "A 20K power bank is a portable charging device with a capacity of 20,000 milliampere-hours (mAh)...",
    chart: [2, 5, 10, 20, 40, 80, 99],
  },
  {
    title: "Pdrn Toner",
    volume: "880",
    growth: "+99X",
    status: "EXPLODING",
    description:
      "An anti-aging skincare product designed to reverse signs of aging by smoothing fine lines, softening dryness, and...",
    chart: [1, 2, 3, 5, 10, 20, 99],
  },
  {
    title: "Lash Clusters",
    volume: "165K",
    growth: "+9700%",
    status: "EXPLODING",
    description:
      "A beauty product consisting of multiple lash strands bound together at the base, designed to be applied to the eyelid...",
    chart: [5, 10, 20, 40, 80, 120, 165],
  },
  {
    title: "Prompt Engineering",
    volume: "165K",
    growth: "+8400%",
    status: "REGULAR",
    description:
      "Process of designing and refining input prompts to effectively interact with AI models, particularly in natural...",
    chart: [1, 10, 30, 80, 120, 100, 165],
  },
  {
    title: "Sitegpt",
    volume: "8.1K",
    growth: "+8200%",
    status: "EXPLODING",
    description:
      "Web-based site builder that uses Artificial Intelligence to create professional websites quickly and for free. Sitegpt...",
    chart: [0, 0, 1, 2, 10, 50, 81],
  },
];

function LineChart({ data }: { data: number[] }) {
  // Simple SVG line chart for visual effect
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((d, i) => `${(i * 40)} ${60 - ((d - min) / (max - min || 1)) * 50}`)
    .join(" ");
  return (
    <svg viewBox="0 0 240 60" width="100%" height="40" className="mb-2">
      <polyline
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
        points={points}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polygon
        points={points + ` 240,60 0,60`}
        fill="#2563eb22"
      />
    </svg>
  );
}

export function TrendingTopicsSection() {
  return (
    <section className="py-16 px-2 md:px-0 bg-[#f7fafd]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Discover Exploding Topics</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <span>FILTER BY:</span>
            <Button variant="outline" className="min-w-[110px] justify-between" size="sm">
              5 Years
            </Button>
            <Button variant="outline" className="min-w-[140px] justify-between" size="sm">
              All Categories
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input placeholder="Search Trends" className="max-w-xs" />
            <Button size="sm" className="bg-blue-600 text-white px-3">
              <Search className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="ml-2 font-bold text-blue-600 bg-blue-100 border-0">PRO</Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((topic, i) => (
            <Card key={i} className="bg-white border border-gray-200 shadow-none hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-base font-semibold text-gray-900">
                    {topic.title}
                  </CardTitle>
                  <div className="flex flex-col items-end">
                    <span className="text-blue-600 font-bold text-lg leading-none">{topic.volume}</span>
                    <span className="text-xs text-gray-400 leading-none">Volume</span>
                  </div>
                  <div className="flex flex-col items-end ml-2">
                    <span className="text-green-600 font-bold text-base leading-none">{topic.growth}</span>
                    <span className="text-xs text-gray-400 leading-none">Growth</span>
                  </div>
                </div>
                <LineChart data={topic.chart} />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3 min-h-[40px]">
                  {topic.description}
                </p>
                <Badge variant={topic.status === "EXPLODING" ? "destructive" : "secondary"} className="uppercase text-xs tracking-wide">
                  {topic.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <Button variant="ghost" size="icon" className="rounded-full" aria-label="Previous page">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {[1, 2, 3].map((n) => (
            <Button
              key={n}
              variant={n === 1 ? "default" : "outline"}
              size="icon"
              className={
                n === 1
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
                  : "border-gray-200 text-gray-700 hover:bg-gray-100"
              }
              aria-label={`Page ${n}`}
            >
              {n}
            </Button>
          ))}
          <Button variant="ghost" size="icon" className="rounded-full" aria-label="Next page">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
} 