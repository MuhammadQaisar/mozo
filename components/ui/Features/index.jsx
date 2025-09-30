import { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { montserrat, inter, poppins } from "../font";
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
import Image from "next/image";
import { b } from "framer-motion/client";

const features = [
    {
        icon: (
           <Image src="/icons/Group.svg" width={56} height={56} alt="AI/ML Icon" />
        ),
        title: "AI/ML",
        subtitle: "Artificial Intelligence & Machine Learning",
        description: "Harness the power of artificial intelligence and machine learning to automate processes, gain insights from data, and create intelligent solutions that adapt and learn from user behavior.",
        benefits: [
            "Predictive Analytics & Forecasting",
            "Natural Language Processing",
            "Computer Vision & Image Recognition",
            "Automated Decision Making",
        ],
        icons: [pytorch, keras, spark, jupyter, numpy, kafka, openai, kaggle, python, tensorflow, pandas, cassandra],
        heading: "Artificial Intelligence & Machine Learning",
        color: "from-blue-500 to-purple-600"
    },
    {
        icon: (
            <Image src="/icons/Frame.svg" width={56} height={56} alt="Digital Marketing Icon" />
        ),
        title: "Digital Marketing",
        subtitle: "Growth-Driven Marketing Solutions",
        description: "Accelerate your business growth with data-driven marketing strategies, targeted campaigns, and comprehensive analytics that deliver measurable results and maximize ROI.",
        benefits: [
            "Social Media Marketing & Management",
            "Search Engine Optimization (SEO)",
            "Pay-Per-Click Advertising (PPC)",
            "Email Marketing & Automation",
        ],
        icons: [semrush, Ahrefs, googleanalytics, hubspot, mailchimp, meta, googleAds, instagram],
        heading: "Digital Marketing",
        color: "from-pink-500 to-red-600"
    },
    {
        icon: (
           <Image src="/icons/cloudcomputing.svg" width={56} height={56} alt="CloudOps Icon" />
        ),
        title: "CloudOps",
        subtitle: "Cloud Infrastructure & Operations",
        description: "Scale your infrastructure seamlessly with secure, reliable, and cost-effective cloud solutions. We optimize performance, ensure high availability, and manage your cloud operations.",
        benefits: [
            "Cloud Migration & Architecture",
            "Infrastructure as Code (IaC)",
            "Monitoring & Performance Optimization",
            "Security & Compliance Management",
        ],
        icons: [aws, azure, terraform, docker, kubernetes, gitlab, nginx, ansible, google, digitalocean, FileZilla],
        heading: "CloudOps",
        color: "from-cyan-500 to-blue-600"
    },
    {
        icon: (
           <Image src="/icons/web.svg" width={56} height={56} alt="Web Development Icon" />
        ),
        title: "Web Development",
        subtitle: "Modern Web Applications",
        description: "Create powerful, responsive, and scalable web applications using the latest technologies. From simple websites to complex enterprise solutions, we deliver exceptional digital experiences.",
        benefits: [
            "Custom Web Applications",
            "E-commerce Solutions",
            "Progressive Web Apps (PWA)",
            "API Development & Integration",
        ],
        icons: [reactjs, nextjs, tailwind, nodejs, vercel, shopify, wordpress, mongo, mysql, php, pgsql, woocommerce, typescript, java, express, dotnet, gitlab],
        heading: "Web development",
        color: "from-green-500 to-emerald-600"
    },
    {
        icon: (
            <Image src="/icons/uiux.svg" width={56} height={56} alt="UI/UX Icon" />
        ),
        title: "UI/UX Design",
        subtitle: "User-Centered Design",
        description: "Design intuitive and visually stunning user experiences that delight your customers and drive engagement. Our design process focuses on usability, accessibility, and conversion optimization.",
        benefits: [
            "User Research & Testing",
            "Wireframing & Prototyping",
            "Visual Design & Branding",
            "Usability & Accessibility Audits",
        ],
        icons: [figma, framer, Ae, adobexd, miro, sketch],
        heading: "UI/UX Design",
        color: "from-purple-500 to-pink-600"
    },
    {
        icon: (
           <Image src="/icons/devOps.svg" width={56} height={56} alt="DevOps Icon" />
        ),
        title: "DevOps",
        subtitle: "Development & Operations",
        description: "Streamline your development lifecycle with robust CI/CD pipelines, automated testing, and infrastructure management. Accelerate deployment while maintaining quality and reliability.",
        benefits: [
            "Continuous Integration/Deployment",
            "Infrastructure Automation",
            "Monitoring & Logging Solutions",
            "Security & Compliance Integration",
        ],
        icons: [aws, azure, docker, kubernetes, terraform, apache, grafana, prometheus, typescript, java, jenkins, gitlab, nginx, ansible],
        heading: "DevOps & Cloud Engineering",
        color: "from-orange-500 to-red-600"
    },
];

const Features = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeFeature = features[activeIdx];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <SectionWrapper 
            id="features" 
            className={`mt-0 md:-mt-20 py-8 lg:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden ${montserrat.className}`}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#F06A6A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-black/3 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                {/* Enhanced Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 "
                >
                    {/* <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#F06A6A] rounded-full mr-2.5"></span>
            <span className="text-sm font-medium text-gray-800 tracking-wider">Here's What We DO</span>
          </div> */}

                 <h2 className={`text-2xl md:text-4xl font-extrabold text-gray-800 ${montserrat.className}`}>
		How We <span className="text-[#F06A6A]">Help</span> You

	</h2> 

                    <p className="mt-6 :text-xl text-md text-gray-500 max-w-xl mx-auto leading-relaxed">
                        From AI-powered applications to scalable cloud infrastructure, we deliver end-to-end solutions that drive innovation and growth.
                    </p>
                </motion.div>

                {/* Enhanced Service Selection and Details */}
                <div className="flex flex-col gap-8">
                    {/* Service Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-row justify-center mb-0"
                    >
                        <div className="flex flex-row flex-wrap gap-4 justify-center">
                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`cursor-pointer overflow-hidden transition-all duration-300 ${activeIdx === idx ? '' : 'hover:border-[#000000]'}`}>
                                    <h3 className={`font-bold text-sm py-2 px-3 sm:py-4 sm:px-6 sm:text-lg ${activeIdx === idx ? 'text-gray-900' : 'text-gray-500'}`}>
                                        <span className={`relative inline-block ${activeIdx === idx ? 'border-b-4 border-[#000000]' : 'hover:border-b-4 hover:border-[#000000]'}`}>{item.title}</span>
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Service Details */}
                    <div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-cyan backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-100 h-full border border-gray-300"
                            >
                                {/* Service Header */}
                                <div className="mb-8 border-b border-gray-200 pb-6">
                                    <div className="flex items-center mt-0">
                                      
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {activeFeature.heading}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-md leading-relaxed">
                                        {activeFeature.description}
                                    </p>
                                </div>

                                {/* Benefits */}
                                <div className="mb-8">
                                    <h4 className="text-md font-semibold text-gray-900 mb-4">Key Services:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                        {activeFeature.benefits.map((benefit, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                className="flex items-center text-gray-700"
                                            >
                                                <div className="w-4 h-4 rounded-full bg-[#000000] flex items-center justify-center mr-3 flex-shrink-0">
                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm">{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technology Stack */}
                                {activeFeature.icons && activeFeature.icons.length > 0 && (
                                    <div>
                                        <h4 className="text-md font-semibold text-gray-900 mb-4">Technologies We Use:</h4>
                                        <div className="flex flex-wrap gap-4">
                                            {activeFeature.icons.map((icon, idx) => {
                                                let iconWidth = 36;
                                                let iconHeight = 36;
                                                if (icon === semrush || icon === Ahrefs) {
                                                    iconWidth = 44;
                                                    iconHeight = 44;
                                                }
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                                        className="p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
                                                    >
                                                        <Image 
                                                            src={icon} 
                                                            alt={`Technology ${idx}`} 
                                                            width={iconWidth} 
                                                            height={iconHeight} 
                                                            className="object-contain"
                                                        />
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* CTA */}
                                <div className="mt-10 pt-6 border-t border-gray-200">
                                    <motion.a
                                        href="#contact"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block bg-[#F06A6A] text-white font-bold rounded-lg px-8 py-3 text-md shadow-lg hover:bg-[#C04F4F] transform transition-all duration-300 ease-in-out"
                                    >
                                        Get Started with {activeFeature.title}
                                    </motion.a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Enhanced Custom Styles */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-size: 200% 200%; background-position: left center; }
                    50% { background-size: 200% 200%; background-position: right center; }
                }
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                }

                
            `}</style>
        </SectionWrapper>
    );
};

export default Features;


