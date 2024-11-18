import { HomePageNavBar } from "./components/HomePageNavBar";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Users,
  Zap,
  Search,
  Layers,
  Terminal,
} from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const exploreRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const developerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HomePageNavBar
        onExploreClick={() => scrollToSection(exploreRef)}
        onProductClick={() => scrollToSection(productRef)}
        onDeveloperClick={() => scrollToSection(developerRef)}
      />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Master Coding. Ace Interviews. Land Your Dream Job.
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Join CodePath and elevate your programming skills with our curated
            challenges and expert-led courses.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              Start Coding Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section ref={exploreRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore CodePath
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className="h-10 w-10 text-primary" />}
              title="Discover Challenges"
              description="Browse through our extensive library of coding challenges across various difficulty levels."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Join Competitions"
              description="Participate in coding contests and compete with developers worldwide."
            />
            <FeatureCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Learn Algorithms"
              description="Master essential algorithms and data structures with our interactive tutorials."
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section ref={productRef} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">CodePath IDE</h3>
              <p className="text-gray-600 mb-4">
                A powerful, cloud-based integrated development environment
                tailored for coding interviews and challenges.
              </p>
              <Button>Try CodePath IDE</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Interview Prep Course
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive course designed to prepare you for technical
                interviews at top tech companies.
              </p>
              <Button>Enroll Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section ref={developerRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            For Developers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-primary" />}
              title="API Access"
              description="Integrate CodePath challenges and assessments into your own applications with our robust API."
            />
            <FeatureCard
              icon={<Layers className="h-10 w-10 text-primary" />}
              title="Custom Integrations"
              description="Build custom workflows and integrations with your existing development tools."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Performance Insights"
              description="Get detailed analytics and insights into your coding performance and progress."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of developers who have leveled up their skills with
            CodePath.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary">
              Sign Up for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 CodePath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
      <div className="inline-block mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
