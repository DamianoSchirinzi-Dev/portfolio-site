"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, lazy, Suspense } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Lazy load the contact modal for better performance
const ContactModal = lazy(() =>
  import("@/components/contact-modal").then((module) => ({
    default: module.ContactModal,
  }))
);

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Reduce motion for mobile devices
  const shouldReduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Escencia",
      description:
        "A sleek, modern website designed for Escencia, a Japanese fusion restaurant. Built with Next.js to deliver fast performance and smooth UX.",
      image: "/images/escencia.avif",
      tech: ["Next.js", "TypeScript", "Framer Motion"],
      github:
        "https://github.com/DamianoSchirinzi-Dev/escencia-restaurant-template",
      live: "https://escencia-restaurant-template.vercel.app/",
    },
    {
      title: "Habit Tracker Application",
      description:
        "Habit tracking application with real-time updates and analytics",
      image: "/images/habittracker.avif",
      tech: ["NET 8", "Vue 3", "OpenAI"],
      github: "https://github.com/DamianoSchirinzi-Dev/solo-levelling-app",
    },
    {
      title: "Mediterraneo",
      description:
        "A vibrant and elegant website built for Mediterraneo, an authentic Greek restaurant. Developed with React.js and styled for a warm, Mediterranean feel.",
      image: "/images/mediterraneo.avif",
      tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
      github:
        "https://github.com/DamianoSchirinzi-Dev/mediterraneo-restaurant_template",
      live: "https://mediterraneo-restaurant-template.vercel.app/",
    },
    {
      title: "Time Management App",
      description:
        "A pomodoro timer application designed to boost productivity and focus. Features real-time tracking and analytics.",
      image: "/images/pomodoro.avif",
      tech: ["Next.js", "Tailwind"],
      github: "https://github.com/DamianoSchirinzi-Dev/pomodoro-timer",
      live: "https://pomodoro-timer-one-zeta.vercel.app/",
    },
    {
      title: "THREE.js Demo Site",
      description:
        "A showcase of interactive 3D animations and effects using THREE.js. Built to demonstrate the power of WebGL and modern JavaScript.",
      image: "/images/threejs.avif",
      tech: ["Three.js", "Javascript"],
      github: "https://github.com/DamianoSchirinzi-Dev/Three.js-Demo-Site",
      live: "https://three-js-demo-site.vercel.app/",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      description: "React, Next.js, Vue.js, TypeScript",
    },
    {
      name: "Backend Development",
      icon: Code,
      description: ".NET, SQL, C#,",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Figma, Adobe XD, Responsive Design",
    },
    {
      name: "Performance",
      icon: Zap,
      description: "Optimization, SEO, Core Web Vitals",
    },
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-64 h-64 mx-auto mb-8 relative">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Image
                    src="/images/me.avif"
                    alt="Profile"
                    width={248}
                    height={248}
                    className="rounded-full"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Damiano Schirinzi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Full‑Stack Developer & UI/UX Designer dedicated to crafting seamless
            digital experiences that genuinely delight users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="/pdf/cv.pdf" download className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I’m a full‑stack developer with 6+ years of experience building
              digital products that pair thoughtful design with robust
              functionality. I turn complex problems into intuitive, elegant
              solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                    >
                      <skill.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <motion.div
              className="flex gap-6 w-max"
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group w-96 flex-shrink-0"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        priority={index < 2} // Prioritize first 2 images
                        loading={index < 2 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Got a project idea? I’d love to hear about it. Let’s turn it into
              reality together.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Suspense
                fallback={
                  <div className="animate-pulse bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full">
                    Loading...
                  </div>
                }
              >
                <ContactModal />
              </Suspense>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/DamianoSchirinzi-Dev"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github className="h-6 w-6 text-white" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/damiano-schirinzi-b60a53210/"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Damiano Schirinzi.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
