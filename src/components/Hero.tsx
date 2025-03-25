import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-100/30 blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container px-4 sm:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <FadeIn className="mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-4">
              Resume Screening Simplified
            </div>
          </FadeIn>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 text-balance">
            <AnimatedText text="AI-Powered Resume Screening for Modern Recruiting" />
          </h1>
          
          <FadeIn delay={200} className="mb-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Save hours of manual screening with our advanced AI that matches the perfect candidates to your job descriptions with unparalleled accuracy.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8">Get Started</Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Watch Demo
              </Button>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={600} className="relative max-w-5xl mx-auto">
          <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <div className="h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="glass-card w-[90%] h-[85%] rounded-xl overflow-hidden border-[0.5px] border-white/10 shadow-lg">
                <div className="h-10 bg-gray-800 flex items-center px-4 border-b border-gray-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto text-white/60 text-xs font-medium">ResumeScreenAI Dashboard</div>
                </div>
                <div className="p-6 h-[calc(100%_-_40px)] flex gap-4">
                  <div className="w-1/4 bg-gray-800/50 rounded-lg p-3 h-full">
                    <div className="mb-4">
                      <div className="h-6 bg-gray-700/60 rounded-md w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-700/40 rounded-md w-1/2"></div>
                    </div>
                    <div className="space-y-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-8 bg-gray-700/30 rounded-md"></div>
                      ))}
                    </div>
                  </div>
                  <div className="w-3/4 space-y-4">
                    <div className="bg-gray-800/30 rounded-lg p-4 h-1/3">
                      <div className="flex justify-between mb-2">
                        <div className="h-5 bg-gray-700/60 rounded-md w-1/4"></div>
                        <div className="h-5 bg-blue-500/40 rounded-md w-1/6"></div>
                      </div>
                      <div className="flex gap-3 h-[calc(100%_-_28px)]">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex-1 bg-gray-800/70 rounded-md"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 h-2/3">
                      <div className="flex-1 bg-gray-800/30 rounded-lg p-4">
                        <div className="h-5 bg-gray-700/60 rounded-md w-1/3 mb-3"></div>
                        <div className="space-y-2 h-[calc(100%_-_32px)] overflow-hidden">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex gap-2 items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-700/50"></div>
                              <div className="flex-1">
                                <div className="h-4 bg-gray-700/60 rounded-md w-1/2 mb-1"></div>
                                <div className="h-3 bg-gray-700/40 rounded-md w-5/6"></div>
                              </div>
                              <div className="h-8 w-8 rounded-md bg-blue-500/30"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-800/30 rounded-lg p-4">
                        <div className="h-5 bg-gray-700/60 rounded-md w-2/5 mb-3"></div>
                        <div className="h-[calc(100%_-_32px)] bg-gray-800/70 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Powered by advanced AI</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
