import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For side projects and personal sites.",
    features: ["5 monitors", "5-minute checks", "Email alerts", "1 status page"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For growing teams that need reliability.",
    features: ["50 monitors", "1-minute checks", "SMS & Slack alerts", "5 status pages", "API access", "Priority support"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$79",
    period: "/mo",
    description: "For organizations with complex needs.",
    features: ["Unlimited monitors", "30-second checks", "All alert channels", "Unlimited status pages", "Custom integrations", "Dedicated support", "SLA guarantee"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Simple, transparent pricing
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`rounded-xl p-6 border ${
                plan.highlighted
                  ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary-foreground bg-primary rounded-full px-3 py-0.5 mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-semibold text-foreground text-lg">{plan.name}</h3>
              <div className="mt-2 mb-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="text-xs text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-foreground">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full rounded-full text-xs font-semibold"
                size="sm"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
