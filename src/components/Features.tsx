import { CheckCircle, Brain, Zap, BarChart4, Users, Shield } from "lucide-react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Matching",
    description: "Our advanced AI analyzes resume content against job descriptions to identify the best candidates based on skills, experience, and cultural fit."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast Processing",
    description: "Process hundreds of resumes in minutes, not hours. Get instant insights and focus your time on interviewing the right candidates."
  },
  {
    icon: <BarChart4 className="h-6 w-6" />,
    title: "Detailed Analytics",
    description: "Gain valuable insights into your candidate pool with comprehensive analytics on skills distribution, experience levels, and more."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Bias Reduction",
    description: "Our AI focuses on skills and qualifications, helping reduce unconscious bias in the screening process for more diverse hiring."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy Focused",
    description: "We prioritize data security with advanced encryption and compliance with global privacy regulations to protect candidate information."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Custom Screening Criteria",
    description: "Tailor the screening process to your specific needs with customizable parameters and weighted importance for different skills."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 sm:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <AnimatedText text="Advanced Features That Save You Time" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform uses cutting-edge technology to automate and enhance your recruiting process
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn 
              key={index} 
              delay={index * 100} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
