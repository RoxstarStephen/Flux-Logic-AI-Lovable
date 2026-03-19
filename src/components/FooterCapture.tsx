import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FooterCapture = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Audit request received!", description: "We'll be in touch within 24 hours." });
    setName("");
    setEmail("");
    setBottleneck("");
  };

  return (
    <footer id="lead-capture" className="bg-surface py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight">
            Ready to automate the boring stuff?
          </h2>
          <p className="text-primary text-sm mt-3 font-mono">Limited availability for Q2 Audits.</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-background/50 border-foreground/10 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
          />
          <Input
            type="email"
            placeholder="Work Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/50 border-foreground/10 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
          />
          <Textarea
            placeholder="What's your biggest bottleneck?"
            value={bottleneck}
            onChange={(e) => setBottleneck(e.target.value)}
            required
            className="bg-background/50 border-foreground/10 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground min-h-[100px]"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground font-semibold text-base hover:scale-105 transition-transform"
          >
            Get My Free Audit
          </Button>
        </form>
      </div>

      {/* Sub-footer */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
        <span>© {new Date().getFullYear()} Flux Logic AI. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="X / Twitter"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>
      <p className="text-center font-mono text-xs text-muted-foreground/40 mt-6">
        POWERED_BY_AUTOMATION_LOGIC_V3
      </p>
    </footer>
  );
};

export default FooterCapture;
