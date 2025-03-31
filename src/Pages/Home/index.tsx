import { useUser } from "@clerk/clerk-react";
import { HomePageNavBar } from "./components/HomePageNavBar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Search, ChartColumnIncreasing } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useUser();
  const featureRef = useRef<HTMLDivElement>(null);
  const explainRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HomePageNavBar
        onFeatureClick={() => scrollToSection(featureRef)}
        onExplainClick={() => scrollToSection(explainRef)}
      />

      {/* Hero Section */}
      <section className="py-20 px-4 flex flex-col items-center justify-center">
        <div className="container mx-auto w-1/3 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Master Coding. Ace Interviews. Land Your Dream Job.
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Join CodePath and elevate your programming skills with our curated
            challenges and expert-led courses.
          </p>
          <div className="flex justify-center gap-4">
            <Link to={user ? "/codepath" : "/auth"}>
              <Button size="lg">
                Start Coding Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section ref={featureRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-3xl font-bold mb-4">
              Master Your Coding Skills
            </h2>
            <p className="text-gray-600 text-center w-1/2 mb-12">
              Our platform offers comprehensive tools to help you excel in
              technical interviews and become a better programmer.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className="h-10 w-10 text-primary" />}
              title="Discover Problem"
              description="Browse through our extensive library of coding Problems across various difficulty levels."
            />
            <FeatureCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Built-in Code Editor"
              description="Write and run your code directly in the browser with our powerful editor."
            />
            <FeatureCard
              icon={
                <ChartColumnIncreasing className="h-10 w-10 text-primary" />
              }
              title="Progress Tracking"
              description="Monitor your improvement with detailed analytics. Track completion rates, solution efficiency, and compare your performance with industry standards."
            />
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section ref={explainRef} className="pt-15 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 text-center w-1/2 mb-12">
              Our platform makes it easy to practice coding, track your
              progress, and prepare for technical interviews.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCardWithoutBG
              number={1}
              title="Discover Challenges"
              description="Browse through our extensive library of coding challenges across various difficulty levels."
            />
            <FeatureCardWithoutBG
              number={2}
              title="Write Your Solution"
              description="Use our interactive code editor to write, test, and debug your solution."
            />
            <FeatureCardWithoutBG
              number={3}
              title="Submit and Analyze"
              description="Submit your code to see if it passes all test cases."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!user && <section className="py-20 bg-primary text-white">
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
      </section>}

      {/* Footer */}
      <footer className="py-3 bg-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; CodePath. DD.</p>
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
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center border border-gray-300">
      <div className="inline-block mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
function FeatureCardWithoutBG({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 text-center">
      <p className="mb-6 flex justify-center items-center">
        <span className="w-16 h-16 bg-slate-300 text-slate-800 rounded-full text-4xl flex items-center justify-center">
          {number}
        </span>
      </p>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
