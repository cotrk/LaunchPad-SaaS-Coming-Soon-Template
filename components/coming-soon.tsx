"use client"

import React, { useCallback, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowUp,
  BarChart2,
  CheckCircle2,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Twitter,
  Zap,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { siteConfig } from "@/config/site"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import dynamic from "next/dynamic"

const Particles = dynamic(() => import("react-tsparticles").then((mod) => mod.Particles), { ssr: false })
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
})

type FormValues = z.infer<typeof formSchema>

export default function ComingSoon() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { theme, setTheme } = useTheme()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Email submitted:", values.email)
    setIsLoading(false)
    setIsSubmitted(true)
    form.reset()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const starsConfig = useMemo(
    () => ({
      particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true, anim: { enable: true, speed: 0.2, opacity_min: 0.1, sync: false } },
        size: { value: 2, random: true, anim: { enable: true, speed: 0.5, size_min: 0.1, sync: false } },
        line_linked: { enable: false },
        move: { enable: true, speed: 0.1, direction: "none", random: true, straight: false, out_mode: "out" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "bubble" },
          onclick: { enable: false },
          resize: true,
        },
        modes: {
          bubble: { distance: 100, size: 3, duration: 2, opacity: 0.6, speed: 3 },
        },
      },
      retina_detect: true,
    }),
    [],
  )

  const featureIcons = useMemo(() => [Zap, BarChart2, Layers], [])

  const ParticlesComponent = useMemo(() => {
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={starsConfig}
        className="absolute inset-0 z-0 pointer-events-none"
      />
    )
  }, [particlesInit, starsConfig])

  const MemoizedForm = useMemo(() => {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="pl-10 pr-4 py-3 w-full transition-all duration-300 border-2 focus:border-primary text-base rounded-lg"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full text-lg py-6 transition-all duration-300 bg-cta-gradient from-primary to-purple-600 hover:to-purple-700 text-white font-semibold rounded-lg relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              {isLoading ? "Submitting..." : "Notify Me"}
              {!isLoading && (
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              )}
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out" />
          </Button>
        </form>
      </Form>
    )
  }, [form, isLoading])

  const MemoizedFeatures = useMemo(() => {
    return siteConfig.features.map((feature, index) => (
      <motion.div
        key={index}
        className="group relative rounded-xl border p-8 shadow-md transition-all duration-500 ease-in-out hover:shadow-lg bg-gradient-to-br from-background via-background to-accent/5 backdrop-blur-sm overflow-hidden"
        whileHover={{
          y: -5,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              {React.createElement(featureIcons[index], { className: "h-8 w-8 text-primary mr-3" })}
            </motion.div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 font-heading">
              {feature.title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5 opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-600 transform origin-left scale-x-0"
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    ))
  }, [siteConfig.features, featureIcons])

  const MemoizedFooterForm = useMemo(() => {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} className="w-full text-sm" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-sm font-semibold">
            Subscribe
          </Button>
        </form>
      </Form>
    )
  }, [form, handleSubmit])

  return (
    <motion.div
      className="relative flex min-h-screen flex-col bg-gradient-radial from-background to-accent/20 bg-hero-pattern bg-fixed bg-center bg-repeat overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {ParticlesComponent}
      <div className="relative z-10">
        <header className="container mx-auto py-6">
          <motion.div className="flex items-center justify-between" variants={itemVariants}>
            <div className="flex items-center">
              {siteConfig.logo.icon === "Sparkles" && <Sparkles className="h-10 w-10 text-primary" />}
            </div>
            <div className="flex items-center gap-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="rounded-full hover:bg-accent transition-colors duration-300"
                  >
                    {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </header>

        <main className="container mx-auto flex-1 px-4">
          <div className="mx-auto max-w-4xl py-20 sm:py-24 md:py-32 space-y-20">
            <div className="text-center space-y-8">
              <motion.div
                variants={itemVariants}
                className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary tracking-wide"
              >
                Coming Soon
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading flex flex-col items-center space-y-2 mb-6 text-shadow-sm"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 leading-tight inline-flex px-2">
                  {siteConfig.description.split(" ").slice(0, 3).join(" ")}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 leading-tight inline-flex px-2">
                  {siteConfig.description.split(" ").slice(3).join(" ")}
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
              >
                A modern, responsive, and customizable coming soon page template designed for SaaS startups and product
                launches.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="mx-auto max-w-md bg-card p-8 rounded-xl shadow-lg border border-accent backdrop-blur-sm"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center gap-2 text-base text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Thanks for signing up! We'll notify you when we launch.</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 font-heading text-center text-shadow-sm">
                      Be the first to know!
                    </h3>
                    {MemoizedForm}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div className="mx-auto max-w-6xl py-20" initial="visible" animate="visible">
            <motion.h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-foreground font-heading text-shadow-sm">
              What to expect
            </motion.h2>
            <motion.div className="grid gap-8 md:gap-10 md:grid-cols-3">{MemoizedFeatures}</motion.div>
          </motion.div>
        </main>

        <motion.footer
          variants={itemVariants}
          className="relative z-10 border-t bg-gradient-to-b from-background to-muted backdrop-blur-sm"
        >
          <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold mb-6 flex items-center font-heading text-shadow-sm">
                  {siteConfig.logo.icon === "Sparkles" && <Sparkles className="h-6 w-6 mr-2 text-primary" />}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    {siteConfig.logo.text}
                  </span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  Empowering businesses with innovative SaaS solutions. Stay ahead of the curve with our cutting-edge
                  technology.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary transition-colors rounded-full"
                    asChild
                  >
                    <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary transition-colors rounded-full"
                    asChild
                  >
                    <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary transition-colors rounded-full"
                    asChild
                  >
                    <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-base font-semibold mb-6 text-primary uppercase tracking-wider">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {siteConfig.footerLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm md:text-base font-semibold mb-6 text-primary uppercase tracking-wider">
                  Stay Updated
                </h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Subscribe to our newsletter for the latest updates and offers.
                </p>
                {MemoizedFooterForm}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-6 right-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.footer>
      </div>
    </motion.div>
  )
}

