import { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import { motion } from "framer-motion";
import { urbanist } from "../font";
import Image from "next/image";

// Import all the technology icons
import python from "../../../public/icons/python.svg";
import tensorflow from "../../../public/icons/tensorflow.svg";
import kaggle from "../../../public/icons/kaggle.svg";
import openai from "../../../public/icons/openai.svg";
import numpy from "../../../public/icons/numpy.svg";
import shopify from "../../../public/icons/shopify.svg";
import wordpress from "../../../public/icons/wordpress.svg";
import nextjs from "../../../public/icons/nextjs.svg";
import tailwind from "../../../public/icons/tailwind.svg";
import nodejs from "../../../public/icons/nodejs.svg";
import vercel from "../../../public/icons/vercel.svg";
import figma from "../../../public/icons/figma.svg";
import terraform from "../../../public/icons/terraform.svg";
import aws from "../../../public/icons/aws.svg";
import azure from "../../../public/icons/azure.svg";
import docker from "../../../public/icons/docker.svg";
import kubernetes from "../../../public/icons/kubernetes.svg";
import googleAds from "../../../public/icons/google-ads.svg";
import facebook from "../../../public/icons/facebook.svg";
import mailchimp from "../../../public/icons/mailchimp.svg";
import seo from "../../../public/icons/seo.svg";
import keras from "../../../public/icons/keras.svg";
import apache from "../../../public/icons/apache.svg";
import mongo from "../../../public/icons/mongo.svg";
import mysql from "../../../public/icons/mysql.svg";
import php from "../../../public/icons/php.svg";
import talend from "../../../public/icons/talend.svg";
import pgsql from "../../../public/icons/pgsql.svg";
import woocommerce from "../../../public/icons/woocommerce.svg";
import grafana from "../../../public/icons/grafana.svg";
import prometheus from "../../../public/icons/prometheus.svg";
import typescript from "../../../public/icons/typescript.svg";
import java from "../../../public/icons/java.svg";
import jenkins from "../../../public/icons/jenkins.svg";
import express from "../../../public/icons/express.svg";
import dotnet from "../../../public/icons/dotnet.svg";
import gitlab from "../../../public/icons/gitlab.svg";
import nginx from "../../../public/icons/nginx.svg";
import ansible from "../../../public/icons/ansible.svg";
import framer from "../../../public/icons/framer.svg";
import google from "../../../public/icons/google.svg";
import ruby from "../../../public/icons/ruby.svg";
import django from "../../../public/icons/django.svg";
import meta from "../../../public/icons/meta.svg";
import hubspot from "../../../public/icons/hubspot.svg";
import googleanalytics from "../../../public/icons/googleanalytics.svg";
import reactjs from "../../../public/icons/reactjs.svg";
import instagram from "../../../public/icons/instagram.svg";
import kafka from "../../../public/icons/kafka.svg";
import spark from "../../../public/icons/spark.svg";
import pytorch from "../../../public/icons/pytorch.svg";
import jupyter from "../../../public/icons/jupyter.svg";
import digitalocean from "../../../public/icons/digitalocean.svg";
import pandas from "../../../public/icons/pandas.svg";
import semrush from "../../../public/icons/semrush.png";
import Ahrefs from "../../../public/icons/Ahrefs.svg";
import Ae from "../../../public/icons/Ae.svg";
import adobexd from "../../../public/icons/adobexd.svg";
import miro from "../../../public/icons/miro.svg";
import sketch from "../../../public/icons/sketch.svg";
import cassandra from "../../../public/icons/cassandra.svg";
import FileZilla from "../../../public/icons/FileZilla.svg";
import web from "../../../public/icons/web-dev.svg";
import cloud from "../../../public/icons/cloud-Ops.svg";
import digitalmarketing from "../../../public/icons/digital-marketing.svg";

// Reworked features array so each tech icon includes a label (used for pill badges)
const features = [
  {
    icon: "/icons/AI.svg",
    title: "AI & ML Development",
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes, gain insights from data, and create intelligent solutions that adapt and learn.",
    details: {
      heading: "AI & ML Development",
      points: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Automated Decision-Making Systems",
      ],
      icons: [
        { src: openai, label: "OpenAI" },
        { src: tensorflow, label: "TensorFlow" },
        { src: pytorch, label: "PyTorch" },
        { src: numpy, label: "NumPy" },
        { src: pandas, label: "Pandas" },
        { src: jupyter, label: "Jupyter" },
        { src: kaggle, label: "Kaggle" },
        { src: spark, label: "Spark" },
        { src: keras, label: "Keras" },
        { src: python, label: "Python" },
        { src: cassandra, label: "Cassandra" },
        { src: kafka, label: "Kafka" },
      ],
    },
  },
  {
    icon: "/icons/digital-marketing.svg",
    title: "Digital Marketing",
    description:
      "Accelerate your growth with data-driven marketing strategies that deliver measurable results and maximize your return on investment.",
    details: {
      heading: "Growth-Driven Digital Marketing",
      points: [
        "Social Media Marketing & Management",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing & Automation",
      ],
      icons: [
        { src: semrush, label: "SEMrush" },
        { src: Ahrefs, label: "Ahrefs" },
        { src: googleanalytics, label: "Google Analytics" },
        { src: hubspot, label: "HubSpot" },
        { src: mailchimp, label: "Mailchimp" },
        { src: meta, label: "Meta" },
        { src: googleAds, label: "Google Ads" },
        { src: instagram, label: "Instagram" },
      ],
    },
  },
  {
    icon: "/icons/cloud-Ops.svg",
    title: "CloudOps",
    description:
      "Scale your infrastructure seamlessly with secure, reliable, and cost-effective cloud solutions, ensuring high availability and performance.",
    details: {
      heading: "Cloud Infrastructure & Operations",
      points: [
        "Cloud Migration & Architecture Design",
        "Infrastructure as Code (IaC) & Automation",
        "Performance Monitoring & Optimization",
        "Security & Compliance Management",
      ],
      icons: [
        { src: aws, label: "AWS" },
        { src: azure, label: "Azure" },
        { src: terraform, label: "Terraform" },
        { src: docker, label: "Docker" },
        { src: kubernetes, label: "Kubernetes" },
        { src: gitlab, label: "GitLab" },
        { src: nginx, label: "Nginx" },
        { src: ansible, label: "Ansible" },
        { src: digitalocean, label: "DigitalOcean" },
        { src: FileZilla, label: "FileZilla" },
      ],
    },
  },
  {
    icon: "/icons/web-dev.svg",
    title: "Web Development",
    description:
      "Create powerful, responsive, and scalable web applications that deliver exceptional digital experiences, from simple sites to complex enterprise solutions.",
    details: {
      heading: "Modern Web Application Development",
      points: [
        "Custom Web Application Development",
        "E-commerce & Online Store Solutions",
        "Progressive Web Apps (PWAs)",
        "API Development & Third-Party Integrations",
      ],
      icons: [
        { src: reactjs, label: "React" },
        { src: nextjs, label: "Next.js" },
        { src: tailwind, label: "Tailwind" },
        { src: nodejs, label: "Node.js" },
        { src: vercel, label: "Vercel" },
        { src: shopify, label: "Shopify" },
        { src: wordpress, label: "WordPress" },
        { src: mongo, label: "MongoDB" },
        { src: mysql, label: "MySQL" },
        { src: php, label: "PHP" },
        { src: pgsql, label: "Postgres" },
        { src: woocommerce, label: "WooCommerce" },
      ],
    },
  },
  {
    icon: "/icons/ui.svg",
    title: "UI/UX Design",
    description:
      "Design intuitive and visually stunning user experiences that delight your customers, drive engagement, and optimize for conversion.",
    details: {
      heading: "User-Centered UI/UX Design",
      points: [
        "User Research, Personas & Journey Mapping",
        "Wireframing & Interactive Prototyping",
        "Visual Design, Branding & Design Systems",
        "Usability Testing & Accessibility Audits",
      ],
      icons: [
        { src: figma, label: "Figma" },
        { src: framer, label: "Framer" },
        { src: Ae, label: "After Effects" },
        { src: adobexd, label: "Adobe XD" },
        { src: miro, label: "Miro" },
        { src: sketch, label: "Sketch" },
      ],
    },
  },
  {
    icon: "/icons/Dev-Ops.svg",
    title: "DevOps",
    description:
      "Streamline your development lifecycle with robust CI/CD pipelines and automated infrastructure, accelerating deployment while ensuring quality.",
    details: {
      heading: "DevOps & Cloud Engineering",
      points: [
        "Continuous Integration & Deployment (CI/CD)",
        "Infrastructure Automation & Configuration Management",
        "Monitoring, Logging & Alerting Solutions",
        "Security Integration in the Development Lifecycle (DevSecOps)",
      ],
      icons: [
        { src: aws, label: "AWS" },
        { src: azure, label: "Azure" },
        { src: docker, label: "Docker" },
        { src: kubernetes, label: "Kubernetes" },
        { src: grafana, label: "Grafana" },
        { src: prometheus, label: "Prometheus" },
        { src: jenkins, label: "Jenkins" },
        { src: gitlab, label: "GitLab" },
        { src: nginx, label: "Nginx" },
      ],
    },
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <SectionWrapper
      id="features"
      className={`py-20 lg:py-28 bg-gray-50 ${urbanist.className}`}
    >
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-gray-900 ${urbanist.className}`}
          >
            Custom Software{" "}
            <span className="text-[#F06A6A]"> Develoment Services</span>
          </h2>
          <p className="mt-6 text-lg md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide a comprehensive suite of services to transform your ideas
            into high-performance software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Left: 2-column large cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feature, index) => {
                const isActive = activeFeature.title === feature.title;
                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveFeature(feature)}
                    whileHover={{ y: -6 }}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out transform ${
                      isActive
                        ? "bg-[#0a3550] text-white shadow-2xl border-2 border-[#F06A6A]"
                        : "bg-white border border-gray-200 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`flex-shrink-0 p-3 rounded-full ${
                          isActive ? "bg-white" : "bg-gray-100"
                        }`}
                      >
                        <Image
                          src={feature.icon}
                          width={40}
                          height={40}
                          alt={`${feature.title} icon`}
                        />
                      </div>
                      <h3
                        className={`text-lg font-bold mt-4 ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: details with pill badges (icon + label) */}
          <div>
            <div className="sticky top-28">
              <motion.div
                key={activeFeature.title} // Add key here to re-trigger animation
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-200"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeFeature.details.heading}
                </h3>
                <p className="mt-4 text-md text-gray-600 leading-relaxed">
                  {activeFeature.description}
                </p>
                <div className="w-24 h-1 bg-gray-200 my-6 rounded-full" />

                <ul className="space-y-3 mb-6">
                  {activeFeature.details.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-4 h-4 bg-[#1f2937] text-white rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-2 h-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                {activeFeature.details.icons &&
                  activeFeature.details.icons.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Technologies We Use:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {activeFeature.details.icons.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full shadow-sm"
                          >
                            {tech.src ? (
                              <Image
                                src={tech.src}
                                alt={tech.label}
                                width={20}
                                height={20}
                                className="object-contain"
                              />
                            ) : (
                              <div className="w-5 h-5 bg-gray-200 rounded-sm" />
                            )}
                            <span className="text-sm text-gray-700">
                              {tech.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 mt-8 bg-[#F06A6A] text-white font-bold rounded-lg px-6 py-3 text-lg shadow-md transform transition-all duration-300 ease-in-out"
                >
                  Learn More
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
