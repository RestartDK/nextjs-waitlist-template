import { PersonStanding, Phone, Search, Zap } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Feature 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    icon: Zap
  },
  {
    id: 2,
    title: "Feature 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    icon: Search
  },
  {
    id: 3,
    title: "Feature 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    icon: PersonStanding
  },
  {
    id: 4,
    title: "Feature 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    icon: Phone
  }
]

export default function Features() {
  return (
    <section className="flex flex-col gap-6 items-center justify-center py-24 sm:py-30">
      <h2 className="text-4xl font-bold text-center">How it <span className="text-primary">Works</span> Step by Step</h2>
      <p className="text-muted-foreground text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col gap-4 text-foreground justify-center items-center px-3 py-6 bg-card rounded-md">
            <feature.icon className="h-10 w-10"/>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="text-center">
              {feature.description}
            </p>
          </div>
        
        ))}
      </div>
    </section>
  );
}