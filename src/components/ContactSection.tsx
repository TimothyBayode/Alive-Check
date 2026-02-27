import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Get in touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Have questions or need a custom plan? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="border-flow-card rounded-xl p-6"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Timothy Bayode"
                  className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="timothybayode76@gmail.com"
                  className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="I need help with..."
                  className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
              <Button className="w-full rounded-full text-xs font-semibold" size="sm">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <div className="space-y-4">
            {[
              { icon: Mail, title: "Email Us", info: "support@alivecheck.io" },
              { icon: MapPin, title: "Location", info: "Remote-first, worldwide" },
              { icon: Clock, title: "Response Time", info: "Usually within 24 hours" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-flow-card rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-0.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
