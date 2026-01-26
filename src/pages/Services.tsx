import { Link } from "react-router-dom";
import { ArrowRight, Building2, Heart, Music, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Events",
    description: "Professional events that elevate your brand and engage your audience.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop",
    features: [
      "Conferences & Seminars",
      "Product Launches",
      "Team Building Events",
      "Award Ceremonies",
      "Trade Shows & Exhibitions",
      "Executive Retreats",
    ],
  },
  {
    id: "weddings",
    icon: Heart,
    title: "Weddings & Social Events",
    description: "Creating magical moments for life's most precious celebrations.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=500&fit=crop",
    features: [
      "Full Wedding Planning",
      "Destination Weddings",
      "Engagement Parties",
      "Anniversary Celebrations",
      "Birthday Parties",
      "Baby Showers",
    ],
  },
  {
    id: "entertainment",
    icon: Music,
    title: "Concerts & Entertainment",
    description: "Large-scale productions that captivate and inspire audiences.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop",
    features: [
      "Music Festivals",
      "Concert Productions",
      "Theater Events",
      "Comedy Shows",
      "Cultural Festivals",
      "Charity Galas",
    ],
  },
];

const whatsIncluded = [
  "Initial consultation and concept development",
  "Venue sourcing and management",
  "Vendor coordination and negotiations",
  "Budget planning and management",
  "On-site event coordination",
  "Post-event evaluation and reporting",
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From corporate conferences to dream weddings, we offer comprehensive event 
              management services tailored to your unique vision and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4 p-3 rounded-xl bg-accent">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Included
            </h2>
            <p className="text-muted-foreground text-lg">
              Every event package includes our comprehensive suite of services to ensure 
              a seamless experience from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatsIncluded.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Let's Bring Your Event to Life
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Contact us today for a free consultation and let's start planning 
              your next extraordinary event together.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
