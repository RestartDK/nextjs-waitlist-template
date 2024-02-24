import { PersonStanding, Phone, Search, Zap } from "lucide-react";

export default function Features() {
  return (
    <section className="flex flex-col gap-6 items-center justify-center py-24 sm:py-30">
      <h2 className="text-4xl font-bold">How it <span className="text-primary">Works</span> Step by Step</h2>
      <p className="text-muted-foreground text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <div className="flex flex-col gap-4 text-foreground justify-center items-center px-3 py-6 bg-card rounded-md">
          <Zap className="h-10 w-10"/>
          <h3 className="text-xl font-bold">Feature 1</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum
          </p>
        </div>
        <div className="flex flex-col gap-4 text-foreground justify-center items-center px-3 py-6 bg-card rounded-md">
          <Search className="h-10 w-10"/>
          <h3 className="text-2xl font-bold">Feature 2</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum
          </p>
        </div>
        <div className="flex flex-col gap-4 text-foreground justify-center items-center px-3 py-6 bg-card rounded-md">
          <PersonStanding className="h-10 w-10"/>
          <h3 className="text-2xl font-bold">Feature 3</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum
          </p>
        </div>
        <div className="flex flex-col gap-4 text-foreground justify-center items-center px-3 py-6 bg-card rounded-md">
          <Phone className="h-10 w-10"/>
          <h3 className="text-2xl font-bold">Feature 4</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum
          </p>
        </div>
      </div>
    </section>
  );
}