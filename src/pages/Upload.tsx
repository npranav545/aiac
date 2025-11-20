import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload as UploadIcon, FileText, X, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === "application/pdf" || 
        droppedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setFile(droppedFile);
      toast({
        title: "File uploaded successfully!",
        description: `${droppedFile.name} is ready for analysis.`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File uploaded successfully!",
        description: `${selectedFile.name} is ready for analysis.`,
      });
    }
  };

  const handleAnalyze = () => {
    if (!file) {
      toast({
        title: "Resume required",
        description: "Please upload your resume first.",
        variant: "destructive",
      });
      return;
    }

    if (!jobDescription.trim()) {
      toast({
        title: "Job description required",
        description: "Please paste the job description.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Analyzing...",
      description: "Processing your resume with AI",
    });

    // Simulate processing and navigate to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Analyze Your Resume</h1>
              <p className="text-xl text-muted-foreground">
                Upload your resume and paste the job description to get started
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Resume Upload */}
              <Card className="p-6 glass-card">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-primary" />
                  Upload Resume
                </h2>

                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {file ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3 p-4 bg-muted rounded-lg">
                        <FileText className="w-8 h-8 text-primary" />
                        <div className="flex-1 text-left">
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                        <button
                          onClick={() => setFile(null)}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <label htmlFor="resume-upload">
                        <Button variant="outline" className="w-full" asChild>
                          <span>Change File</span>
                        </Button>
                      </label>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <UploadIcon className="w-16 h-16 mx-auto text-muted-foreground" />
                      <div>
                        <p className="text-lg font-medium mb-1">
                          Drag and drop your resume here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          or click to browse (PDF, DOCX)
                        </p>
                      </div>
                      <label htmlFor="resume-upload">
                        <Button className="gradient-primary" asChild>
                          <span>Browse Files</span>
                        </Button>
                      </label>
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-primary" />
                    Maximum file size: 5MB
                  </p>
                  <p className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-primary" />
                    Supported formats: PDF, DOCX
                  </p>
                  <p className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-primary" />
                    Files are automatically deleted after 24 hours
                  </p>
                </div>
              </Card>

              {/* Job Description */}
              <Card className="p-6 glass-card">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-secondary" />
                  Job Description
                </h2>

                <Textarea
                  placeholder="Paste the job description here...

Example:
We are looking for a Senior Software Engineer with 5+ years of experience in React, TypeScript, and Node.js. The ideal candidate should have strong problem-solving skills and experience with cloud technologies like AWS..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[300px] resize-none"
                />

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-secondary" />
                    Include full job posting for best results
                  </p>
                  <p className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-secondary" />
                    Our AI extracts key requirements automatically
                  </p>
                  <p className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-secondary" />
                    More details = better keyword matching
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                onClick={handleAnalyze}
                disabled={!file || !jobDescription.trim()}
                className="gradient-primary hover:opacity-90 transition-opacity text-lg px-12 animate-glow"
              >
                Analyze Resume
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Upload;
