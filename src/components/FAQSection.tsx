import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How secure is our data with LLMs?",
    a: "We implement enterprise-grade API wrappers and VPC-restricted environments to ensure your proprietary data remains private and is never used for model training.",
  },
  {
    q: "Do we need to replace our current software?",
    a: 'No. We build "Invisible Infrastructure" that layers over your existing stack (n8n, Salesforce, etc.) via custom API orchestration.',
  },
  {
    q: "What is the typical ROI timeline?",
    a: "Partners typically see a 20+ hour/week reduction in manual overhead within the first 30 days of system deployment.",
  },
  {
    q: "What happens if a workflow encounters an error?",
    a: 'All systems include automated error-monitoring and "Human-in-the-Loop" fail-safes to ensure 100% operational stability.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight">Common Queries</h2>
          <p className="text-primary text-sm mt-2 font-mono">Transparency & Technical Logic</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-foreground/10">
              <AccordionTrigger className="text-foreground text-lg hover:no-underline [&>svg]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
          >
            Still have questions? Book a call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
