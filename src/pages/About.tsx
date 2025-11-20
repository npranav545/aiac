import { Card } from "@/components/ui/card";
import { Brain, Target, Zap, Shield, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced NLP Technology",
      description: "We use state-of-the-art Natural Language Processing algorithms including TF-IDF, Named Entity Recognition, and Word2Vec for semantic analysis.",
    },
    {
      icon: Target,
      title: "ATS System Understanding",
      description: "Our tool is built on deep research into how Applicant Tracking Systems work, ensuring your resume passes through automated filters.",
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Get instant feedback on your resume with our optimized processing pipeline that analyzes thousands of data points in seconds.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All uploads are encrypted and automatically deleted after 24 hours. We never share your data with third parties.",
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join 10,000+ job seekers who have successfully improved their resumes and landed more interviews using our platform.",
    },
    {
      icon: Award,
      title: "Recruiter Approved",
      description: "Developed in consultation with HR professionals and recruiters to ensure our recommendations align with industry best practices.",
    },
  ];

  const technologies = [
    {
      name: "TF-IDF",
      description: "Term Frequency-Inverse Document Frequency for keyword importance scoring",
    },
    {
      name: "NER",
      description: "Named Entity Recognition to identify skills, companies, and qualifications",
    },
    {
      name: "Word2Vec",
      description: "Semantic similarity matching to find related keywords and phrases",
    },
    {
      name: "spaCy",
      description: "Industrial-strength NLP library for advanced text processing",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About ATS Analyzer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to help job seekers navigate the complex world of Applicant Tracking Systems
              and land their dream jobs. Our AI-powered platform analyzes resumes with the same precision
              as corporate ATS systems, giving you the insights you need to stand out.
            </p>
          </div>

          {/* What We Do */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 glass-card hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* How ATS Works */}
          <div className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Understanding ATS Systems</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="p-6 glass-card">
                <h3 className="text-xl font-semibold mb-3">What is an ATS?</h3>
                <p className="text-muted-foreground">
                  An Applicant Tracking System (ATS) is software used by companies to manage job applications.
                  Over 90% of Fortune 500 companies use ATS to filter resumes before they reach human recruiters.
                  These systems scan resumes for keywords, qualifications, and formatting to rank candidates.
                </p>
              </Card>

              <Card className="p-6 glass-card">
                <h3 className="text-xl font-semibold mb-3">How Does It Work?</h3>
                <p className="text-muted-foreground">
                  ATS software parses your resume to extract information about your skills, experience, and education.
                  It then compares this data against the job description, looking for keyword matches and relevant
                  qualifications. Resumes that score highly are moved forward in the hiring process, while others
                  are automatically rejected.
                </p>
              </Card>

              <Card className="p-6 glass-card">
                <h3 className="text-xl font-semibold mb-3">Why Does It Matter?</h3>
                <p className="text-muted-foreground">
                  Even if you're the perfect candidate for a job, your resume might never reach a human recruiter
                  if it doesn't pass the ATS screening. That's why optimizing your resume for ATS compatibility
                  is crucial in today's job market. Our tool helps you identify exactly what ATS systems are
                  looking for in your resume.
                </p>
              </Card>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our platform leverages cutting-edge AI and NLP technologies to provide accurate,
              actionable insights into your resume's ATS compatibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-6 glass-card">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{tech.name}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <p className="text-muted-foreground">Resumes Analyzed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <p className="text-muted-foreground">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  3.2x
                </div>
                <p className="text-muted-foreground">More Interviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
