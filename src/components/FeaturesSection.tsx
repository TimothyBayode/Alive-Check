import { BarChart3, Bell, Clock, Code, Layers, Lock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track response times, uptime percentages, and performance trends with interactive dashboards.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified via email, SMS, Slack, or webhooks—only when it matters.",
  },
  {
    icon: Clock,
    title: "1-Minute Checks",
    description: "Monitor your services every 60 seconds from data centers around the world.",
  },
  {
    icon: Code,
    title: "API Monitoring",
    description: "Validate JSON responses, status codes, and headers for every endpoint.",
  },
  {
    icon: Layers,
    title: "Status Pages",
    description: "Share a branded public status page with your users—zero effort required.",
  },
  {
    icon: Lock,
    title: "SSL Monitoring",
    description: "Get alerts before your SSL certificates expire so you're never caught off guard.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Everything you need to stay online
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            A complete monitoring toolkit built for teams that value simplicity and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-flow-card rounded-xl p-5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1.5">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
