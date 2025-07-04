import { Link } from "react-router-dom";
import {
  Palette,
  Users,
  Globe,
  Award,
  Heart,
  Lightbulb,
  Shield,
  Sparkles,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=300&h=300&fit=crop&crop=face",
    bio: "Former tech researcher at Google with 10+ years in digital innovation and art curation.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Former tech engineer passionate about democratizing digital art creation and blockchain technology.",
  },
  {
    name: "Elena Vasquez",
    role: "Head of Artist Relations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Art curator and gallery director with 15 years experience in contemporary and digital art.",
  },
  {
    name: "David Kim",
    role: "Lead Product Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning UX designer focused on creating intuitive experiences for creative platforms.",
  },
];

const values = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Artistic Excellence",
    description:
      "We believe in the power of creativity and strive to showcase only the highest quality AI-generated artworks.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community First",
    description:
      "Our platform is built by and for the creative community, fostering collaboration between artists and collectors.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description:
      "We're at the forefront of AI art technology, constantly pushing boundaries and exploring new possibilities.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Trust & Transparency",
    description:
      "We maintain the highest standards of authenticity, provenance, and ethical practices in all our operations.",
  },
];

const stats = [
  { label: "Artists Supported", value: "500+" },
  { label: "Artworks Sold", value: "10,000+" },
  { label: "Countries Reached", value: "50+" },
  { label: "Community Members", value: "25,000+" },
];

const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Founded with the vision to bridge AI technology and human creativity.",
  },
  {
    year: "2023",
    title: "First 100 Artists",
    description:
      "Welcomed our first community of digital artists and launched the platform.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Expanded internationally, reaching artists and collectors worldwide.",
  },
  {
    year: "2024",
    title: "AI Innovation Award",
    description:
      "Recognized as the leading platform for AI-generated art commerce.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-accent/10 text-accent-foreground border-accent/20"
            >
              <Sparkles className="h-3 w-3 mr-1" />
              Where AI Meets Artistry
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Redefining Art in the{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Age
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ArtGen is more than a marketplace – we're a community where
              cutting-edge digital tools meet human creativity, empowering
              artists to push the boundaries of digital art and helping
              collectors discover extraordinary pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/gallery">
                  Explore Our Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/artists">Meet Our Artists</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ArtGen was born from a simple yet powerful belief: digital
                  technology and human creativity are not competing forces, but
                  complementary ones that can create something truly
                  extraordinary together.
                </p>
                <p>
                  Founded in 2022 by a team of digital artists, curators, and
                  technology enthusiasts, we set out to create the world's
                  premier platform for digital art. We recognized that while
                  technology could enable incredible visual possibilities, it
                  took human vision, curation, and artistic sensibility to
                  transform those possibilities into meaningful art.
                </p>
                <p>
                  Today, we're proud to be home to over 500 talented digital
                  artists from around the world, each bringing their unique
                  perspective to the intersection of technology and creativity.
                  Our platform has facilitated the sale of over 10,000 artworks
                  and has built a thriving community of 25,000+ art enthusiasts
                  across 50+ countries.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="AI Art Creation Process"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-15" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gallery-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we
              make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground">
              Key milestones in our mission to revolutionize digital art
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-semibold text-lg mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              The passionate people behind ArtGen's mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our platform, want to become an artist, or
                just want to say hello? We'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@artgen.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="font-semibold mb-4">For Artists</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in joining our community of AI artists?
                </p>
                <Button asChild variant="outline">
                  <Link to="/artists">Apply to Join</Link>
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    placeholder="Tell us more..."
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Discover Amazing Art?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our community of art enthusiasts and start your collection of
            stunning digital artworks today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <Link to="/gallery">Start Exploring</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg border-white/20 text-white hover:bg-white/10"
            >
              <Link to="/artists">Meet Artists</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
