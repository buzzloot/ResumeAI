import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <a href="#" className="text-xl font-bold tracking-tight">
                ResumeScreen<span className="text-blue-500">AI</span>
              </a>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              AI-powered resume screening that saves you time and finds the best candidates for your roles.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className={linkStyle}>Features</a></li>
              <li><a href="#how-it-works" className={linkStyle}>How It Works</a></li>
              <li><a href="#pricing" className={linkStyle}>Pricing</a></li>
              <li><a href="#" className={linkStyle}>Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className={linkStyle}>Blog</a></li>
              <li><a href="#" className={linkStyle}>Documentation</a></li>
              <li><a href="#" className={linkStyle}>Help Center</a></li>
              <li><a href="#" className={linkStyle}>API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className={linkStyle}>About Us</a></li>
              <li><a href="#" className={linkStyle}>Careers</a></li>
              <li><a href="#" className={linkStyle}>Contact</a></li>
              <li><a href="#" className={linkStyle}>Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground order-2 md:order-1">
            © {currentYear} ResumeScreenAI. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 order-1 md:order-2">
            <a href="#" className={socialStyle}>
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className={socialStyle}>
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className={socialStyle}>
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = cn(
  "text-muted-foreground hover:text-foreground transition-colors inline-block"
);

const socialStyle = cn(
  "text-muted-foreground hover:text-foreground transition-colors"
);
