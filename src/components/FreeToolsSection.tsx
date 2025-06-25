import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Link2,
  Users,
  BarChart3,
  ListChecks,
  LineChart,
} from "lucide-react";
import React from "react";

const tools = [
  {
    icon: <Search className="w-7 h-7 text-blue-600" />,
    title: "Keyword Research",
    description: "Find high-impact keywords in seconds.",
    button: "Research Keywords Now",
  },
  {
    icon: <Link2 className="w-7 h-7 text-blue-600" />,
    title: "Backlink Checker",
    description: "See who's linking to your site (and your competitors!).",
    button: "Check Your Backlinks",
  },
  {
    icon: <Users className="w-7 h-7 text-blue-600" />,
    title: "Competitor Analysis",
    description: "Discover your rivals' best keywords, backlinks, and traffic sources.",
    button: "Analyze Competitors",
  },
  {
    icon: <ListChecks className="w-7 h-7 text-blue-600" />,
    title: "Rank Checker",
    description: "Track which keywords are driving traffic to your site.",
    button: "Track Your Rankings",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-blue-600" />,
    title: "SERP Checker",
    description: "Analyze search results and uncover ranking opportunities.",
    button: "Explore SERP Data",
  },
  {
    icon: <LineChart className="w-7 h-7 text-blue-600" />,
    title: "Keyword Difficulty",
    description: "Instantly gauge how hard it is to rank for any keyword.",
    button: "Measure Keyword Difficulty",
  },
];

export function FreeToolsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            Powerful <span className="text-blue-600 underline underline-offset-4">Free Tools</span> To Give You An Edge
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Level up your strategy with these free resources.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {tools.map((tool, i) => (
            <Card key={i} className="border border-gray-200 shadow-none hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex-shrink-0">{tool.icon}</div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 min-h-[48px]">{tool.description}</p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full" size="sm">
                  {tool.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 