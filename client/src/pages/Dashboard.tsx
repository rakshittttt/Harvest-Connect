import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Loader2, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import CommunityCard from "@/components/CommunityCard";
import { MOCK_COMMUNITIES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Import the generated background
import heroBg from "@assets/generated_images/subtle_abstract_nature_texture_background.png";

export default function Dashboard() {
  const [locationQuery, setLocationQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(MOCK_COMMUNITIES.slice(0, 3)); // Show some initially for demo
  const [joinedCommunities, setJoinedCommunities] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSearch = () => {
    if (!locationQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate network request
    setTimeout(() => {
      // Simple filter logic for mock
      const filtered = MOCK_COMMUNITIES.filter(c => 
        c.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
        c.state.toLowerCase().includes(locationQuery.toLowerCase()) ||
        c.name.toLowerCase().includes(locationQuery.toLowerCase())
      );
      setSearchResults(filtered.length > 0 ? filtered : []);
      setIsSearching(false);
    }, 800);
  };

  const handleJoin = (id: string) => {
    setJoinedCommunities(prev => [...prev, id]);
    
    const community = MOCK_COMMUNITIES.find(c => c.id === id);
    toast({
      title: "Community Joined!",
      description: `You have successfully joined ${community?.name}.`,
      duration: 3000,
    });
  };

  const joinedList = MOCK_COMMUNITIES.filter(c => joinedCommunities.includes(c.id));

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Welcome Hero */}
        <section className="relative pt-20 pb-24 px-4 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 z-0 opacity-40">
             <img src={heroBg} alt="" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          </div>

          <div className="container mx-auto max-w-5xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-6 tracking-tight">
                Welcome, Farmer from <span className="text-primary italic">Punjab</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                Connect with local communities, stay updated with the latest policies, and grow your harvest together.
              </p>
            </motion.div>

            {/* Search Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <div className="bg-white p-2 rounded-2xl shadow-xl shadow-primary/5 border border-border/60 flex flex-col md:flex-row gap-2">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Enter your state, district, or area (e.g., Punjab, Bathinda)" 
                    className="pl-12 h-14 border-none shadow-none text-lg bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground/60"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button 
                  size="lg" 
                  className="h-14 px-8 rounded-xl text-lg font-medium bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all active:scale-95"
                  onClick={handleSearch}
                  disabled={isSearching}
                >
                  {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : "Find Communities"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content: Search Results */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-medium text-foreground flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Communities Around You
                </h2>
                {locationQuery && !isSearching && (
                  <span className="text-sm text-muted-foreground">
                    Showing results for "{locationQuery}"
                  </span>
                )}
              </div>

              {isSearching ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50 pointer-events-none">
                  {[1, 2].map(i => (
                    <div key={i} className="h-80 bg-white rounded-2xl animate-pulse" />
                  ))}
                </div>
              ) : searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatePresence>
                    {searchResults.map((community) => (
                      <CommunityCard 
                        key={community.id}
                        community={community}
                        isJoined={joinedCommunities.includes(community.id)}
                        onJoin={handleJoin}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-border">
                  <p className="text-muted-foreground text-lg">No communities found in this area.</p>
                  <Button 
                    variant="link" 
                    onClick={() => {
                      setSearchResults(MOCK_COMMUNITIES);
                      setLocationQuery("");
                    }}
                    className="mt-2 text-primary"
                  >
                    View all communities
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar: Your Communities (Dashboard Widget) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                {/* My Communities Widget */}
                <div className="bg-white rounded-2xl p-6 border border-border/60 shadow-sm">
                  <h3 className="font-serif text-xl font-medium mb-4 text-foreground">Your Communities</h3>
                  
                  {joinedList.length === 0 ? (
                    <div className="text-center py-8 px-4 bg-secondary/30 rounded-xl border border-dashed border-secondary">
                      <p className="text-sm text-muted-foreground mb-3">You haven't joined any communities yet.</p>
                      <p className="text-xs text-muted-foreground/70">Join a community to start connecting with other farmers.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {joinedList.map(community => (
                        <div key={community.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/30 transition-colors group cursor-pointer">
                          <img src={community.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                          <div className="flex-grow min-w-0">
                            <h4 className="font-medium text-sm truncate text-foreground group-hover:text-primary transition-colors">{community.name}</h4>
                            <p className="text-xs text-muted-foreground truncate">{community.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Stats / Info Widget */}
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <h3 className="font-serif text-xl font-medium mb-4 text-foreground">Daily Update</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-primary/10">
                      <span className="text-sm text-muted-foreground">Weather</span>
                      <span className="text-sm font-medium">32°C, Sunny</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-primary/10">
                      <span className="text-sm text-muted-foreground">Wheat MSP</span>
                      <span className="text-sm font-medium text-primary">₹2,275/qtl</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Helpline</span>
                      <span className="text-sm font-medium text-accent">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
