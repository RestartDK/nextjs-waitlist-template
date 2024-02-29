import Image from "next/image";
import React from "react";

const benefits = [
  {
    id: 1,
    title: "Faster Web Speed",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
  },
  {
    id: 2,
    title: "No Fluff just Validate",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
  },
  {
    id: 3,
    title: "Modernised Web",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
  }
]

export default function Benefit() {
  return (
    <section className="flex flex-col gap-6 items-center justify-center py-24 sm:py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit) => (
          <React.Fragment key={benefit.id}>
            <div key={benefit.id} className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold"><span className="text-primary">{benefit.title}</span></h1>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
            <div key={benefit.id} className="flex justify-center items-center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg" alt="placeholder benefit" height={400} width={400} />
            </div>
          </React.Fragment>
        ))}
      </div>
		</section>
  );
}