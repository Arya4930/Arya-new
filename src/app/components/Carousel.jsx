"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

export default function HackathonCarousel() {
    const projects = [
        { title: "UniCC", desc: "UniCC is a web application designed specifically for students of VIT Chennai. It provides a clean, minimalist interface to access campus-related information such as attendance, grades, schedules, hostel status, and file storage.", link: "https://github.com/Arya4930/UniCC" },
        { title: "Clash-Tournament-Hub", desc: "A Clash of Clans tournament management platform made as a part of Competitve Clash Network for general users to Organize and Participate in such tournaments without a hassle", link: "https://hub.competitiveclash.network/" },
        { title: "Rocket Telemetry Extractor", desc: "This project leverages the Azure Vision API to extract telemetry data shown on the screen from frames, achieving a high accuracy of up to ~99.6%. However, due to the frame-by-frame analysis, the processing time can be significant (~2.5 hours for analyzing a 1-hour video).", link: "https://github.com/Arya4930/Rocket-Telementary-Extractor" },
        { title: "Personal Website", desc: "The website you are currently on!", link: "https://github.com/Arya4930/Arya-new" },
        { title: "ParentsCC", desc: "Sister project to UniCC, made specifically for the parents and their ease to check on the progress of their ward, all in a single place.", link: "https://github.com/Arya4930/ParentsCC" },
        { title: "To-do App", desc: "Made a side project to enter a club in college, had really fun tho, who's a full stack dev who hasnt made this.", link: "https://github.com/Arya4930/todo-app" },
        { title: "vit-fee-calculator", desc: "Well as the name suggests, its a simple fee calculator for VIT but you would be suprised to kno ho many people visit this during admissions.", link: "https://github.com/Arya4930/vit-fee-calculator" },
        { title: "Old Profile Page", desc: "The memories of actually coding in HTML/CSS/JS :_(.", link: "https://arya4930.github.io/Arya/" },
    ];

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-xl h-full">
                <Swiper
                    direction="vertical"
                    slidesPerView={5}
                    spaceBetween={20}
                    loop
                    autoplay={{
                        delay: 2200,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay]}
                    className="h-full"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gray-100 dark:bg-[#161b22] rounded-xl p-6 h-[140px] flex flex-col justify-center cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
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
