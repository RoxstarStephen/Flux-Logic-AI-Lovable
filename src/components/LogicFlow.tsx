import { Search, Wrench, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Search, title: "Audit", desc: "We find the bottlenecks bleeding time and money from your operations." },
  { icon: Wrench, title: "Build", desc: "We deploy custom n8n & LLM infrastructure tailored to your stack." },
  { icon: Rocket, title: "Scale", desc: "You reclaim 20+ hours/week and reinvest in growth, not admin." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LogicFlow = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-foreground text-3xl font-bold text-center tracking-tight mb-16">How It Works</h2>
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-[16.66%] right-[16.66%] h-px bg-primary/30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex-1 flex flex-col items-center text-center relative z-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-full bg-card border border-primary/30 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogicFlow;
