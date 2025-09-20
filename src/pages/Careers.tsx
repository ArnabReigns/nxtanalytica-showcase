import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of data analytics and AI innovation
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Openings
            </h2>
            <p className="text-muted-foreground">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-background shadow-lg">
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">
                      Java Developer – Banking Sector
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span>📍 Kolkata (Hybrid/Remote)</span>
                      <span>💼 Full Time</span>
                      <span>⭐ Banking Domain</span>
                    </div>
                  </div>
                  <Button size="lg">Apply Now</Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Python", "RabbitMQ", "Kafka", "Spring", "REST APIs", "SQL"].map((tech) => (
                        <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Experience Level</h4>
                    <p className="text-muted-foreground text-sm">
                      Mid to Senior level with banking/financial services experience preferred
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">What You'll Do:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Build and maintain robust Java applications for banking solutions
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Collaborate with cross-functional teams to define and deliver features
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Optimize performance and ensure code quality through reviews and testing
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Stay ahead of tech trends and contribute to continuous improvement
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">What You Bring:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Experience in Java development within banking or financial services
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Strong knowledge of Spring Framework, RESTful APIs, and SQL
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Exposure to Python, RabbitMQ, Kafka is a plus
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Agile mindset and excellent problem-solving skills
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Why Join Us:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Work on meaningful projects that impact millions
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Friendly, diverse team culture
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Continuous learning and career development
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-primary">NxtAnalytica</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-background">
              <CardHeader>
                <div className="text-4xl mb-4">🚀</div>
                <CardTitle>Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with cutting-edge technologies and shape the future of data analytics
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 bg-background">
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle>Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a diverse team that values collaboration, creativity, and continuous learning
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 bg-background">
              <CardHeader>
                <div className="text-4xl mb-4">📈</div>
                <CardTitle>Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advance your career with mentorship, training, and challenging projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;