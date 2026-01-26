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
    title: "Tech Summit 2024",
    category: "corporate",
    description: "A three-day technology conference bringing together industry leaders and innovators.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Anderson Wedding",
    category: "weddings",
    description: "An elegant garden wedding with 200 guests celebrating love and new beginnings.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Summer Music Festival",
    category: "entertainment",
    description: "A weekend music festival featuring international artists and local talent.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Annual Gala Dinner",
    category: "corporate",
    description: "A prestigious black-tie event honoring outstanding achievements in the industry.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Product Launch Event",
    category: "corporate",
    description: "An immersive product launch experience for a leading tech company.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Jazz Night Concert",
    category: "entertainment",
    description: "An intimate evening of live jazz music in a historic venue.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Rustic Barn Wedding",
    category: "weddings",
    description: "A charming countryside wedding with rustic decor and farm-to-table dining.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    title: "Corporate Team Building",
    category: "corporate",
    description: "An outdoor adventure retreat designed to foster teamwork and collaboration.",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=600&fit=crop",
  },
  {
    id: 10,
    title: "Charity Gala Concert",
    category: "entertainment",
    description: "A star-studded benefit concert raising funds for children's education.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },
  {
    id: 11,
    title: "Executive Leadership Summit",
    category: "corporate",
    description: "A exclusive gathering of C-suite executives for strategic discussions.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
  },
  {
    id: 12,
    title: "Winter Wonderland Wedding",
    category: "weddings",
    description: "A magical winter wedding with snow-inspired decor and warm ambiance.",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&h=600&fit=crop",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Events" },
  { value: "corporate", label: "Corporate" },
  { value: "weddings", label: "Weddings" },
  { value: "entertainment", label: "Entertainment" },
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

      {/* Filter Tabs */}
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
