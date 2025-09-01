import { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { montserrat, inter } from "../font";
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
           <Image src="/icons/Group.svg" width={64} height={64} alt="AI/ML Icon" />
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
        heading: "Artificial Intelligence",
        color: "from-blue-500 to-purple-600"
    },
    {
        icon: (
            <Image src="/icons/Frame.svg" width={64} height={64} alt="Digital Marketing Icon" />
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
           <Image src="/icons/cloudcomputing.svg" width={64} height={64} alt="CloudOps Icon" />
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
           <Image src="/icons/web.svg" width={64} height={64} alt="Web Development Icon" />
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
        heading: "Web Development",
        color: "from-green-500 to-emerald-600"
    },
    {
        icon: (
            <Image src="/icons/uiux.svg" width={64} height={64} alt="UI/UX Icon" />
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
           <Image src="/icons/devOps.svg" width={64} height={64} alt="DevOps Icon" />
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
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <SectionWrapper 
            id="features" 
            className={`py-10 lg:py-14 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden ${montserrat.className}`}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#F06A6A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Enhanced Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                   <div className="inline-flex items-center px-4 py-2 bg-[#000000] rounded-full mb-6">
                        <span className="w-2 h-2 bg-[#F06A6A] rounded-full mr-3 animate-pulse"></span>
                        <span className="text-sm font-medium text-[#F06A6A] uppercase tracking-wider">Our Services</span>
                    </div>

                 <h2 
                 style={{
    fontFamily: 'Geist, Arial, sans-serif',
    letterSpacing: '-.02em',
    fontSize: '54px',
    fontWeight: '540',
    lineHeight: '1.1em',
    color: '#141b1d'
}}
                 >
		What solution do you need

	</h2> 

                    <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        From AI-powered applications to scalable cloud infrastructure, we deliver end-to-end solutions that drive innovation and growth.
                    </p>
                </motion.div>

                {/* Enhanced Service Selection and Details */}
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12">
                    {/* Service Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="xl:col-span-2"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`group cursor-pointer transition-all duration-300 ${
                                        activeIdx === idx ? 'scale-105' : ''
                                    }`}
                                >
                                    <div className={`relative h-40 rounded-2xl p-6 shadow-lg border transition-all duration-300 overflow-hidden ${
                                        activeIdx === idx 
                                            ? 'bg-[#000000] text-white border-[#000000] shadow-2xl' 
                                            : 'bg-white/80 backdrop-blur-sm text-gray-800 border-gray-200 hover:border-[#F06A6A]/30 hover:shadow-xl'
                                    }`}>
                                        {/* Background Pattern */}
                                        <div className={`absolute inset-0 opacity-10 ${
                                            activeIdx === idx ? 'bg-white' : 'bg-[#F06A6A]'
                                        } bg-grid-pattern`}></div>
                                        
                                        <div className="relative z-10 flex flex-col items-center text-center h-full">
                                            <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <h3 className="font-bold text-sm leading-tight">{item.title}</h3>
                                        </div>

                                        {/* Active Indicator */}
                                        {activeIdx === idx && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Service Details */}
                    <div className="xl:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 h-full"
                            >
                                {/* Service Header */}
                                <div className="mb-8">
                                    <div className="flex items-center mb-4">
                                      
                                        <div>
                                            <h6 
                                             style={{
    fontFamily: 'Geist, Arial, sans-serif',
    letterSpacing: '-.02em',
    fontSize: '40px',
    fontWeight: '540',
    lineHeight: '1.1em',
    color: '#141b1d'
}}
                                            
                                            >
                                                {activeFeature.heading}
                                            </h6>
                                            <p className="text-[#F06A6A] font-medium">{activeFeature.subtitle}</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {activeFeature.description}
                                    </p>
                                </div>

                                {/* Benefits */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Services:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {activeFeature.benefits.map((benefit, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                className="flex items-center text-gray-700"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F06A6A] to-red-500 flex items-center justify-center mr-3 flex-shrink-0">
                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="font-medium">{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technology Stack */}
                                {activeFeature.icons && activeFeature.icons.length > 0 && (
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies We Use:</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {activeFeature.icons.map((icon, idx) => {
                                                let iconWidth = 40;
                                                let iconHeight = 40;
                                                if (icon === semrush || icon === Ahrefs) {
                                                    iconWidth = 48;
                                                    iconHeight = 48;
                                                }
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                                        whileHover={{ scale: 1.1 }}
                                                        className="p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
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
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <motion.a
                                        href="#contact"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F06A6A] to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Get Started with {activeFeature.title}
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
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