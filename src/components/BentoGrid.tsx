import { Zap, Bot, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const iconStyle = "w-8 h-8 text-primary drop-shadow-[0_0_15px_hsl(82_85%_67%/0.3)]";

const items = [
  {
    title: "GEO & Automated Outreach",
    description:
      "Engineered agents for Answer Engine Optimization (AEO) and hyper-personalized B2B lead enrichment. We ensure your brand is the first recommendation by LLMs like Perplexity and Gemini.",
    icon: <Zap className={iconStyle} strokeWidth={1.5} />,
    status: "Status: Active",
    span: "md:col-span-2",
  },
  {
    title: "Context-Aware RAG Agents",
    description:
      "Custom RAG-based support infrastructure that syncs with internal documentation and CRMs to handle complex, multi-turn technical inquiries and calendar scheduling 24/7.",
    icon: <Bot className={iconStyle} strokeWidth={1.5} />,
    status: "Latency: 12ms",
    span: "",
  },
  {
    title: "Workflow Orchestration (n8n)",
    description:
      'The "Invisible Infrastructure." Seamless API integrations and LLM-powered document parsing. We automate the manual glue between your CRM, ERP, and databases.',
    icon: <Cpu className={iconStyle} strokeWidth={1.5} />,
    status: "Uptime: 99.97%",
    span: "md:col-span-3",
  },
];

const BentoGrid = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={item.span}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full bg-card border-foreground/5 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    {item.icon}
                    <span className="font-mono text-xs text-primary/70">{item.status}</span>
                  </div>
                  <h3 className="text-foreground text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
