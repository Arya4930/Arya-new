"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

export default function HackathonCarousel() {
    const projects = [
        { title: "UniCC", desc: "UniCC is a web application designed specifically for students of VIT Chennai. It provides a clean, minimalist interface to access campus-related information such as attendance, grades, schedules, hostel status, and file storage.", link: "https://github.com/Arya4930/UniCC", color: "#008cff" },
        { title: "Clash-Tournament-Hub", desc: "A Clash of Clans tournament management platform made as a part of Competitve Clash Network for general users to Organize and Participate in such tournaments without a hassle", link: "https://hub.competitiveclash.network/", color: "#00c3ff" },
        { title: "Rocket Telemetry Extractor", desc: "This project leverages the Azure Vision API to extract telemetry data shown on the screen from frames, achieving a high accuracy of up to ~99.6%. However, due to the frame-by-frame analysis, the processing time can be significant (~2.5 hours for analyzing a 1-hour video).", link: "https://github.com/Arya4930/Rocket-Telementary-Extractor", color: "#5c5a60" },
        { title: "Devrary", desc: "Devrary is an interactive virtual library of software engineering knowledge, designed to make learning and revisiting core concepts more engaging and accessible. It organizes key engineering topics in a searchable, user-friendly format for developers who want a practical reference.", link: "https://devrary7.vercel.app/", color: "#eaff00bb" },
        { title: "Personal Website", desc: "The website you are currently on!", link: "https://github.com/Arya4930/Arya-new", color: "#0df00d" },
        { title: "ParentsCC", desc: "Sister project to UniCC, made specifically for the parents and their ease to check on the progress of their ward, all in a single place.", link: "https://github.com/Arya4930/ParentsCC",},
        { title: "To-do App", desc: "Made a side project to enter a club in college, had really fun tho, who's a full stack dev who hasnt made this.", link: "https://github.com/Arya4930/todo-app",},
        { title: "vit-fee-calculator", desc: "Well as the name suggests, its a simple fee calculator for VIT but you would be suprised to kno ho many people visit this during admissions.", link: "https://github.com/Arya4930/vit-fee-calculator" },
        { title: "Old Profile Page", desc: "The memories of actually coding in HTML/CSS/JS :_(.", link: "https://arya4930.github.io/Arya/" },
    ];

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-xl h-full md:overflow-visible">
                <Swiper
                    direction="vertical"
                    slidesPerView={5}
                    spaceBetween={20}
                    loop
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay]}
                    className="h-full carousel-swiper"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="overflow-visible py-1">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.1 }}
                                    whileHover={{ y: -3, zIndex: 10 }}
                                    className="h-[150px] rounded-xl border border-amber-100/80 bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_0%,var(--project-color)_100%)] p-6 shadow-sm backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-md dark:border-slate-700 dark:bg-[linear-gradient(90deg,rgba(15,23,38,0.82)_0%,var(--project-color)_100%)]"
                                    style={{ "--project-color": project.color || "#fbbf24" }}
                                >
                                    <div className="flex items-baseline justify-between gap-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <span className="shrink-0 text-sm text-gray-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true">↗</span>
                                    </div>
                                    <p className="mt-2 text-sm leading-5 text-gray-600 dark:text-slate-300 line-clamp-3">
                                        {project.desc}
                                    </p>
                                </motion.div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
