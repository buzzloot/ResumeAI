import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Resume Screening</h3>
              <p className="text-muted-foreground">Our advanced AI algorithms analyze resumes to match candidates with the best job opportunities.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">User-Friendly Interface</h3>
              <p className="text-muted-foreground">A clean and intuitive interface makes it easy for users to navigate and manage their job applications.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Real-Time Job Matches</h3>
              <p className="text-muted-foreground">Get real-time job matches based on your skills and preferences, ensuring you never miss an opportunity.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Customizable Profiles</h3>
              <p className="text-muted-foreground">Create and customize your profile to stand out to potential employers and showcase your unique skills.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Secure and Private</h3>
              <p className="text-muted-foreground">We prioritize your privacy and security, ensuring your data is protected at all times.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-muted-foreground">Our dedicated support team is available 24/7 to assist you with any questions or issues you may have.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full">Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
