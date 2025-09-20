const Technologies = () => {
  const techCategories = [
    {
      category: "Analytics & AI",
      technologies: ["Python", "TensorFlow", "PyTorch", "Apache Spark"]
    },
    {
      category: "Data Processing",
      technologies: ["Kafka", "RabbitMQ", "Apache Airflow", "Hadoop"]
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      category: "Cloud & Infrastructure",
      technologies: ["AWS", "Docker", "Kubernetes", "Apache Superset"]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver powerful data analytics and AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-background rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center justify-center">
                    <span className="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-medium w-full text-center">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-background rounded-xl p-6">
            <span className="text-2xl">🚀</span>
            <div className="text-left">
              <div className="font-semibold text-foreground">Always Learning</div>
              <div className="text-muted-foreground text-sm">We stay updated with the latest tech trends</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;