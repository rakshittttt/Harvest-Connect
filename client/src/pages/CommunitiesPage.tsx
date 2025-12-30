import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Loader2, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import CommunityCard from "@/components/CommunityCard";
import { MOCK_COMMUNITIES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function CommunitiesPage() {
  const [locationQuery, setLocationQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(MOCK_COMMUNITIES);
  const [joinedCommunities, setJoinedCommunities] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      const filtered = MOCK_COMMUNITIES.filter(c => 
        c.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
        c.state.toLowerCase().includes(locationQuery.toLowerCase()) ||
        c.name.toLowerCase().includes(locationQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 600);
  };

  const handleJoin = (id: string) => {
    setJoinedCommunities(prev => [...prev, id]);
    const community = MOCK_COMMUNITIES.find(c => c.id === id);
    toast({ title: "Joined!", description: `You're now a member of ${community?.name}.` });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-medium mb-4">Communities Around You</h1>
          <p className="text-muted-foreground text-lg">Discover and join local farmer groups to share knowledge, resources, and support.</p>
          
          <div className="mt-8 flex gap-2 max-w-md mx-auto">
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by location..." 
                className="pl-9 h-12 rounded-xl"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>
            <Button onClick={handleSearch} disabled={isSearching} className="h-12 px-6 rounded-xl">
              {isSearching ? <Loader2 className="animate-spin h-4 w-4" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map((community) => (
            <CommunityCard 
              key={community.id}
              community={community}
              isJoined={joinedCommunities.includes(community.id)}
              onJoin={handleJoin}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
