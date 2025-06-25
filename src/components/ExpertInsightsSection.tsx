import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "How to Find Semantic Keywords (Tools + Tips)",
    description:
      "Google is continually refining its search algorithms to improve the relevance of search results. It has changed the way it ranks content to 'surface the most helpful...",
    link: "#",
  },
  {
    title: "How to Perform a Website Content Audit (+ Free Template)",
    description:
      "A content audit involves reviewing all the content on your website for accuracy, performance, and technical issues. While many businesses focus on producing new content, audits ar...",
    link: "#",
  },
  {
    title: "Top 19 SEO Tools We Use to Drive 65% of Site Traffic",
    description:
      "SEO tools can streamline getting your website to appear higher in search results. There are tools to help with every stage of the process, from competitive analysis to content...",
    link: "#",
  },
  {
    title: "13 Top Marketing Trends (2025)",
    description:
      "Businesses of all sizes are adapting their marketing strategies as consumer behavior continues to evolve in 2025. Social media is a hot spot for marketers, but which...",
    link: "#",
  },
];

export function ExpertInsightsSection() {
  return (
    <section className="py-20 px-2 md:px-0 bg-[#f7fafd]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Expert Insights, Data, And Trends</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Actionable research and analysis to keep you ahead.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {articles.map((article, i) => (
            <Card key={i} className="bg-white border border-gray-100 shadow-none flex flex-col justify-between h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-gray-900 mb-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-between">
                <p className="text-gray-700 text-sm mb-6 line-clamp-4">{article.description}</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold mt-auto" asChild>
                  <a href={article.link}>Read Article</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 