import Navbar from "@/components/Navbar";
import { Scale, TrendingUp, ArrowUpRight, Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const MSP_DATA = [
  { crop: "Paddy (Common)", msp: 2300, increase: 117, status: "Season End" },
  { crop: "Paddy (Grade A)", msp: 2320, increase: 117, status: "Season End" },
  { crop: "Wheat", msp: 2425, increase: 150, status: "Current" },
  { crop: "Barley", msp: 1850, increase: 115, status: "Current" },
  { crop: "Gram", msp: 5440, increase: 105, status: "Current" },
  { crop: "Lentil (Masur)", msp: 6425, increase: 425, status: "Current" },
  { crop: "Rapeseed & Mustard", msp: 5650, increase: 200, status: "Current" },
  { crop: "Safflower", msp: 5800, increase: 150, status: "Current" }
];

export default function MspsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-medium mb-2">
              <Scale className="h-5 w-5" /> Minimum Support Price
            </div>
            <h1 className="text-4xl font-serif font-medium mb-4">Current MSPs (2024-25)</h1>
            <p className="text-muted-foreground text-lg">Official minimum support prices guaranteed by the government to ensure fair returns for your labor.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-border/60 shadow-sm flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Avg Increase</p>
              <p className="text-lg font-bold">~₹140/qtl</p>
            </div>
          </div>
        </header>

        <div className="bg-white rounded-3xl border border-border/50 overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-secondary/30">
              <TableRow className="hover:bg-transparent">
                <TableHead className="py-6 px-8 text-foreground font-semibold">Crop Name</TableHead>
                <TableHead className="py-6 px-8 text-foreground font-semibold">MSP (per Quintal)</TableHead>
                <TableHead className="py-6 px-8 text-foreground font-semibold">Increase over Last Year</TableHead>
                <TableHead className="py-6 px-8 text-foreground font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MSP_DATA.map((row, i) => (
                <TableRow key={i} className="hover:bg-secondary/10 transition-colors">
                  <TableCell className="py-6 px-8 font-medium text-lg">{row.crop}</TableCell>
                  <TableCell className="py-6 px-8 text-lg font-bold text-primary">₹{row.msp.toLocaleString()}</TableCell>
                  <TableCell className="py-6 px-8">
                    <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                      +₹{row.increase} <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </TableCell>
                  <TableCell className="py-6 px-8">
                    <Badge variant={row.status === "Current" ? "default" : "outline"} className="rounded-full">
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 flex items-start gap-3 p-4 bg-muted/50 rounded-2xl border border-border/40">
          <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            MSP is a form of market intervention by the Government of India to insure agricultural producers against any sharp fall in farm prices. The prices are announced at the beginning of the sowing season for certain crops.
          </p>
        </div>
      </main>
    </div>
  );
}
