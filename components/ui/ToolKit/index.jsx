import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import wordpress from "../../../public/icons/wordpress.svg"
import nextjs from "../../../public/icons/nextjs.svg"
import tailwind from "../../../public/icons/tailwind.svg"
import nodejs from "../../../public/icons/nodejs.svg"
import vercel from "../../../public/icons/vercel.svg"
import figma from "../../../public/icons/figma.svg"
import aws from "../../../public/icons/aws.svg"
import azure from "../../../public/icons/azure.svg"
import docker from "../../../public/icons/docker.svg"
import kubernetes from "../../../public/icons/kubernetes.svg"
import python from "../../../public/icons/python.svg"
import pandas from "../../../public/icons/pandas.svg"
import tensorflow from "../../../public/icons/tensorflow.svg"
import tableau from "../../../public/icons/tableau.svg"
import googleAds from "../../../public/icons/google-ads.svg"
import facebook from "../../../public/icons/facebook.svg"
import mailchimp from "../../../public/icons/mailchimp.svg"
import seo from "../../../public/icons/seo.svg"
import keras from "../../../public/icons/keras.svg"
import apache from "../../../public/icons/apache.svg"
import mongo from "../../../public/icons/mongo.svg"
import mysql from "../../../public/icons/mysql.svg"
import php from "../../../public/icons/php.svg"
import talend from "../../../public/icons/talend.svg"
import pgsql from "../../../public/icons/pgsql.svg"
import woocommerce from "../../../public/icons/woocommerce.svg"
import grafana from "../../../public/icons/grafana.svg"
import prometheus from "../../../public/icons/prometheus.svg"
import typescript from "../../../public/icons/typescript.svg"
import java from "../../../public/icons/java.svg"
import jenkins from "../../../public/icons/jenkins.svg"
import express from "../../../public/icons/express.svg"
import dotnet from "../../../public/icons/dotnet.svg"
import gitlab from "../../../public/icons/gitlab.svg"
import nginx from "../../../public/icons/nginx.svg"
import ansible from "../../../public/icons/ansible.svg"
import framer from "../../../public/icons/framer.svg"
import google from "../../../public/icons/google.svg"
import ruby from "../../../public/icons/ruby.svg"
import django from "../../../public/icons/django.svg"
import meta from "../../../public/icons/meta.svg"
import hubspot from "../../../public/icons/hubspot.svg"
import googleanalytics from "../../../public/icons/googleanalytics.svg"
import { useState } from "react"

/**
 * Defines the toolkit data for different technology domains.
 * 
 * Each key represents a technology domain (Web Development, Cloud/DevOps, 
 * Data Science, Digital Marketing), and contains an array of technology 
 * icons and names used in the ToolKit component.
 * 
 * @type {Object.<string, Array<{icon: string, name: string}>>}
 */
const toolkitData = {
    "Web Development": [
        { icon: wordpress, name: "WordPress" },
        { icon: nextjs, name: "Next.js" },
        { icon: tailwind, name: "Tailwind CSS" },
        { icon: nodejs, name: "Node.js" },
        { icon: vercel, name: "Vercel" },
        { icon: figma, name: "Figma" },
        { icon: ruby, name: "Ruby" },
        { icon: pgsql, name: "Postgresql" },
        { icon: java, name: "Java" },
        { icon: express, name: "Express" },
        { icon: woocommerce, name: "Woo Commerce"},
        { icon: typescript, name: "TypeScript" },
    ],
    "Cloud/DevOps": [
        { icon: aws, name: "AWS" },
        { icon: azure, name: "Azure" },
        { icon: docker, name: "Docker" },
        { icon: kubernetes, name: "Kubernetes" },
        { icon: prometheus, name: "Prometheus" },
        { icon: grafana, name: "Grafana" },
        { icon: gitlab, name: "Gitlab" },
        { icon: jenkins, name: "Jenkins" },
        { icon: ansible, name: "Ansible" },
        { icon: nginx, name: "Nginx" },
        { icon: apache, name: "Apache" },    
        { icon: google, name: "Google Cloud" }
    ],
    "Data Science": [
        { icon: python, name: "Python" },
        { icon: pandas, name: "Pandas" },
        { icon: tensorflow, name: "TensorFlow" },
        { icon: tableau, name: "Tableau" },
        { icon: keras, name: "Keras" },
        { icon: talend, name: "Talend" },
        { icon: mysql, name: "MySQL" },
        { icon: mongo, name: "MongoDB" },
        { icon: django, name: "Django" },
    ],
    "Digital Marketing": [
        { icon: googleAds, name: "Google Ads" },
        { icon: facebook, name: "Facebook" },
        { icon: mailchimp, name: "Mailchimp" },
        { icon: seo, name: "SEO" },
        { icon: meta, name: "Meta" },
        { icon: hubspot, name: "HubSpot" },
        { icon: googleanalytics, name: "Google Analytics" },
    ]
}

const states = [
    "Web Development",
    "Cloud/DevOps",
    "Data Science",
    "Digital Marketing"
];

const steps = [
    {
        title: "Step 1) Fill out the form",
        body: "Let us know your needs and goals. Our simple form takes just a minute to complete."
    },
    {
        title: "Step 2) Respond to our Email",
        body: "We’ll reach out quickly with a tailored plan and next steps for your project."
    },
    {
        title: "Step 3) Sit back and relax",
        body: "Our team gets to work while you focus on your business. We’ll keep you updated every step."
    }
];

const ToolKit = () => {
    const [selected, setSelected] = useState(states[0]);
    const icons = toolkitData[selected];

    return (
        <SectionWrapper id="howitworks" className="bg-[#F4F4F4] py-16 px-2 md:px-8">
            {/* Heading */}
            <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-12 font-[Montserrat]">
                How it works?
            </h2>
            {/* Steps */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="relative bg-white border border-black rounded-xl flex-1 flex flex-col justify-center items-center py-12 px-8 min-w-[260px] text-center transition-transform duration-300 hover:-translate-y-2 shadow-[0_8px_32px_0_rgba(240,106,106,0.15),0_1.5px_6px_0_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_0_rgba(240,106,106,0.25),0_3px_12px_0_rgba(0,0,0,0.12)]"
                    >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#F06A6A] text-white text-xl font-bold shadow-md border-4 border-[#F4F4F4]">
                            {idx + 1}
                        </div>
                        <div className="mt-8 text-lg md:text-xl font-bold mb-2 text-black">{step.title}</div>
                        <div className="text-base text-gray-700">{step.body}</div>
                    </div>
                ))}
            </div>
            {/* Subheading and description */}
            <div className="text-center mb-8">
                <div className="text-xl md:text-2xl font-bold mb-2 font-[Montserrat] text-black">
                    Scale your business faster with proven strategies
                </div>
                <div className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
                    Whether you need help developing your first MVP, proceeding from concept to financing, building a website or digital product, or scaling your business, we’ve got you covered. Get in touch and we’ll show you how we can help you reach your business goals.
                </div>
            </div>
            {/* CTA Button */}
            <div className="flex justify-center">
                <a
                    href="#contact"
                    className="bg-[#F06A6A] hover:bg-[#e65c5c] text-white font-semibold rounded-md px-10 py-4 text-base shadow-lg transition text-center"
                    style={{ minWidth: 220 }}
                >
                    GET IN TOUCH
                </a>
            </div>
        </SectionWrapper>
    );
};

export default ToolKit;