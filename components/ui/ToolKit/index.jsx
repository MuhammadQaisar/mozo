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

// ...existing imports and toolkitData...

const states = [
    "Web Development",
    "Cloud/DevOps",
    "Data Science",
    "Digital Marketing"
];

const ToolKit = () => {
    const [selected, setSelected] = useState(states[0]);

    const icons = toolkitData[selected];

    return (
        <SectionWrapper>
             
                        <h2 className="ml-16 text-gray-800 text-2xl font-semibold sm:text-3xl font-[Montserrat]">
                            Technologies
                        </h2> 
                    
                   
            
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 flex flex-col md:flex-row gap-10">
                {/* Left side: States */}
                
                <div className="md:w-1/4 flex md:flex-col gap-2 justify-center mb-8 md:mb-0">
                    {states.map((state) => (
                        <button
                            key={state}
                            onClick={() => setSelected(state)}
                            className={`
                                ${selected === state
                                    ? "text-gray-800 border-b-2 border-gray-300"
                                    : "text-gray-400 font-normal"
                                }`}
                            style={{
                                outline: "none",
                                boxShadow: "none",
                                borderRadius: 0,
                                marginBottom: "0.25em"
                            }}
                        >
                            {state}
                        </button>
                    ))}
                </div>

                {/* Right side: Toolkit icons grid only, open grid lines */}
                <div className="md:w-3/4">
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-200 rounded-2xl overflow-hidden">
                        {icons.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center aspect-square bg-white group transition"
                                style={{
                                    border: "none"
                                }}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.name || "toolkit icon"}
                                    width={48}
                                    height={48}
                                    className="transition duration-300 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                                <span className="mt-2 text-xs text-gray-700 font-medium text-center">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ToolKit;