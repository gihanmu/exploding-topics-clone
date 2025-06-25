// Home page for Exploding Topics Clone using Next.js, Tailwind CSS, and ShadCN components

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, TrendingUp, Users, Target, BarChart3, Zap, ArrowRight } from "lucide-react";
import { FreeToolsSection } from "@/components/FreeToolsSection";
import { TrendingTopicsSection } from "@/components/TrendingTopicsSection";
import { TopicInsightsSection } from "@/components/TopicInsightsSection";
import { ExpertInsightsSection } from "@/components/ExpertInsightsSection";
import { CrmTable } from "@/components/CrmTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">ExplodingTopics</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Topics</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Newsletter</a>
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Blog</a>
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Try Pro</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="w-3 h-3 mr-1" />
            Discover Trends 12+ Months Before Everyone Else
          </Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Discover Exploding Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            <strong>10,000+ trends</strong> discovered by users. Stay ahead of the curve with our AI-powered trend detection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Button size="lg" className="flex-1">
              Try Exploding Topics Pro
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              7 Day Free Trial
            </Button>
          </div>
          <p className="text-sm text-gray-500">Trusted by over <strong>1.1 million users</strong>. No credit card required.</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-semibold mb-4">Get Instant Insights on Any Topic</h3>
          <p className="text-gray-600 mb-6">Curious about a specific topic? Enter it below to unlock free insights.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input 
              type="text" 
              placeholder="Search for any topic..." 
              className="flex-1"
            />
            <Button>
              <Search className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-3">Get 10 free searches per day</p>
        </div>
      </section>

      {/* Trending Topics Grid */}
      <TrendingTopicsSection />
      <TopicInsightsSection />
      <ExpertInsightsSection />
      <FreeToolsSection />
      <CrmTable />

      {/* Trusted By Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Trusted by brands that refuse to fall behind.</h3>
          <div className="flex items-center justify-center gap-8 mt-8 opacity-60">
            <div className="w-24 h-8 bg-gray-200 rounded"></div>
            <div className="w-24 h-8 bg-gray-200 rounded"></div>
            <div className="w-24 h-8 bg-gray-200 rounded"></div>
            <div className="w-24 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Expert Insights, Data, And Trends</h3>
            <p className="text-xl text-gray-600">Actionable research and analysis to keep you ahead.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>How to Find Semantic Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Google is continually refining its search algorithms to improve the relevance of search results...
                </p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Website Content Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A content audit involves reviewing all the content on your website for accuracy, performance...
                </p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Top 19 SEO Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  SEO tools can streamline getting your website to appear higher in search results...
                </p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Find Trends */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How We Find Trends</h3>
            <p className="text-xl text-gray-600">
              We track every topic on the internet to identify under-the-radar trends before they go mainstream.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Analyze</h4>
              <p className="text-gray-600">
                Our trend identification process begins with comprehensive data collection from social media, 
                search engines, online forums, news articles, e-commerce websites, and podcasts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Identify</h4>
              <p className="text-gray-600">
                Our proprietary machine learning models detect the absolute earliest signs of emerging trends, 
                analyzing historical data and predicting future trends based on current trajectories.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Curate</h4>
              <p className="text-gray-600">
                Human expertise ensures contextual understanding and quality, validating authenticity and 
                filtering out fads while providing qualitative insights to complement quantitative data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get Exclusive Access to Emerging Trends</h3>
          <p className="text-xl mb-8 opacity-90">
            Stay ahead of the competition with a 7-day free trial of Exploding Topics Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Try Pro For Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            <strong>1.1M+ trends</strong> in our growing database. Pro plans start at <strong>$1.29</strong>/day.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Exploding Topics</span>
              </div>
              <p className="text-gray-400 text-sm">
                Discover trends before they explode. Trusted by over 1.1 million users worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Free Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Keyword Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Backlink Checker</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SERP Checker</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free SEO Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Exploding Topics is a Trademark of Semrush Inc</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
