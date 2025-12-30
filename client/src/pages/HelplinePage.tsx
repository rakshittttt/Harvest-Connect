import Navbar from "@/components/Navbar";
import { Phone, Globe, MessageSquare, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelplinePage() {
  const steps = [
    { title: "Dial 1800-180-1551", desc: "Toll-free number available from 6 AM to 10 PM daily." },
    { title: "Select Language", desc: "Press 1 for Punjabi, 2 for Hindi, 3 for English, 4 for Marathi." },
    { title: "Choose Category", desc: "Select 1 for Crop Advice, 2 for MSP Info, 3 for Schemes." },
    { title: "Speak to Expert", desc: "Connect with a qualified agricultural scientist immediately." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-16 text-center">
          <div className="inline-flex p-3 rounded-full bg-accent/10 mb-4 text-accent">
            <HeadphonesIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-serif font-medium mb-4">Offline Helpline Systems</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get instant expert advice without internet. Our Kisan Call Centers are here to support you in your local language.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-medium">How it works</h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-border/60 shadow-xl shadow-primary/5 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-serif font-medium mb-2">Toll-Free Helpline</h3>
            <p className="text-4xl font-bold text-primary mb-6 tracking-tight">1800-180-1551</p>
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-secondary/50 flex flex-col items-center">
                <Globe className="h-5 w-5 text-primary mb-2" />
                <span className="text-xs font-medium">22 Languages</span>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/50 flex flex-col items-center">
                <MessageSquare className="h-5 w-5 text-primary mb-2" />
                <span className="text-xs font-medium">SMS Support</span>
              </div>
            </div>
            <Button className="w-full h-12 rounded-xl text-lg font-medium">Call Now</Button>
            <p className="mt-4 text-xs text-muted-foreground italic">Charges may apply for non-toll-free variants.</p>
          </div>
        </div>

        <section className="bg-primary/5 rounded-3xl p-10 border border-primary/10">
          <h2 className="text-2xl font-serif font-medium mb-6">Common Languages Supported</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Punjabi', 'Hindi', 'English', 'Marathi', 'Gujarati', 'Tamil', 'Bengali', 'Telugu'].map((lang) => (
              <div key={lang} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {lang}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
