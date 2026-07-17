"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, BookOpen, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface Resource {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  keyword: string;
  targetAudience: string;
  readTime: string;
}

const categories = [
  "All",
  "Vendor Risk",
  "Investor Due Diligence",
  "Litigation",
  "Regulatory & MCA",
];

export function ResourcesCatalog({ resources }: { resources: Resource[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((r) => {
    const matchesCategory =
      selectedCategory === "All" || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.keyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Category Tabs & Search Bar */}
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Categories scrollable wrapper */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 -mx-5 px-5 lg:mx-0 lg:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-accent text-white shadow-soft"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-brand"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search resources, compliance checks, keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-5 text-sm text-brand shadow-soft outline-none transition-all placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/10 text-base"
          />
        </div>
      </div>

      {/* Grid listing items */}
      {filteredResources.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((res) => (
            <Card
              key={res.slug}
              className="flex flex-col h-full border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-lift"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  <Tag className="h-3 w-3" />
                  {res.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="h-3 w-3" />
                  {res.readTime}
                </span>
              </div>

              <h2 className="font-display text-lg font-semibold text-brand mb-2 line-clamp-2 hover:text-accent transition-colors">
                <Link href={`/resources/${res.slug}`}>{res.title}</Link>
              </h2>

              <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-grow leading-relaxed">
                {res.subtitle}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-[11px] font-medium text-slate-400 italic">
                  Focus: {res.keyword}
                </span>
                <Link
                  href={`/resources/${res.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-brand transition-colors group"
                >
                  Read Article
                  <BookOpen className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
          <p className="text-slate-500 font-medium mb-3">
            No resources found matching your search.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-sm font-semibold text-accent hover:text-brand transition-colors"
          >
            Reset filter and search
          </button>
        </div>
      )}
    </div>
  );
}
