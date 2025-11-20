import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  FileText,
  BarChart3,
  Brain,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Landing = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced NLP algorithms analyze your resume against job descriptions with precision.",
    },
    {
      icon: Target,
      title: "ATS Score",
      description: "Get instant feedback on how well your resume matches Applicant Tracking Systems.",
    },
    {
      icon: Sparkles,
      title: "Keyword Optimization",
      description: "Identify missing keywords and get smart suggestions to improve your match rate.",
    },
    {
      icon: BarChart3,
      title: "Visual Analytics",
      description: "Beautiful charts and reports that make understanding your score effortless.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "This tool helped me land 3 interviews in one week. The keyword suggestions were spot-on!",
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      content: "Finally, a tool that actually understands ATS systems. My application success rate doubled.",
    },
    {
      name: "Emily Rodriguez",
      role: "HR Recruiter",
      content: "I recommend this to all candidates. It's like having an insider view of what we look for.",
    },
  ];

  const faqs = [
    {
      question: "What is ATS?",
      answer: "Applicant Tracking Systems (ATS) are software used by companies to filter and rank resumes before human review.",
    },
    {
      question: "How accurate is the analysis?",
      answer: "Our AI-powered system uses advanced NLP techniques with 95%+ accuracy in keyword matching and scoring.",
    },
    {
      question: "What file formats are supported?",
      answer: "We support PDF and DOCX formats for resume uploads.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all uploads are encrypted and automatically deleted after 24 hours.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Trusted by 10,000+ job seekers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Resume Keyword Analyzer
              </span>
              <br />
              <span className="text-foreground">Boost Your ATS Score Instantly</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload your resume, paste a job description, and get instant AI-powered insights
              to optimize your application for Applicant Tracking Systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/upload">
                <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity text-lg px-8 animate-glow">
                  Upload Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need to optimize your resume</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 glass-card hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to better applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Resume</h3>
              <p className="text-muted-foreground">Drop your PDF or DOCX resume file</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Paste Job Description</h3>
              <p className="text-muted-foreground">Add the job posting you're targeting</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
              <p className="text-muted-foreground">Receive detailed analysis and suggestions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Job Seekers</h2>
            <p className="text-xl text-muted-foreground">See what our users have to say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 glass-card">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 glass-card">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of successful job seekers using our AI-powered analyzer
          </p>
          <Link to="/upload">
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity text-lg px-8 animate-glow">
              Start Analyzing Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
