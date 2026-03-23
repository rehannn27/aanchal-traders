import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm, useSubmit } from "@formspree/react";
import { useToast } from "@/hooks/use-toast";

const enquiryOptions = [
  { id: "aluminium", label: "Aluminium" },
  { id: "facade", label: "Facade" },
  { id: "railing", label: "Railing" },
  { id: "other", label: "Other" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", enquiryType: [] as string[] });
  const [state, submit] = useForm("xgolbkpd");

  const handleEnquiryChange = (id: string, checked: boolean) => {
    setForm((prev) => ({
      ...prev,
      enquiryType: checked
        ? [...prev.enquiryType, id]
        : prev.enquiryType.filter((item) => item !== id),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create form data with all fields including enquiry type
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", form.message);
    formData.append("enquiryType", form.enquiryType.join(", "));
    
    await submit(formData);
    
    if (state.succeeded) {
      toast({ title: "Message Sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", message: "", enquiryType: [] });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Us"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Build Together</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind? Reach out to us for a consultation or quote. We're here to help you with all your aluminium fabrication needs.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "+91 98207 49595 / 90041 03996", href: "tel:+919820749595" },
                { icon: Mail, label: "aanchaltraders85r@gmail.com", href: "mailto:aanchaltraders85r@gmail.com" },
                { icon: MapPin, label: "Mumbai, Maharashtra, India", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium group-hover:text-secondary transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <a
href="https://wa.me/919820749595"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground rounded-full px-6 gap-2 mt-4">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </Button>
            </a>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">📍 Google Maps Embed</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 border border-border card-shadow space-y-5"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">Send Us a Message</h3>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="rounded-lg"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="rounded-lg"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-lg"
            />
            
            {/* Enquiry For Checkboxes */}
            <div className="space-y-3">
              <Label className="text-foreground font-semibold">Enquiry For:</Label>
              <div className="grid grid-cols-2 gap-3">
                {enquiryOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={form.enquiryType.includes(option.id)}
                      onCheckedChange={(checked) => handleEnquiryChange(option.id, checked as boolean)}
                    />
                    <Label htmlFor={option.id} className="text-muted-foreground cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Textarea
              placeholder="Description"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
              className="rounded-lg"
            />
            <Button type="submit" className="gradient-primary text-primary-foreground rounded-full w-full text-base font-semibold">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
