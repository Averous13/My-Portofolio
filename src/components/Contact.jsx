import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { personalInfo } from "../data";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Message Sent",{
            description: "Thank you for reaching out! I'll get back to you soon.",
        })

        //reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    const contactInfo = [
        {
        icon: Mail,
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`
        },
        {
        icon: Phone,
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`
        },
        {
        icon: MapPin,
        label: 'Location',
        value: personalInfo.location,
        href: null
        },
        {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'Connect with me',
        href: personalInfo.linkedin
        }
    ];

  return (
    <section id="contact" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#8ab2a6]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-[#0a0d10] border-gray-800 hover:border-[#8ab2a6] transition-all duration-300 cursor-pointer"
                    onClick={() => info.href && window.open(info.href, info.href.startsWith('http') ? '_blank' : '_self')}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-[#3e9d81] to-[#8ab2a6]">
                          <info.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3e9d81] to-[#8ab2a6] rounded-2xl opacity-10 blur-3xl"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-[#0a0d10] border-gray-800">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-gray-300 text-sm font-medium block mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-[#000000] border-gray-700 text-white focus:border-[#8ab2a6] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-gray-300 text-sm font-medium block mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-[#000000] border-gray-700 text-white focus:border-[#8ab2a6] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-gray-300 text-sm font-medium block mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className="bg-[#000000] border-gray-700 text-white focus:border-[#8ab2a6] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-gray-300 text-sm font-medium block mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-[#000000] border-gray-700 text-white focus:border-[#8ab2a6] transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] text-white hover:opacity-90 transition-all duration-300 group"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;