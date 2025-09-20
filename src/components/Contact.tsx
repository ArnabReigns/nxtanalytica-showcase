import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 bg-muted/30">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">📧</span>
              </div>
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Send us an email and we'll get back to you within 24 hours</p>
              <p className="text-primary font-medium">hello@nxtanalytica.com</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-muted/30">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">💬</span>
              </div>
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Chat with our team for immediate assistance</p>
              <Button variant="outline">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-muted/30">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">📅</span>
              </div>
              <CardTitle>Schedule Call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Book a consultation call to discuss your project</p>
              <Button variant="outline">Book Meeting</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's transform your ideas into reality with our expert development team
          </p>
          <Button size="lg" variant="outline" className="bg-background text-primary hover:bg-background/90">
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;