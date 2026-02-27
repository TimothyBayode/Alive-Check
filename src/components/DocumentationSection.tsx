import { BookOpen, FileText, Video, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const resources = [
  {
    icon: BookOpen,
    title: "Getting Started Guide",
    description: "Learn how to set up your first monitor in under 5 minutes with our step-by-step guide.",
    link: "#",
  },
  {
    icon: FileText,
    title: "API Reference",
    description: "Complete REST API documentation with examples for every endpoint and webhook event.",
    link: "#",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch short walkthroughs covering alerts, status pages, integrations, and more.",
    link: "#",
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Ask questions, share tips, and connect with other AliveCheck users and our team.",
    link: "#",
  },
];

const DocumentationSection = () => {
  return (
    <section id="documentation" className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Resources to help you succeed
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Everything you need to get up and running—from quick-start guides to detailed API docs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-flow-card rounded-xl p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <resource.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{resource.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{resource.description}</p>
                <Button variant="link" className="h-auto p-0 text-xs text-primary">
                  Learn more →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
