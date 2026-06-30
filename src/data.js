export const personalInfo = {
  name: "Moh Adib Syambudi",
  title: "Junior Fullstack Developer | Data Enthusiast",
  tagline: "Code with purpose, Build for Impact",
  email: "syambudiadib@gmail.com",
  phone: "+62 813-3680-3385",
  linkedin: "https://www.linkedin.com/in/moh-adib-syambudi-a32b18252/",
  location: "Jakarta, Indonesia",
  photo: "https://customer-assets.emergentagent.com/job_simulation-expert/artifacts/ac7hwjo1_DSCF7377.JPG%20%281%29.jpg",
  cvUrl: "https://customer-assets.emergentagent.com/job_9502b5d0-862a-4011-959d-addc0957bb0a/artifacts/nkc2jjlo_Moh%20Adib%20Syambudi_CVATS.pdf"
};

export const about = {
  bio: "Fresh graduate of Informatics Engineering from Institut Teknologi Sepuluh Nopember (ITS) with a passion for back-end development and data analytics. I bring strong problem-solving skills, organizational leadership experience, and a commitment to building robust, scalable systems. My academic and non-academic experiences have shaped me into an adaptable professional ready to contribute to innovative projects.",
  education: {
    institution: "Institut Teknologi Sepuluh Nopember",
    degree: "Bachelor of Informatics Engineering",
    gpa: "3.23/4.00",
    period: "Aug 2021 - Sep 2025",
    location: "Surabaya, East Java"
  }
};

