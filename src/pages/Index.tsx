import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";

const featuredEvents = [
  {
    id: 1,
    title: "Tech Summit 2024",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Anderson Wedding",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Summer Music Festival",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Annual Gala Dinner",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
  },
];

const stats = [
  { icon: Calendar, value: "500+", label: "Events Completed" },
  { icon: Users, value: "10K+", label: "Happy Guests" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Sparkles, value: "50+", label: "Team Members" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Sundarban Decorator
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Decoration & Event Management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Your Vision, Our Expertise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Elegance Events, we believe every event tells a story. With over 15 years of experience 
              in event management, our dedicated team transforms your ideas into extraordinary experiences. 
              Whether it's a corporate conference, a dream wedding, or a spectacular concert, we handle 
              every detail with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a glimpse at some of our most memorable events that showcase our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="group overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4">
                  <p className="text-xs font-medium text-accent uppercase tracking-wider">{event.category}</p>
                  <h3 className="font-semibold text-foreground mt-1">{event.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Let's discuss your next event. Our team is ready to bring your vision to life 
              with creativity, professionalism, and attention to every detail.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Start Planning Your Event
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
