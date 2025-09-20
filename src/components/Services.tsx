import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern frameworks like React, Next.js, and responsive design principles.",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with seamless user experience and native performance.",
      icon: "📱"
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js, Express, Python, and Java for scalable applications.",
      icon: "⚙️"
    },
    {
      title: "Database Solutions",
      description: "Efficient data management with MongoDB, PostgreSQL, and advanced queuing systems.",
      icon: "🗄️"
    },
    {
      title: "Cloud Hosting",
      description: "Reliable hosting solutions with auto-scaling, monitoring, and 99.9% uptime guarantee.",
      icon: "☁️"
    },
    {
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your website's visibility and search rankings.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
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