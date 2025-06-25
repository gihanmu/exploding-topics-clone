"use client";
import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Paintbrush2,
  Palette,
  Gamepad2,
  Badge,
  Layout,
  FileText,
  PenTool,
  Bot,
  Stamp,
  Wand2,
  BookOpen,
  Smile,
  Mic,
} from "lucide-react";

type Category = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const categoryData: Category[] = [
  { label: "Logo Design", icon: Paintbrush2, color: "bg-blue-100 text-blue-600 border-blue-200" },
  { label: "Brand style guides", icon: Palette, color: "bg-green-100 text-green-600 border-green-200" },
  { label: "Game art", icon: Gamepad2, color: "bg-red-100 text-red-600 border-red-200" },
  { label: "Business cards & stationery", icon: Badge, color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
  { label: "App design", icon: Layout, color: "bg-blue-100 text-blue-600 border-blue-200" },
  { label: "Landing page design", icon: FileText, color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
  { label: "Resume design", icon: FileText, color: "bg-cyan-100 text-cyan-600 border-cyan-200" },
  { label: "Illustration", icon: PenTool, color: "bg-red-100 text-red-600 border-red-200" },
  { label: "AI artists", icon: Bot, color: "bg-red-100 text-red-600 border-red-200" },
  { label: "NFT art", icon: Stamp, color: "bg-purple-100 text-purple-600 border-purple-200" },
  { label: "Pattern design", icon: Wand2, color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
  { label: "Fonts & typography", icon: BookOpen, color: "bg-green-100 text-green-600 border-green-200" },
  { label: "Brochure design", icon: Layout, color: "bg-blue-100 text-blue-600 border-blue-200" },
  { label: "Flyer design", icon: FileText, color: "bg-purple-100 text-purple-600 border-purple-200" },
  { label: "Book design", icon: BookOpen, color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
  { label: "Podcast cover art", icon: Mic, color: "bg-purple-100 text-purple-600 border-purple-200" },
  { label: "Portraits & caricatures", icon: Smile, color: "bg-green-100 text-green-600 border-green-200" },
  { label: "Tattoo design", icon: PenTool, color: "bg-red-100 text-red-600 border-red-200" },
  { label: "Signage design", icon: Stamp, color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
  { label: "Invitation design", icon: FileText, color: "bg-yellow-100 text-yellow-600 border-yellow-200" },
];

const sortOptions = ["Category", "A-Z", "Z-A"];

export default function FiverrPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Category");

  const filtered: Category[] = useMemo(() => {
    let cats = categoryData.filter((cat) =>
      cat.label.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "A-Z") cats = [...cats].sort((a, b) => a.label.localeCompare(b.label));
    if (sort === "Z-A") cats = [...cats].sort((a, b) => b.label.localeCompare(a.label));
    return cats;
  }, [search, sort]);

  return (
    <div className="min-h-screen bg-[#fdf6f2] py-12 px-2 md:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Discover opportunities in any <span className="italic">niche on Fiverr.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Input
            placeholder="Search niches"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="rounded-xl h-12 text-lg bg-white border border-gray-200 shadow-sm flex-1"
          />
          <Button
            variant="outline"
            className="rounded-xl h-12 px-6 text-base font-medium bg-white border border-gray-200"
            onClick={() => setSort(sort === "Category" ? "A-Z" : sort === "A-Z" ? "Z-A" : "Category")}
          >
            Sort by {sort}
          </Button>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Graphics & Design</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card
                key={cat.label}
                className={`flex flex-col items-center justify-center p-0 h-32 border-2 ${cat.color} rounded-2xl shadow-none`}
              >
                <CardContent className="flex flex-col items-center justify-center flex-1 w-full p-0">
                  <div className="flex flex-col items-center justify-center flex-1 w-full">
                    <Icon className="w-8 h-8 mb-2" />
                    <span className="text-base font-medium text-gray-900 text-center px-2">
                      {cat.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
} 