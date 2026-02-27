import { Monitor, Zap, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Monitor,
    title: "24/7 Monitoring",
    description: "Continuous uptime checks with instant alerts when services go down.",
  },
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Get started in minutes with zero technical knowledge required.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Alerts",
    description: "Multi-channel notifications via email, SMS, Slack, and more.",
  },
  {
    icon: Globe,
    title: "Global Checks",
    description: "Monitor from multiple regions to ensure worldwide availability.",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `radial-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.3), transparent 70%)' }}
      />

      <div className="relative max-w-3xl mx-auto text-center pt-14 pb-12 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 bg-muted/60 border border-border rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">Powerful monitoring, simplified</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent">
            Keep Your Business Running
          </span>
          <br />
          We'll Keep It Online.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-8"
        >
          Set up in 5 minutes and let us handle the monitoring. Reliable, hassle-free, and affordable—perfect for solopreneurs and small teams
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <Button size="default" className="rounded-full px-6 font-semibold text-sm">
            Start Free Monitoring
          </Button>
          <Button variant="outline" size="default" className="rounded-full px-6 font-semibold text-sm">
            See It In Action
          </Button>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="relative max-w-5xl mx-auto px-6 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            className="border-flow-card rounded-xl p-5"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1.5">{feature.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
