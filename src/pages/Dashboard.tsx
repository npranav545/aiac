import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  Download,
  TrendingUp,
  Target,
  Sparkles,
  FileText,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  // Mock data
  const atsScore = 78;
  const matchingKeywords = 24;
  const partialMatches = 12;
  const missingKeywords = 8;

  const exactMatches = [
    "React", "TypeScript", "Node.js", "JavaScript", "AWS", "Docker",
    "Git", "REST API", "Agile", "Problem Solving", "Team Leadership",
    "CI/CD", "MongoDB", "Express.js", "Redux", "Testing", "DevOps",
    "Microservices", "Linux", "SQL", "Python", "HTML", "CSS", "Responsive Design"
  ];

  const partialMatchesData = [
    { keyword: "Cloud Technologies", match: "AWS Experience" },
    { keyword: "Team Leadership", match: "Leadership Skills" },
    { keyword: "Frontend Development", match: "React Development" },
    { keyword: "Backend Systems", match: "Node.js Backend" },
    { keyword: "Database Management", match: "SQL & MongoDB" },
    { keyword: "Code Quality", match: "Testing & QA" },
    { keyword: "Project Management", match: "Agile Methodology" },
    { keyword: "Communication Skills", match: "Team Collaboration" },
    { keyword: "Performance Optimization", match: "System Optimization" },
    { keyword: "Security Best Practices", match: "Secure Coding" },
    { keyword: "API Development", match: "REST API Design" },
    { keyword: "Version Control", match: "Git Workflow" },
  ];

  const missingKeywordsData = [
    { keyword: "Kubernetes", category: "DevOps", priority: "high" },
    { keyword: "GraphQL", category: "Backend", priority: "medium" },
    { keyword: "Terraform", category: "Infrastructure", priority: "medium" },
    { keyword: "Jenkins", category: "CI/CD", priority: "high" },
    { keyword: "Redis", category: "Database", priority: "low" },
    { keyword: "WebSockets", category: "Real-time", priority: "medium" },
    { keyword: "OAuth", category: "Security", priority: "high" },
    { keyword: "Unit Testing", category: "Quality", priority: "high" },
  ];

  const aiSuggestions = [
    {
      title: "Add Cloud Orchestration Skills",
      description: "Consider adding 'Kubernetes' and 'Container Orchestration' to your Skills section. These are highly valued in the job description.",
      impact: "High"
    },
    {
      title: "Strengthen CI/CD Experience",
      description: "Mention specific CI/CD tools like 'Jenkins' or 'GitHub Actions' in your project descriptions.",
      impact: "High"
    },
    {
      title: "Quantify Your Achievements",
      description: "Add metrics to your accomplishments. For example: 'Improved application performance by 40%' rather than just 'Improved performance'.",
      impact: "Medium"
    },
    {
      title: "Highlight API Development",
      description: "Emphasize your GraphQL and REST API experience more prominently in your work history.",
      impact: "Medium"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/upload">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Upload
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">Resume Analysis Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Detailed insights into your resume's ATS compatibility
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">ATS Match Score</span>
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {atsScore}%
                </div>
                <Progress value={atsScore} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">Good match</p>
              </div>
            </Card>

            <Card className="p-6 glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Matching Keywords</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div className="text-4xl font-bold text-success mb-2">{matchingKeywords}</div>
                <p className="text-sm text-muted-foreground">Exact matches found</p>
              </div>
            </Card>

            <Card className="p-6 glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Partial Matches</span>
                  <AlertCircle className="w-5 h-5 text-warning" />
                </div>
                <div className="text-4xl font-bold text-warning mb-2">{partialMatches}</div>
                <p className="text-sm text-muted-foreground">Similar keywords</p>
              </div>
            </Card>

            <Card className="p-6 glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Missing Keywords</span>
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <div className="text-4xl font-bold text-destructive mb-2">{missingKeywords}</div>
                <p className="text-sm text-muted-foreground">Opportunities to improve</p>
              </div>
            </Card>
          </div>

          {/* Keywords Analysis */}
          <Card className="p-6 glass-card mb-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-primary" />
              Keywords Analysis
            </h2>

            <Tabs defaultValue="exact" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="exact">Exact Matches</TabsTrigger>
                <TabsTrigger value="partial">Partial Matches</TabsTrigger>
                <TabsTrigger value="missing">Missing Keywords</TabsTrigger>
              </TabsList>

              <TabsContent value="exact" className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {exactMatches.map((keyword, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-success/10 border-success text-success hover:bg-success/20 px-4 py-2 text-sm animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="partial" className="space-y-4">
                <div className="space-y-3">
                  {partialMatchesData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-warning/5 border border-warning/20 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="w-4 h-4 text-warning" />
                        <div>
                          <p className="font-medium">{item.keyword}</p>
                          <p className="text-sm text-muted-foreground">Matches: {item.match}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-warning/10 border-warning text-warning">
                        Similar
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="missing" className="space-y-4">
                <div className="space-y-3">
                  {missingKeywordsData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/20 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <XCircle className="w-4 h-4 text-destructive" />
                        <div>
                          <p className="font-medium">{item.keyword}</p>
                          <p className="text-sm text-muted-foreground">Category: {item.category}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          item.priority === "high"
                            ? "bg-destructive/10 border-destructive text-destructive"
                            : item.priority === "medium"
                            ? "bg-warning/10 border-warning text-warning"
                            : "bg-muted border-muted-foreground/20"
                        }
                      >
                        {item.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          {/* AI Suggestions */}
          <Card className="p-6 glass-card mb-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-secondary" />
              AI-Powered Suggestions
            </h2>

            <div className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{suggestion.title}</h3>
                    <Badge
                      variant="outline"
                      className={
                        suggestion.impact === "High"
                          ? "bg-destructive/10 border-destructive text-destructive"
                          : "bg-warning/10 border-warning text-warning"
                      }
                    >
                      {suggestion.impact} Impact
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{suggestion.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Download Reports */}
          <Card className="p-6 glass-card">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-primary" />
              Download Reports
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4">
                <Download className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <p className="font-medium">Full Analysis Report (PDF)</p>
                  <p className="text-sm text-muted-foreground">Complete breakdown with charts</p>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto p-4">
                <Download className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <p className="font-medium">Keywords Summary (CSV)</p>
                  <p className="text-sm text-muted-foreground">Spreadsheet of all keywords</p>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto p-4">
                <Download className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <p className="font-medium">AI Suggestions (PDF)</p>
                  <p className="text-sm text-muted-foreground">Detailed improvement guide</p>
                </div>
              </Button>

              <Button variant="outline" className="justify-start h-auto p-4">
                <Download className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <p className="font-medium">Highlighted Resume (PDF)</p>
                  <p className="text-sm text-muted-foreground">Your resume with keyword highlights</p>
                </div>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
