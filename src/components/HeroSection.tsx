import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WorkflowDiagram from "./WorkflowDiagram";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.1]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Scale Without Hiring.
          </motion.h1>
          <motion.p
            className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Custom n8n &amp; Gemini integrations that replace 20+ hours of manual data entry and outreach per week with custom LLM workflows.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Button
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 hover:scale-105 transition-transform"
              onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get My Free Audit
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="lg:col-span-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <WorkflowDiagram />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
