import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ARTICLES = [
  {
    title: "Understanding the PM-KISAN Scheme Updates 2024",
    category: "Government Policy",
    date: "Dec 15, 2024",
    summary: "New guidelines for eligibility and digital verification processes for the upcoming installment."
  },
  {
    title: "Organic Farming Subsidies in Central India",
    category: "Subsidies",
    date: "Nov 28, 2024",
    summary: "A comprehensive guide on how to apply for state-level organic certification and financial aid."
  },
  {
    title: "New Export Policies for Basmati Rice",
    category: "Trade",
    date: "Nov 10, 2024",
    summary: "Changes in minimum export prices and quality standards for international markets."
  },
  {
    title: "Crop Insurance: A Safety Net for Kharif Season",
    category: "Insurance",
    date: "Oct 22, 2024",
    summary: "Learn about the simplified claim process under the Pradhan Mantri Fasal Bima Yojana."
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-medium mb-4">Latest Laws and Articles</h1>
          <p className="text-muted-foreground text-lg">Stay informed with the latest agricultural policies, government laws, and expert farming guides.</p>
        </header>

        <div className="space-y-6">
          {ARTICLES.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group hover:shadow-md transition-all duration-300 border-border/50 rounded-2xl cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Read full article <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
