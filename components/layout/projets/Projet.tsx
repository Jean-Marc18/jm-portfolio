"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Projet = () => {
  const router = useRouter();
  const projects = [
    {
      title: "Projet 1",
      description: "description...",
    },
    {
      title: "Projet 2",
      description: "description...",
    },
    {
      title: "Projet 3",
      description: "description...",
    },
    {
      title: "Projet 4",
      description: "description...",
    },
  ];
  return (
    <section id="projects" className="mt-36 sm:mt-44 mb-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-4">
        <div className="flex-auto flex flex-col w-full items-start justify-center h-full gap-4">
          <BoxReveal boxColor={"transparent"} duration={0.25}>
            <h1 className="text-5xl font-labil font-semibold">Projects</h1>
          </BoxReveal>
          <BoxReveal boxColor={"transparent"} duration={0.15}>
            <p className="text-balance font-labil">
              Explore my projects, showcasing my expertise in crafting <br />{" "}
              user-friendly web design and digital solutions.
            </p>
          </BoxReveal>
        </div>
        <div className="flex-auto flex w-full items-end justify-end h-full">
          <BoxReveal boxColor={"transparent"} duration={0.6}>
            <div className="flex flex-col items-end justify-center">
              <Button
                variant="ghost"
                className="text-lg"
                onClick={() => router.push("/projects")}
              >
                Voir plus <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </BoxReveal>
        </div>
      </div>

      {/* Projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center py-12 gap-7 mt-10 w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-center gap-4 w-fit max-sm:w-full"
          >
            <div className="h-[15rem] w-[20rem] max-sm:w-full">
              <Skeleton className="w-full h-full" />
            </div>
            <div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projet;
