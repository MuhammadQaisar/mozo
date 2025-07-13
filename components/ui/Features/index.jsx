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
import Image from "next/image";

const features = [
    {
        icon: (
           <img src="/icons/ai.svg" alt="" />
        ),
        title: "AI/ML",
        description: "We offer full-scale support for any size business. From building the foundations with a high-converting site with ongoing SEO for traffic growth, to doing CRO for established brands looking to accelerate on hyperdrive.",
        benefits: [
            "AI Strategy and Consulting",
            "ML Modeling",
            "AI Strategy and Consulting",
            "AI Strategy an",
        ],
        icons: [numpy, python, tensorflow, openai, kaggle, shopify, wordpress, nextjs, tailwind, nodejs, vercel, figma, terraform, aws, azure, docker, kubernetes],
        heading: "Data & Artificial intelligence",
    },
    {
        icon: (
            <img src="/icons/chart.svg" alt="" />
        ),
        title: "Digital Marketing",
        description: "Grow your brand with targeted campaigns, social media management, and analytics-driven strategies.",
        benefits: [
            "Social Media Marketing",
            "Google Ads & PPC",
            "Email Campaigns",
            "Analytics & Reporting",
        ],
        icons: [googleanalytics, facebook, googleAds, mailchimp, seo, reactjs, framer, hubspot, meta],
        heading: "Digital Marketing",
    },
    {
        icon: (
           <img src="/icons/cloud-icon.svg" alt="" />
        ),
        title: "CloudOps",
        description: "Boost your visibility and organic traffic with proven SEO strategies and ongoing optimization.",
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
           <img src="/icons/web-icon.svg" alt="" />
        ),
        title: "Web Development",
        description: "Custom websites, e-commerce, and web apps built for performance, scalability, and conversion.",
        benefits: [
            "Custom Websites",
            "E-commerce Solutions",
            "Web Applications",
            "Performance Optimization",
        ],
        icons: [reactjs, nextjs, tailwind, nodejs, vercel, figma,shopify, wordpress,mongo,mysql,php,talend,pgsql,woocommerce,grafana,prometheus,typescript,java,jenkins,express,dotnet,gitlab,nginx,ansible,framer,google,ruby,django,meta,hubspot,googleanalytics],
        heading: "Web Development",
    },
    {
        icon: (
            <img src="/icons/ui.svg" alt="" />
        ),
        title: "UI/UX",
        description: "Designs that delight users and drive engagement, from wireframes to polished interfaces.",
        benefits: [
            "Wireframing",
            "Prototyping",
            "UI Design",
            "UX Research",
        ],
        icons: [figma, reactjs, nextjs, tailwind, nodejs, vercel, figma,shopify, wordpress,mongo,mysql,php,talend,pgsql,woocommerce,grafana,prometheus,typescript,java,jenkins,express,dotnet,gitlab,nginx,ansible,framer,google,ruby,django,meta,hubspot,googleanalytics],
        heading: "UI/UX",
    },
    {
        icon: (
           <img src="/icons/devops-icon.svg" alt="" />
        ),
        title: "DevOps",
        description: "Automate, monitor, and optimize your infrastructure and deployment pipelines for reliability and scalability.",
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

const aiIcons = [
    { src: numpy, alt: "Neural Net" },
    { src: python, alt: "Python" },
    { src: tensorflow, alt: "TensorFlow" },
    { src: openai, alt: "OpenAI" },
    { src: kaggle, alt: "Kaggle" },
];

const Features = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const activeFeature = features[activeIdx];

    return (
        <SectionWrapper>
            <div className="bg-white py-10 px-2 md:px-8">
                {/* Title and description */}
                <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-2 font-[Montserrat]">
                    What we Offer?
                </h2>
                <p className="text-black text-center max-w-2xl mx-auto mb-10 font-[Montserrat]">
                    We offer full-scale support for any size business. From building the foundations with a high-converting site with ongoing SEO for traffic growth, to doing CRO for established brands looking to accelerate on hyperdrive.
                </p>
                {/* Main grid */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-full">
                    {/* Left: Service cards as states */}
                    <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {features.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col items-center justify-center h-28 rounded-xl shadow-md cursor-pointer transition-all
                                        ${activeIdx === idx ? "bg-black" : "bg-gray-100"}
                                    `}
                                    onClick={() => setActiveIdx(idx)}
                                >
                                    <span className={`mb-1 ${activeIdx === idx ? "text-white" : ""}`}>{item.icon}</span>
                                    <span className={`font-semibold text-base ${activeIdx === idx ? "text-white" : "text-black"}`}>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right: Details change on state/card click */}
                    <div className="flex-1 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
                        <h3 className="text-lg md:text-xl font-bold text-black mb-2 text-center lg:text-left font-[Montserrat]">
                            {activeFeature.heading}
                        </h3>
                        <p className="text-black text-center lg:text-left mb-2 font-[Montserrat]">
                            {activeFeature.description}
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-start mb-4">
                            {activeFeature.benefits.map((benefit, idx) => (
                                <span key={idx} className="flex items-center text-black font-bold text-base">
                                    <svg className="w-5 h-5 text-[#F06A6A] mr-2" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>
                                    {benefit}
                                </span>
                            ))}
                        </div>
                        {/* AI/ML icons only for AI/ML card */}
                        {activeFeature.icons && activeFeature.icons.length > 0 && (
    <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-6">
        {activeFeature.icons.map((icon, idx) => (
            <Image key={idx} src={icon} alt={`icon-${idx}`} width={40} height={40} />
        ))}
    </div>
)}
                        <button className="bg-black text-white font-semibold rounded-md px-8 py-4 text-base shadow-md hover:bg-gray-900 transition mx-auto lg:mx-0 block">
                            EXPLORE OUR SERVICES
                        </button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Features;