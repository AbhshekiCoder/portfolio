import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { getDatabase, ref, get, set, push } from 'firebase/database';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assets
import bg1 from '../Assets/user.webp';
import p1 from '../Assets/p1 (1).png';
import foody from '../Assets/p3 (1).png';
import cocoons from '../Assets/p2 (6).png';
import pdf from '../Assets/resume.pdf';
import { app, storage } from './Firebase';

// CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Main({ Profile1 }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    technologies: '',
    img: ['', ''],
    link: '',
    github: ''
  });
  const navigate = useNavigate();

  // Initialize animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Fetch projects from Firebase
  const fetchProjects = async () => {
    try {
      const db = getDatabase(app);
      const projectsRef = ref(db, 'projects/');
      const snapshot = await get(projectsRef);
      
      if (snapshot.exists()) {
        setProjects(Object.values(snapshot.val()));
      } else {
        console.log("No projects available");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Social icons data
  const socialIcons = [
    { icon: 'fa-github', link: 'https://github.com/AbhshekiCoder', color: 'text-gray-800 dark:text-white' },
    { icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/abhishek-gour-cs-a981b224b', color: 'text-blue-600' },
    { icon: 'fa-facebook', link: '#', color: 'text-blue-700' },
    { icon: 'fa-instagram', link: '#', color: 'text-pink-600' },
    { icon: 'fa-whatsapp', link: 'https://wa.link/c9zrjn', color: 'text-green-500' }
  ];

  // Skills data
  const skills = [
    { icon: 'fa-html5', name: 'HTML5', level: 100 },
    { icon: 'fa-css3-alt', name: 'CSS3', level: 100 },
    { icon: 'fa-js', name: 'JavaScript', level: 100 },
    { icon: 'fa-react', name: 'React', level: 100 },
    { icon: 'fa-node-js', name: 'Node.js', level: 100 },
    { icon: 'fa-php', name: 'PHP', level: 70 },
    { icon: 'fa-database', name: 'MongoDB', level: 100 },
    { icon: 'nextjs', name: 'Next.js', level: 90 },
    {icon: 'typescript', name: 'Typescript', level: 90},
    {icon: 'fa-firebase', name: 'Firebase', level: 100},
    {icon: 'fa-express', name: 'Express.js', level: 100},
    
  ];

  // Form submission for contact form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, phone, description } = form.elements;
    
    const db = getDatabase(app);
    const userRef = ref(db, `users/${name.value}`);
    
    set(userRef, {
      name: name.value,
      email: email.value,
      phone: phone.value,
      description: description.value,
      timestamp: new Date().toISOString()
    }).then(() => {
      alert('Message sent successfully!');
      form.reset();
    }).catch((error) => {
      console.error("Error submitting form:", error);
      alert('Failed to send message. Please try again.');
    });
  };

  // Add new project to Firebase
  const addProject = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const projectsRef = ref(db, 'projects/');
    const newProjectRef = push(projectsRef);
    
    set(newProjectRef, {
      ...newProject,
      id: newProjectRef.key,
      dateAdded: new Date().toISOString()
    }).then(() => {
      alert('Project added successfully!');
      setNewProject({
        name: '',
        description: '',
        technologies: '',
        img: ['', ''],
        link: '',
        github: ''
      });
      setShowProjectForm(false);
      fetchProjects();
    }).catch((error) => {
      console.error("Error adding project:", error);
      alert('Failed to add project. Please try again.');
    });
  };

  return (
    <>
    <div 
      className="main-container w-full min-h-screen transition-colors duration-500 overflow-hidden"
      style={{ 
        backgroundColor: Profile1 === 'white' ? 'white' : '#0f172a',
        color: Profile1 === 'white' ? 'black' : 'white'
      }}
    >
      {/* Floating Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: Profile1 === 'white' ? '#f97316' : '#f97316',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1 + Math.random() * 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden py-20 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <motion.div
          className="details w-full md:w-1/2 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-2xl md:text-3xl font-light mb-2">Hi, I am</h1>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Abhishek Gour
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="detail mt-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <p className={`text-lg mb-6 ${Profile1 === 'white' ? 'text-gray-600' : 'text-gray-300'}`}>
              Fullstack Web Developer with expertise in building dynamic and responsive applications using modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/About">More About Me</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all"
              >
                <a href={pdf} download="Abhishek_Gour_Resume.pdf">Download CV</a>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Rotating-on-hover Image Section */}
        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80 mt-10 md:mt-0 flex items-center justify-center group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Background Glow */}
          <motion.div 
            className="absolute w-full h-full rounded-full bg-gradient-to-r from-orange-400 to-pink-600 blur-2xl opacity-30 z-0"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Glow Ring */}
          <motion.div 
            className="absolute w-[110%] h-[110%] rounded-full border-4 border-orange-400 opacity-20"
            animate={{
              scale: [1, 1.05],
              opacity: [0.2, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Image with Spinner Effect */}
          <motion.div
            className="relative z-10 w-full h-full rounded-full overflow-hidden"
            whileHover={{ rotateY: 360 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={bg1}
              alt="Abhishek Gour"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-orange-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                x: [0, Math.random() * 40 - 20],
                opacity: [0.7, 0.4, 0.7],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        {/* Floating Social Icons */}
        <div className="social-icons absolute left-4 md:left-8 bottom-8 hidden md:flex flex-col gap-4 z-10">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${social.color} hover:text-orange-500 transition-colors`}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <i className={`fa-brands ${social.icon}`}></i>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="skills-section py-20 px-4 md:px-8 lg:px-16"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Technical Skills
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.p 
                className={`text-lg mb-6 ${Profile1 === 'white' ? 'text-gray-600' : 'text-gray-300'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Versatile web developer with expertise in building dynamic and responsive applications using modern technologies like MERN stack, React, PHP, Node.js, MySQLi, Firebase, and MongoDB. Proficient in front-end design with Tailwind, Bootstrap, Vanilla JavaScript, HTML, and CSS, Next.js, Typescript and experienced in back-end development with Express.js.
              </motion.p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-orange-400 to-pink-600 h-2.5 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Entire spinning group */}
                <div className="absolute inset-0 spin-skill-wheel">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border-8 border-orange-400 border-opacity-20"></div>
                  <div className="absolute inset-4 rounded-full border-8 border-pink-500 border-opacity-20"></div>

                  {/* Rotating skill icons */}
                  {skills.map((skill, index) => {
                    const angle = (index * 360 / skills.length) - 90;
                    const radius = 120;
                    const x = radius * Math.cos(angle * Math.PI / 180);
                    const y = radius * Math.sin(angle * Math.PI / 180);

                    return (
                      <motion.div
                        key={index}
                        className="absolute w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg"
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                        }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill.icon === 'nextjs' ? (
                          <img
                            src="https://cdn.simpleicons.org/nextdotjs/000000"
                            alt="Next.js"
                            className="w-5 h-5"
                          />
                        ) : (
                          <i className={`fa-brands ${skill.icon} text-xl text-orange-500`}></i>
                        )}
                      </motion.div>
                    );
                  })}

                  {/* Center text */}
                  <motion.div 
                    className="absolute inset-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center shadow-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <span className="text-white font-bold text-xl">Skills</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="services-section py-20 px-4 md:px-8 lg:px-16"
        style={{
          backgroundColor: Profile1 === 'white' ? '#f8fafc' : '#1e293b',
        }}
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Awesome
            </motion.h2>
            <motion.h3 
              className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Services
            </motion.h3>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div 
              className="service-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              style={{
                backgroundColor: Profile1 === 'white' ? 'white' : '#334155',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-code text-2xl text-orange-500"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Custom web applications built with modern technologies like React, Node.js, and MongoDB.
                </p>
              </div>
              <div className="text-center">
                <a href="#" className="text-orange-500 hover:underline font-medium">Learn More</a>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div 
              className="service-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              style={{
                backgroundColor: Profile1 === 'white' ? 'white' : '#334155',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-paint-brush text-2xl text-orange-500"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Beautiful and intuitive user interfaces designed with Figma, Adobe XD, and Photoshop.
                </p>
              </div>
              <div className="text-center">
                <a href="#" className="text-orange-500 hover:underline font-medium">Learn More</a>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div 
              className="service-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              style={{
                backgroundColor: Profile1 === 'white' ? 'white' : '#334155',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-mobile-screen text-2xl text-orange-500"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile Responsive</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Fully responsive designs that work perfectly on all devices from desktop to mobile.
                </p>
              </div>
              <div className="text-center">
                <a href="#" className="text-orange-500 hover:underline font-medium">Learn More</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="projects-section py-20 px-4 md:px-8 lg:px-16"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto"></div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          ) : projects && projects.length > 0 ? (
            <>
              {/* Desktop Swiper */}
              <div className="hidden md:block">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="project-swiper"
                >
                  {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                      <motion.div 
                        className="relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Project Image */}
                        <motion.div
                          className="w-full h-full overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={project.img?.[0] || p1}
                            alt={project.name}
                            onError={(e) => {
                              e.target.src = p1;
                            }}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>

                        {/* Info Overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                          <div className="flex justify-between items-end">
                            <div>
                              <h3 className="text-white text-xl font-bold">
                                {project.name || 'Project Name'}
                              </h3>
                              <p className="text-gray-300 text-sm mt-1">
                                {project.tech || 'Web Development'}
                              </p>
                            </div>
                            
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full hover:bg-orange-600 transition-all"
                                title="View Live Project"
                              >
                                <i className="fas fa-external-link-alt text-white"></i>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-pink-600/20 opacity-0 flex items-center justify-center"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-black/80 rounded-full p-3 mx-2 hover:bg-black transition-colors"
                              title="View Code"
                            >
                              <i className="fab fa-github text-white text-xl"></i>
                            </a>
                          )}
                        </motion.div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Mobile Swiper */}
              <div className="md:hidden">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="project-swiper-mobile"
                >
                  {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                      <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                        <img
                          src={project.img?.[1] || p1}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = p1;
                          }}
                        />
                        
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-white font-bold text-lg">
                                {project.name || "Project Name"}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {project.tech || 'Web Development'}
                              </p>
                            </div>
                            
                            <div className="flex space-x-2">
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors"
                                  title="View Project"
                                >
                                  <i className="fas fa-external-link-alt"></i>
                                </a>
                              )}
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-black/80 hover:bg-black text-white p-2 rounded-full transition-colors"
                                  title="View Code"
                                >
                                  <i className="fab fa-github"></i>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="text-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/Project">View All Projects</Link>
                </motion.button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg mb-4">No projects found yet.</p>
              <p className="text-gray-500 dark:text-gray-400">Check back soon for updates!</p>
              {process.env.NODE_ENV === 'development' && (
                <button 
                  onClick={() => setShowProjectForm(true)}
                  className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Add Sample Project
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="contact-section py-20 px-4 md:px-8 lg:px-16"
        style={{
          backgroundColor: Profile1 === 'white' ? '#f8fafc' : '#1e293b',
        }}
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            <motion.h3 
              className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Contact Me
            </motion.h3>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mt-4"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <motion.h3 
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Let's Talk About Your Project
              </motion.h3>
              <motion.p 
                className={`text-lg mb-6 ${Profile1 === 'white' ? 'text-gray-600' : 'text-gray-300'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out! I'm always open to new challenges and collaborations.
              </motion.p>
              
              <div className="contact-info mt-8">
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-envelope text-white"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-orange-500">agour4000@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-phone text-white"></i>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-orange-500">+91 6266834504</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-location-dot text-white"></i>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-orange-500">Indore, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="md:w-1/2">
              <motion.form 
                onSubmit={handleSubmit}
                className="contact-form bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {/* Name */}
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Your Name</label>
                  <div className="relative">
                    <i className="fa-solid fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Your Email</label>
                  <div className="relative">
                    <i className="fa-solid fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Your Phone</label>
                  <div className="relative">
                    <i className="fa-solid fa-phone absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block mb-2 font-semibold">Your Message</label>
                  <textarea 
                    name="description"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600"
                    rows="5"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg shadow hover:shadow-md transition-all"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Abhishek Gour. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl ${social.color} hover:text-orange-500 transition-colors`}
                  whileHover={{ y: -5 }}
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  


    
   { /** 
      <section className="submit-project py-20 px-4 md:px-8 lg:px-16" data-aos="fade-up">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Submit Your Project</h2>
    <form onSubmit={addProject} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      
      <input
        type="text"
        placeholder="Project Name"
        className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
        value={newProject.name}
        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        required
      />
      
      <input
        type="text"
        placeholder="Tech Stack (e.g., React, Node.js)"
        className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
        value={newProject.technologies}
        onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
        required
      />

       ✅ New Description Field 
      <textarea
        placeholder="Project Description"
        rows={4}
        className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
        value={newProject.description}
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
        value={newProject.img[1]}
        onChange={(e) =>
          setNewProject({ ...newProject, img: [e.target.value, e.target.value] })
        }
        required
      />
      
      <input
        type="text"
        placeholder="Live Link (optional)"
        className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
        value={newProject.link}
        onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
      />
      
      <input
        type="text"
        placeholder="GitHub Link (optional)"
        className="w-full mb-4 p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
        value={newProject.github}
        onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
      />
      
      <button
        type="submit"
        className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Submit Project
      </button>
    </form>
  </div>
</section>


*/
}

    </>
    
  );
}

export default Main;
