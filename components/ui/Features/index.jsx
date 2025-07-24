import { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
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
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
    {
        icon: (
           <img src="/icons/Group.svg" width={64} height={64} alt="" />
        ),
        title: "AI/ML",
        description: "We offer full-scale support for any size business. From building the foundations with a high-converting site with ongoing SEO for traffic growth, to doing CRO for established brands looking to accelerate on hyperdrive. Unlock the power of artificial intelligence and machine learning to automate, analyze, and innovate your business processes.",
        benefits: [
            "AI Strategy and Consulting",
            "ML Modeling",
            "AI Strategy and Consulting",
            "AI Strategy an",
        ],
        icons: [numpy, python, tensorflow, openai, kaggle],
        heading: "Data & Artificial intelligence",
    },
    {
        icon: (
            <img src="/icons/Frame.svg" alt="" />
        ),
        title: "Digital Marketing",
        description: "Grow your brand with targeted campaigns, social media management, and analytics-driven strategies. Maximize your reach and engagement with creative content and data-backed marketing solutions.",
        benefits: [
            "Social Media Marketing",
            "Google Ads & PPC",
            "Email Campaigns",
            "Analytics & Reporting",
        ],
        icons: [googleanalytics, facebook, googleAds, mailchimp, seo, reactjs, framer, hubspot, meta,instagram],
        heading: "Digital Marketing",
    },
    {
        icon: (
           <img src="/icons/cloudcomputing.svg" alt="" />
        ),
        title: "CloudOps",
        description: "Boost your visibility and organic traffic with proven SEO strategies and ongoing optimization. Scale your infrastructure and operations with secure, reliable, and cost-effective cloud solutions.",
        benefits: [
            "On-page SEO",
            "Technical SEO",
            "Content Optimization",
            "Link Building",
        ],
        icons: [aws, azure, terraform, vercel, figma, docker, kubernetes, gitlab, nginx, ansible, framer, google, ruby, django, meta, hubspot, googleanalytics, reactjs],
        heading: "CloudOps",
    },
    {
        icon: (
           <img src="/icons/web.svg" alt="" />
        ),
        title: "Web Development",
        description: "Custom websites, e-commerce, and web apps built for performance, scalability, and conversion. Empower your business with modern, responsive, and secure web solutions tailored to your needs.",
        benefits: [
            "Custom Websites",
            "E-commerce Solutions",
            "Web Applications",
            "Performance Optimization",
        ],
        icons: [reactjs, nextjs, tailwind, nodejs, vercel,shopify, wordpress,mongo,mysql,php,pgsql,woocommerce,typescript,java,express,dotnet,gitlab],
        heading: "Web Development",
    },
    {
        icon: (
            <img src="/icons/uiux.svg" alt="" />
        ),
        title: "UI/UX",
        description: "Designs that delight users and drive engagement, from wireframes to polished interfaces. Create intuitive and visually stunning experiences that keep your customers coming back.",
        benefits: [
            "Wireframing",
            "Prototyping",
            "UI Design",
            "UX Research",
        ],
        icons: [reactjs, nextjs, tailwind, nodejs, vercel,shopify, wordpress,mongo,mysql,php,pgsql,woocommerce,typescript,java,express,dotnet,ruby,django,meta,hubspot,googleanalytics],
        heading: "UI/UX",
    },
    {
        icon: (
           <img src="/icons/devOps.svg" alt="" />
        ),
        title: "DevOps",
        description: "Automate, monitor, and optimize your infrastructure and deployment pipelines for reliability and scalability. Accelerate your development lifecycle with robust CI/CD, cloud, and automation practices.",
        benefits: [
            "CI/CD Implementation",
            "Cloud Infrastructure",
            "Monitoring & Logging",
            "Automation & Scripting",
        ],
        icons: [aws, azure, docker, kubernetes, terraform, apache, mongo, mysql, php, talend, pgsql, woocommerce, grafana, prometheus, typescript, java, jenkins, express, dotnet, gitlab, nginx, ansible],
        heading: "DevOps & Cloud",
    },
];

const Features = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const activeFeature = features[activeIdx];

    return (
        <SectionWrapper id="features" className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Title and description */}
                <h2 className="text-gray-900 text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
                    What We Offer
                </h2>

                {/* Main grid */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-12 w-full">
                    {/* Left: Service cards as states */}
                    <div className="flex flex-col gap-4 w-full lg:w-1/3">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`flex flex-col items-center justify-center h-32 rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105
                                        ${activeIdx === idx ? "bg-gradient-to-br from-[#F06A6A] to-red-500 text-white" : "bg-white text-gray-800 hover:bg-gray-100"}
                                    `}
                                    onClick={() => setActiveIdx(idx)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                    <span className="mb-2 text-3xl">{item.icon}</span>
                                    <span className="font-semibold text-base text-center px-2">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Right: Details change on state/card click */}
                    <div className="flex-1 flex flex-col items-center lg:items-start mt-8 lg:mt-0 p-6 bg-white rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                            {activeFeature.heading}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 text-center lg:text-left leading-relaxed">
                            {activeFeature.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6 w-full">
                            {activeFeature.benefits.map((benefit, idx) => (
                                <span key={idx} className="flex items-center text-gray-800 font-medium text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F06A6A] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {benefit}
                                </span>
                            ))}
                        </div>
                        {/* Icons for technologies */}
                        {activeFeature.icons && activeFeature.icons.length > 0 && (
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                                {activeFeature.icons.map((icon, idx) => (
                                    <Image key={idx} src={icon} alt={`icon-${idx}`} width={40} height={40} className="filter grayscale hover:grayscale-0 transition-all duration-300" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Features;