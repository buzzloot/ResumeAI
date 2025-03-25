import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

const steps = [
  {
    number: "01",
    title: "Upload Job Description",
    description: "Start by uploading your job description. Our AI will analyze the requirements, skills, and qualifications needed for the role.",
    color: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400"
  },
  {
    number: "02",
    title: "Import Resumes",
    description: "Upload a batch of resumes or connect with your existing applicant tracking system to import candidate data automatically.",
    color: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400"
  },
  {
    number: "03",
    title: "AI Analysis",
    description: "Our AI engine analyzes and matches candidates to your job requirements, ranking them based on relevance and fit.",
    color: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400"
  },
  {
    number: "04",
    title: "Review Top Matches",
    description: "Review a shortlist of the best candidates, complete with match scores and highlighted skills that align with your requirements.",
    color: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container px-4 sm:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <AnimatedText text="Streamlined Screening Process" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Our intuitive four-step process makes finding the right candidates effortless
          </p>
        </FadeIn>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-20 left-1/2 h-[calc(100%_-_160px)] w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}
              >
                <FadeIn 
                  delay={index * 100} 
                  direction={index % 2 === 0 ? "right" : "left"}
                  className="md:w-1/2 flex flex-col items-center md:items-start p-6"
                >
                  <div className={`${step.color} rounded-full px-3 py-1 ${step.textColor} text-sm font-medium mb-3`}>
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground max-w-md text-balance">{step.description}</p>
                </FadeIn>
                
                <div className="hidden md:flex justify-center items-center w-24 z-10">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    {index < steps.length - 1 ? (
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    ) : (
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    )}
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  {index % 2 === 0 ? (
                    <FadeIn 
                      delay={(index + 1) * 100} 
                      direction="left"
                      className={`rounded-xl overflow-hidden shadow-lg ${index === 0 ? 'md:-mr-16' : ''}`}
                    >
                      <div className={`aspect-[4/3] ${step.color} p-8 flex items-center justify-center`}>
                        <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                          {renderStepContent(index)}
                        </div>
                      </div>
                    </FadeIn>
                  ) : (
                    <FadeIn 
                      delay={(index + 1) * 100} 
                      direction="right"
                      className={`rounded-xl overflow-hidden shadow-lg ${index === 1 ? 'md:-ml-16' : ''}`}
                    >
                      <div className={`aspect-[4/3] ${step.color} p-8 flex items-center justify-center`}>
                        <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                          {renderStepContent(index)}
                        </div>
                      </div>
                    </FadeIn>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function renderStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0: // Upload Job Description
      return (
        <div className="h-full flex flex-col">
          <div className="bg-gray-100 dark:bg-gray-700/50 rounded-md p-3 mb-4">
            <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
            <div className="space-y-1.5">
              <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
            </div>
          </div>
          <div className="space-y-3 flex-1">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/3"></div>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/4"></div>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-2/5"></div>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
            </div>
          </div>
        </div>
      );
    
    case 1: // Import Resumes
      return (
        <div className="h-full flex flex-col">
          <div className="h-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-center mb-3">
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/3"></div>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-700 rounded p-2">
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-1"></div>
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
              </div>
            ))}
          </div>
          <div className="h-6 bg-purple-100 dark:bg-purple-900/30 rounded-md mt-3 flex items-center justify-center">
            <div className="h-2 bg-purple-200 dark:bg-purple-700 rounded w-1/4"></div>
          </div>
        </div>
      );
    
    case 2: // AI Analysis
      return (
        <div className="h-full flex flex-col">
          <div className="flex-1 grid grid-cols-3 gap-2 mb-3">
            <div className="col-span-2 bg-gray-100 dark:bg-gray-700/50 rounded-md p-2">
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-1"></div>
              <div className="space-y-1">
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
              </div>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 rounded-md p-2 flex flex-col items-center justify-center">
              <div className="h-8 w-8 rounded-full border-4 border-green-300 dark:border-green-700 border-t-transparent animate-spin mb-1"></div>
              <div className="h-2 bg-green-200 dark:bg-green-700 rounded w-3/4"></div>
            </div>
          </div>
          
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 p-2 border border-gray-200 dark:border-gray-700 rounded-md">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                <div className="flex-1">
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-1"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold">
                  {95 - i * 8}%
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    
    case 3: // Review Top Matches
      return (
        <div className="h-full flex flex-col">
          <div className="flex gap-2 mb-3">
            <div className="flex-1 border border-gray-200 dark:border-gray-700 rounded-md p-2">
              <div className="h-2.5 bg-gray-200 dark:bg-gray-600 rounded w-1/3 mb-2"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                <div className="flex-1">
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-1"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            <div className="w-24 flex items-center justify-center bg-green-50 dark:bg-green-900/20 rounded-md">
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-400 text-lg font-bold">
                95%
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 flex-1">
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/4 mb-3"></div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["Python", "React", "AI", "ML", "Node.js"].map((skill, i) => (
                <div key={i} className="h-6 bg-amber-100 dark:bg-amber-900/30 rounded-full px-2 flex items-center justify-center">
                  <div className="h-2 bg-amber-200 dark:bg-amber-700 rounded w-12"></div>
                </div>
              ))}
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/3 mb-2"></div>
            <div className="space-y-1">
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      );
      
    default:
      return null;
  }
}