export const skills = {
  technical: [
    { name: "Fullstack(Laravel)", level: 2 },
    { name: "Clean Architecture", level: 1 },
    { name: "Backend(Node.js)", level: 2 },
    { name: "Data Analytics(Python)", level: 1 },
    { name: "SQL Server, PostgreSQL, MYSQL", level: 2 },
    { name: "MongoDB", level: 1 },
    { name: "Containerization(Docker)", level : 1},
    { name: "Version Control", level: 2},
    { name: "Machine Learning", level: 1}
  ],
  soft: [
    "Problem Solving",
    "Leadership",
    "Adaptability",
    "Public Speaking",
    "Event Management",
    "Team Collaboration",
    "Strategic Planning",
    "Communication"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Governance, Compliance and Risk Website",
    category: "Web Development",
    description: "Refactor web aspirasi daerah yang dimiliki pemerintah dengan mengukur risiko aspirasi. Dashboard monitoring berbasis geospasial dengan statistik daerah",
    technologies: ["Laravel", "MySQL", "Javascript"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782795925/Screenshot_2026-06-30_115952_qsjopo.png",
    github: "",
    demo: "",
    period: "2026",
    role: "Fullstack Developer Intern",
    company: "Datacomm Diangraha",
    status: "ongoing"
  },
  {
    id: 2,
    title: "SIMONEV MBG",
    category: "Web Development",
    description: "Monitoring dengan ekstraksi data input dan proses pengolahan makanan. Hasil output dijadikan bahan evaluasi. Dashboard terdiri dari peta supply demand bahan baku nasional, potensi risiko, dan indikator performa SPPG",
    technologies: ["Laravel", "Geospasial", "PostgreSQL", "Javascript"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782796431/Screenshot_2026-06-30_121254_lqhpkt.png",
    github: "",
    demo: "",
    period: "2025",
    role: "Fullstack Developer Intern",
    company: "Datacomm Diangraha",
    status: "pending"
  },
  {
    id: 3,
    title: "Banyuwangi Destination App",
    category: "Web Development",
    description: "Banyuwangi Destination App adalah proyek web dummy yang mensimulasikan platform digital pariwisata untuk Kabupaten Banyuwangi",
    technologies: ["Node.js", "React", "MongoDB"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782796626/Screenshot_2026-06-30_121634_krfqmm.png",
    github: "",
    demo: "",
    period: "2026",
    role: "Fullstack developer",
    status: "ongoing"
  },
  {
    id: 4,
    title: "Web Pengawas UTBK",
    category: "Web Development",
    description: "Web dengan fitur utama berupa manajemen pengawas, ruangan, dan jadwal UTBK. Dibangun dengan arsitektur CLEAN untuk skalabilitas dan maintenance",
    technologies: ["Laravel", "Clean Architecture", "SQL Server", "Docker"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782797750/IMG-20240829-WA0007_ah6kw4.jpg",
    github: "",
    demo: "",
    period: "2024",
    role: "Fullstack Developer Intern",
    company: "DPTSI Institut Teknologi Sepuluh Nopember",
    status: "done"
  },
  {
    id: 5,
    title: "Caraka App-Bangkit Academy Project",
    category: "Backend Development",
    description: "Aplikasi gamifikasi edukasi aksara jawa untuk anak-anak berbasis mobile. Capstone project sebagai penilaian akhir kelulusan Bangkit Academy",
    technologies: ["Node.js", "Google Cloud", "MongoDB"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782798128/Screenshot_2026-06-30_122046_oywqlt.png",
    github: "",
    demo: "",
    period: "2024",
    role: "Backend developer",
    status: "done"
  },
  {
    id: 6,
    title: "Parking system API",
    category: "Backend Development",
    description: "Proyek latihan pembuatan endpoint API untuk sistem parkir",
    technologies: ["Node.js", "MySQL"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782798048/Screenshot_2026-06-30_124021_qlngux.png",
    github: "",
    demo: "",
    period: "2025",
    role: "Backend developer",
    status: "done"
  },
  {
    id: 7,
    title: "Bank Customer Segmentation Analys",
    category: "Machine Learning",
    description: "Proyek latihan segmentasi customer bank berdasarkan transaksi dan akun. Metode yang digunakan clustering dengan KMeans",
    technologies: ["Python", "Scikit-Learn"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782798347/Screenshot_2026-06-30_124407_hupbtn.png",
    github: "",
    demo: "",
    period: "2026",
    role: "Data Analyst",
    status: "done"
  },
  {
    id: 8,
    title: "Avian Inluenza Distribution Analys ",
    category: "Machine Learning",
    description: "Analisis faktor persebaran avian influenza dengan dataset kaggle irlandia. Metode yang digunakan membandingkan beberapa algoritma",
    technologies: ["Python", "Scikit-Learn"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782798333/Screenshot_2026-06-30_124320_diy1c2.png",
    github: "",
    demo: "",
    period: "2025",
    role: "Data Analyst",
    status: "done"
  },
  {
    id: 9,
    title: "California Home Price Prediction ",
    category: "Machine Learning",
    description: "Proyek latihan prediksi harga rumah dengan dataset california housing. Prediksi dilakukan dengan model RandomForest & XGBoost",
    technologies: ["Python", "Scikit-Learn"],
    image: "https://res.cloudinary.com/dgexwaht9/image/upload/v1782798360/Screenshot_2026-06-30_124459_y8nttn.png",
    github: "",
    demo: "",
    period: "2026",
    role: "Machine Learning Engineer",
    status: "done"
  }
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "DPTSI Institut Teknologi Sepuluh Nopember",
    location: "Surabaya, East Java",
    period: "Jul 2024 - Dec 2024",
    description: "Built an exam supervisor administration website with Laravel, following clean architecture principles.",
    achievements: [
      "Implemented clean architecture pattern for maintainable codebase",
      "Developed RESTful APIs for real-time data management",
      "Collaborated with cross-functional teams"
    ]
  },
  {
    id: 2,
    title: "Head of Student Affairs",
    company: "Pintar Raharja Surabaya",
    location: "Surabaya, East Java",
    period: "Feb 2025 - Jun 2025",
    description: "Leading student guidance and consultation programs for university major selection.",
    achievements: [
      "Developed concepts for student guidance and consultation",
      "Organized campus tours and ceremonial quarantine programs",
      "Monitored and controlled student activities during quarantine"
    ]
  },
  {
    id: 3,
    title: "Chairman",
    company: "Jamaah Masjid Manarul Ilmi (JMMI)",
    location: "Surabaya, East Java",
    period: "Jan 2024 - Dec 2024",
    description: "Led organizational transformation and Islamic da'wah initiatives on campus.",
    achievements: [
      "Created new systems achieving 80% key results",
      "Designed HR management system impacting 70+ staff",
      "Pioneered Young AMKI association with 40 universities"
    ]
  }
];

export const categories = [
  "All",
  "Web Development",
  "Machine Learning"
];
