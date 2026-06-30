import React from "react";
import { GraduationCap, Briefcase, Award, Star } from "lucide-react";
import { Card, CardContent } from './ui/card';
import { Badge } from "./ui/badge";
import { about, skills } from "../data";

// Mapping tingkat skill ke level numerik
const levelMap = {
    basic: 1,
    intermediate: 2,
    advance: 3,
    expert: 4
};

// Komponen untuk menampilkan level indicator
const SkillLevelIndicator = ({ level }) => {
    const numLevel = typeof level === 'number' ? level : levelMap[level] || 0;
    const levels = ['Basic', 'Intermediate', 'Advance', 'Expert'];
    
    return (
        <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`w-3 h-6 rounded-sm transition-all duration-300 ${
                            i <= numLevel
                                ? 'bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6]'
                                : 'bg-gray-700'
                        }`}
                    ></div>
                ))}
            </div>
            <span className="text-[#8ab2a6] text-sm font-medium min-w-[90px]">
                {levels[numLevel - 1] || 'N/A'}
            </span>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#000000]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-[#8ab2a6]">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Bio */}
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {about.bio}
                        </p>

                        {/* Education Card */}
                        <Card className="bg-[#0a0d10] border-gray-800 hover:border-[#8ab2a6] transition-all duration-300">
                            <CardContent className="p-2">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#3e9d81] to-[#8ab2a6]">
                                        <GraduationCap className="text-white" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold text-lg mb-1">
                                            {about.education.degree}
                                        </h3>
                                        <p className="text-[#8ab2a6] font-medium mb-2">
                                            {about.education.institution}
                                        </p>
                                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Briefcase size={14} />
                                            {about.education.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Award size={14} />
                                            GPA: {about.education.gpa}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    {/* Technical Skills */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skills.technical.map((skill, index) => (
                            <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300 font-medium">{skill.name}</span>
                            </div>
                            <SkillLevelIndicator level={skill.level} />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Soft Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.soft.map((skill, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 text-sm border-[#8ab2a6] text-[#8ab2a6] hover:bg-[#8ab2a6] hover:text-white transition-all duration-300 cursor-default"
                    >
                        {skill}
                    </Badge>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default About;