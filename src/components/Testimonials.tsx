import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

const testimonials = [
  {
    quote: "ResumeScreenAI has completely transformed our hiring process. We've reduced our time-to-hire by 60% while finding better qualified candidates.",
    author: "Sarah Johnson",
    position: "Head of Talent Acquisition",
    company: "TechGrowth Inc.",
    rating: 5
  },
  {
    quote: "The AI matching technology is incredible. It surfaces candidates that perfectly match our requirements, including those we might have overlooked using traditional screening methods.",
    author: "Michael Chen",
    position: "Director of HR",
    company: "Innovative Solutions",
    rating: 5
  },
  {
    quote: "We've seen a 40% improvement in candidate quality since implementing ResumeScreenAI. The time we save on screening lets us focus on providing a better candidate experience.",
    author: "Priya Patel",
    position: "Recruiting Manager",
    company: "Global Finance Group",
    rating: 5
  },
  {
    quote: "The platform is intuitive and the analytics provide valuable insights into our talent pool. It's like having an extra team member dedicated to resume screening.",
    author: "David Rodriguez",
    position: "Talent Acquisition Specialist",
    company: "CreativeWorks Agency",
    rating: 4
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 sm:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <AnimatedText text="Trusted by Recruiting Teams" />
          </h2>
          <p className="text-lg text-muted-foreground">
            See what hiring professionals say about our platform
          </p>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "h-5 w-5 mr-1",
                            i < testimonial.rating 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300 dark:text-gray-600"
                          )}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl font-medium mb-6 text-balance">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="mr-3 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-medium">
                        {testimonial.author.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    index === activeIndex 
                      ? "bg-blue-500" 
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
