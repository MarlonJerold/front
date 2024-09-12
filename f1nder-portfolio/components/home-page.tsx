'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Database, PenTool, Cog, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"

export function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  }

  const serviceBlockVariants = (index: number) => ({
    hidden: { 
      opacity: 0, 
      y: index % 2 === 0 ? -50 : 50, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
        delay: index * 0.2
      }
    }
  })

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-16 flex items-center bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 ">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold text-white">F1nder Software</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400" href="#services">
            Serviços
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400" href="#about">
            Sobre
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400" href="#contact">
            Contato
          </Link>
        </nav>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
            className=""
            />
      </header>
      <section className="relative w-full h-screen flex items-center justify-center ">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                initial="hidden"
                animate="visible"
                variants={fadeInLeft}
              >
                Tech Up Together
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-gray-200 md:text-xl"
                initial="hidden"
                animate="visible"
                variants={fadeInLeft}
                transition={{ delay: 0.2 }}
              >
                Onde pessoas e tecnologia se completam. Transformando ideias em software desde 2010.
              </motion.p>
              <motion.div 
                className="space-x-4"
                initial="hidden"
                animate="visible"
                variants={fadeInLeft}
                transition={{ delay: 0.4 }}
              >
                <Button className="bg-white text-blue-600 hover:bg-gray-200">Conheça a F1nder</Button>
              </motion.div>
            </div>
          </div>
        </section>


        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" ref={ref}>
  <div className="container px-4 md:px-6 mx-auto">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
      Conheça as soluções que fazem os negócios crescerem
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[ 
        { icon: Globe, title: "Soluções Digitais", description: "Produtos digitais mobile, Web ou novos serviços." },
        { icon: Database, title: "Dados, IA e Machine Learning", description: "Produtos de dados alinhados aos seus objetivos de growth." },
        { icon: PenTool, title: "Design & Experiência", description: "Usabilidade digital eficiente para os seus produtos." },
        { icon: Cog, title: "Transformação Ágil", description: "Agilidade do nível estratégico ao operacional." }
      ].map((service, index) => (
        <motion.div 
          key={service.title}
          className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg"
          variants={serviceBlockVariants(index)}
          initial="hidden"
          animate={controls}
        >
          <service.icon className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-400">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
      Digital Business Company
    </h2>
    <p className="text-gray-400 text-center max-w-[800px] mx-auto">
      Desde 2010, promovemos a revolução digital em diferentes negócios pelo mundo através da tecnologia e de pessoas
      altamente capacitadas. Entregamos a nossos clientes resultados de valor e promovemos sua evolução.
    </p>
  </div>
</section>

      <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
        <ul className="space-y-2">
          <li>Soluções Digitais</li>
          <li>Dados, IA e Machine Learning</li>
          <li>Design & Experiência</li>
          <li>Transformação Ágil</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Localização</h3>
        <p className="flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Av. Tecnologia, 1234 - São Paulo, SP
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Contato</h3>
        <p className="flex items-center mb-2">
          <Phone className="w-5 h-5 mr-2" />
          (11) 1234-5678
        </p>
        <p className="flex items-center">
          <Mail className="w-5 h-5 mr-2" />
          contato@findersoftware.com
        </p>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
      <p className="text-sm">© 2023 F1nder Software. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

    </div>
  )
}