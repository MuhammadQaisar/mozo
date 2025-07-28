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
import kafka from "../../../public/icons/kafka.svg";
import spark from "../../../public/icons/spark.svg";
import pytorch from "../../../public/icons/pytorch.svg";
import jupyter from "../../../public/icons/jupyter.svg";
// import linux from "../../../public/icons/linux.svg";
// import ubuntu from "../../../public/icons/ubuntu.svg";
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
import { motion } from "framer-motion";

const features = [
    {
        icon: (
           <Image src="/icons/Group.svg" width={64} height={64} alt="AI/ML Icon" />
        ),
        title: "AI/ML",
        description: "We offer full-scale support for any size business. From building the foundations with a high-converting site with ongoing SEO for traffic growth, to doing CRO for established brands looking to accelerate on hyperdrive. Unlock the power of artificial intelligence and machine learning to automate, analyze, and innovate your business processes.",
        benefits: [
            "AI Strategy and Consulting",
            "ML Modeling",
            "AI Strategy and Consulting",
            "AI Strategy and Consulting",
        ],
        icons: [pytorch,keras,spark,jupyter,numpy,kafka,openai, kaggle, python, tensorflow,pandas,cassandra],
        heading: "Data & Artificial intelligence",
    },
    {
        icon: (
            <Image src="/icons/Frame.svg" width={64} height={64} alt="Digital Marketing Icon" />
        ),
        title: "Digital Marketing",
        description: "Grow your brand with targeted campaigns, social media management, and analytics-driven strategies. Maximize your reach and engagement with creative content and data-backed marketing solutions.",
        benefits: [
            "Social Media Marketing",
            "Google Ads & PPC",
            "Email Campaigns",
            "Analytics & Reporting",
        ],
        icons: [semrush, Ahrefs,googleanalytics, hubspot, mailchimp, meta,googleAds,],
        heading: "Digital Marketing",
    },
    {
        icon: (
           <Image src="/icons/cloudcomputing.svg" width={64} height={64} alt="CloudOps Icon" />
        ),
        title: "CloudOps",
        description: "Boost your visibility and organic traffic with proven SEO strategies and ongoing optimization. Scale your infrastructure and operations with secure, reliable, and cost-effective cloud solutions.",
        benefits: [
            "On-page SEO",
            "Technical SEO",
            "Content Optimization",
            "Link Building",
        ],
        icons: [aws, azure, terraform, docker, kubernetes, gitlab, nginx, ansible, google,digitalocean,FileZilla],
        heading: "CloudOps",
    },
    {
        icon: (
           <Image src="/icons/web.svg" width={64} height={64} alt="Web Development Icon" />
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
            <Image src="/icons/uiux.svg" width={64} height={64} alt="UI/UX Icon" />
        ),
        title: "UI/UX",
        description: "Designs that delight users and drive engagement, from wireframes to polished interfaces. Create intuitive and visually stunning experiences that keep your customers coming back.",
        benefits: [
            "Wireframing",
            "Prototyping",
            "UI Design",
            "UX Research",
        ],
        icons: [figma, framer, Ae, adobexd,miro, sketch],
        heading: "UI/UX",
    },
    {
        icon: (
           <Image src="/icons/devOps.svg" width={64} height={64} alt="DevOps Icon" />
        ),
        title: "DevOps",
        description: "Automate, monitor, and optimize your infrastructure and deployment pipelines for reliability and scalability. Accelerate your development lifecycle with robust CI/CD, cloud, and automation practices.",
        benefits: [
            "CI/CD Implementation",
            "Cloud Infrastructure",
            "Monitoring & Logging",
            "Automation & Scripting",
        ],
        icons: [aws, azure, docker, kubernetes, terraform, apache, grafana, prometheus, typescript, java, jenkins, gitlab, nginx, ansible],
        heading: "DevOps & Cloud",
    },
];

const Features = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const activeFeature = features[activeIdx];

    return (
        <SectionWrapper id="features" className="py-16 px-4 md:px-8 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Title and description */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-gray-900 text-4xl md:text-4xl font-bold text-center mb-12 leading-tight"
                >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F06A6A] to-black mt-2">
              Services
            </span>
                </motion.h2>

                {/* Main grid */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-12 w-full">
                    {/* Left: Service cards as states */}
                    <div className="flex flex-col gap-4 w-full lg:w-1/3">
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
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
                        </motion.div>
                    </div>
                    {/* Right: Details change on state/card click */}
                    <div
                        key={activeIdx} // Key change to re-trigger animation on activeIdx change
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex-1 flex flex-col items-center lg:items-start mt-8 lg:mt-0 p-6 bg-white rounded-xl shadow-lg"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                            {activeFeature.heading}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 text-center lg:text-left leading-relaxed">
                            {activeFeature.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6 w-full">
                            {activeFeature.benefits.map((benefit, idx) => (
                                <span key={idx} className="flex items-center text-gray-800 font-medium text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#F06A6A] mr-2 flex-shrink-0">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                    {benefit}
                                </span>
                            ))}
                        </div>
                        {/* Icons for technologies */}
                        {activeFeature.icons && activeFeature.icons.length > 0 && (
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                                {activeFeature.icons.map((icon, idx) => {
                                    let iconWidth = 40;
                                    let iconHeight = 40;
                                    if (icon === semrush || icon === Ahrefs) {
                                        iconWidth = 64;
                                        iconHeight = 64;
                                    }
                                    return (
                                        <Image key={idx} src={icon} alt={`icon-${idx}`} width={iconWidth} height={iconHeight} className="transition-all duration-300" />
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Features;