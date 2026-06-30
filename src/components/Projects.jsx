import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, User, TrendingUp, Timer, Hourglass, CircleCheck, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects, categories } from '../data';

// Konfigurasi tampilan untuk setiap status proyek.
// Menentukan label, ikon, dan warna badge yang ditampilkan pada card.
const STATUS_CONFIG = {
  ongoing: {
    label: 'Ongoing',
    icon: Hourglass,
    textColor: 'text-blue-400',
  },
  pending: {
    label: 'Pending',
    icon: Timer,
    textColor: 'text-yellow-400',
  },
  done: {
    label: 'Done',
    icon: CircleCheck,
    textColor: 'text-[#8ab2a6]',
  },
};

// Badge kecil yang menampilkan status proyek (ongoing / pending / done)
// menggunakan komponen Badge yang sudah ada, lengkap dengan ikon dan warna sesuai STATUS_CONFIG.
const StatusBadge = ({ status }) => {
  const config = STATUS_CONFIG[status];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <Badge className={`flex items-center gap-1.5 ${config.bgColor} border ${config.borderColor} ${config.textColor}`}>
      <Icon size={14} className={config.textColor} />
      <span className="text-xs font-medium">{config.label}</span>
    </Badge>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#0a0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#8ab2a6]">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my projects across web development, simulation, research, and organizational leadership
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] text-white border-transparent'
                  : 'border-gray-700 text-gray-300 hover:border-[#8ab2a6] hover:text-[#8ab2a6]'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#000000] border-gray-800 hover:border-[#8ab2a6] transition-all duration-300 hover:shadow-lg hover:shadow-[#8ab2a6]/10 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent opacity-60"></div>

                {/* Kategori di kiri atas, status di kanan atas — tidak lagi bertumpuk */}
                <Badge className="absolute top-4 left-4 bg-[#8ab2a6] text-white border-none">
                  {project.category}
                </Badge>

                <div className="absolute top-4 right-4">
                  <StatusBadge status={project.status} />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white group-hover:text-[#8ab2a6] transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>

                  {project.company && (
                    <div className="flex items-center gap-2">
                      <Building2 size={14} />
                      <span>{project.company}</span>
                    </div>
                  )}

                  {project.role && (
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{project.role}</span>
                    </div>
                  )}

                  {project.impact && (
                    <div className="flex items-center gap-2">
                      <TrendingUp size={14} />
                      <span className="text-[#8ab2a6]">{project.impact}</span>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                {(project.github || project.demo) && (
                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gray-700 text-gray-300 hover:border-[#8ab2a6] hover:text-[#8ab2a6]"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] text-white"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Live
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;