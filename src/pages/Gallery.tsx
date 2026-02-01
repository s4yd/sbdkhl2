import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

type Category = "all" | "corporate" | "weddings" | "entertainment";

interface Event {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "",
    category: "",
    description: "",
    image: "/public/images/img1.jpg",
  },
  {
    id: 2,
    title: "",
    category: "",
    description: "",
    image: "/public/images/img2.jpg",
  },
  {
    id: 3,
    title: "",
    category: "",
    description: "",
    image: "/public/images/img3.jpg",
  },
  {
    id: 4,
    title: "",
    category: "",
    description: "",
    image: "/public/images/img4.jpg",
  },
  {
    id: 5,
    title: "",
    category: "",
    description: "",
    image: "/public/images/img5.jpg",
  },
  {
    id: 6,
    title: "3rd Convocation, Khulna Unversity",
    category: "",
    description: "",
    image: "/public/images/img6.jpg",
  },
  {
    id: 7,
    title: "4th Convocation, Khulna Unversity",
    category: "",
    description: "",
    image: "/public/images/img7.jpg",
  },
  {
    id: 8,
    title: "5th Convocation, Khulna Unversity",
    category: "",
    description: "",
    image: "/public/images/img8.jpg",
  },
  {
    id: 9,
    title: "6th Convocation, Khulna Unversity",
    category: "",
    description: "",
    image: "/public/images/img9.jpg",
  },
  {
    id: 10,
    title: "3rd Convocation, KUET",
    category: "",
    description: "",
    image: "/public/images/img10.jpg",
  },
  {
    id: 11,
    title: "4th Convocation, Islamic University, Kustia",
    category: "",
    description: "",
    image: "/public/images/img11.jpg",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "" },
  { value: "corporate", label: "" },
  { value: "weddings", label: "" },
  { value: "entertainment", label: "" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Event Gallery
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Explore our portfolio of successful events. Each one tells a unique story 
              of creativity, precision, and unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs 
      <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      */}
      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg text-left"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                    {event.category}
                  </p>
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            onClick={() => setSelectedEvent(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6 text-primary-foreground" />
          </button>
          <div 
            className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                {selectedEvent.category}
              </p>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                {selectedEvent.title}
              </h2>
              <p className="text-muted-foreground">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Let us help you plan an event that will leave a lasting impression 
              on you and your guests.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Start Planning Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
