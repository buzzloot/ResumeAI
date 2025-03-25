import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for small teams and startups",
    features: [
      "Process up to 100 resumes/month",
      "Basic AI matching",
      "Email support",
      "1 job posting at a time",
      "5 user accounts"
    ],
    popular: false,
    buttonVariant: "outline" as const
  },
  {
    name: "Professional",
    price: 99,
    description: "Ideal for growing companies",
    features: [
      "Process up to 500 resumes/month",
      "Advanced AI matching",
      "Priority email support",
      "5 job postings at a time",
      "15 user accounts",
      "Custom screening criteria",
      "Analytics dashboard"
    ],
    popular: true,
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    price: 249,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited resume processing",
      "Premium AI matching & insights",
      "24/7 phone & email support",
      "Unlimited job postings",
      "Unlimited user accounts",
      "Advanced analytics & reporting",
      "ATS integration",
      "Custom workflow automation",
      "Dedicated account manager"
    ],
    popular: false,
    buttonVariant: "outline" as const
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container px-4 sm:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <AnimatedText text="Simple, Transparent Pricing" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works best for your team
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn 
              key={index} 
              delay={index * 100} 
              className={`
                relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm
                ${plan.popular ? 'md:scale-105 md:-translate-y-1 z-10' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-xs font-medium py-1.5 text-center">
                  Most Popular
                </div>
              )}
              
              <div className={`
                p-6 bg-white dark:bg-gray-800
                ${plan.popular ? 'pt-10' : ''}
              `}>
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full mb-6"
                >
                  Get Started
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn className="mt-16 text-center">
          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
            Need a custom plan? <a href="#" className="text-blue-600 dark:text-blue-400 font-medium">Contact us</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
