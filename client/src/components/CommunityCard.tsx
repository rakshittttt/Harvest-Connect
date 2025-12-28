import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Check } from "lucide-react";
import { Community } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CommunityCardProps {
  community: Community;
  isJoined?: boolean;
  onJoin: (id: string) => void;
}

export default function CommunityCard({ community, isJoined = false, onJoin }: CommunityCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group flex flex-col h-full bg-white rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={community.image} 
          alt={community.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-none mb-2">
            <MapPin className="h-3 w-3 mr-1" /> {community.location}
          </Badge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {community.name}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
          {community.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex items-center text-xs text-muted-foreground font-medium">
            <Users className="h-4 w-4 mr-1.5" />
            {community.members.toLocaleString()} Members
          </div>

          <Button 
            onClick={() => onJoin(community.id)}
            variant={isJoined ? "outline" : "default"}
            className={isJoined 
              ? "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10" 
              : "bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-all"
            }
            disabled={isJoined}
          >
            {isJoined ? (
              <>
                <Check className="h-4 w-4 mr-2" /> Joined
              </>
            ) : (
              "Join Community"
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
