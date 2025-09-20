import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Advanced analytics solutions to uncover actionable insights, optimize performance, and predict future trends.",
      icon: "📊"
    },
    {
      title: "Digital Transformation",
      description: "Modernize legacy systems, enhance customer experiences, and enable agile, scalable operations.",
      icon: "🚀"
    },
    {
      title: "AI-Powered Innovation",
      description: "Leverage cutting-edge AI solutions to automate processes, personalize engagement, and deliver measurable outcomes.",
      icon: "🤖"
    },
    {
      title: "Business Intelligence",
      description: "Transform raw data into strategic insights with comprehensive BI solutions and real-time dashboards.",
      icon: "📈"
    },
    {
      title: "Cloud Analytics",
      description: "Scalable cloud-based analytics platforms with advanced security and seamless integration capabilities.",
      icon: "☁️"
    },
    {
      title: "Consulting Services",
      description: "Strategic consulting to build resilient, data-driven ecosystems that thrive in the digital age.",
      icon: "💡"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-background">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;