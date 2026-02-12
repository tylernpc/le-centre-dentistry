'use client';

import {useState} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {
    Menu,
    X,
    Sparkles,
    Calendar,
    ArrowRight,
    Award,
    Heart,
    Zap,
    TrendingUp,
    Check,
    Star,
    MapPin,
    Phone,
    Mail,
    Clock
} from 'lucide-react';

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {scrollY} = useScroll();
    const headerBackground = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
    );
    const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);

    const philosophyPoints = [
        {
            icon: Heart,
            title: "Patient-Centered Care",
            description: "Every smile is unique. We take time to understand your goals, concerns, and dreams for your dental health."
        },
        {
            icon: Zap,
            title: "Cutting-Edge Technology",
            description: "Advanced digital imaging, laser dentistry, and pain-free techniques for superior results and comfort."
        },
        {
            icon: Award,
            title: "Masterful Artistry",
            description: "Where clinical precision meets aesthetic excellence. We don't just fix teeth—we craft confidence."
        },
        {
            icon: TrendingUp,
            title: "Continuous Innovation",
            description: "Committed to ongoing education and adopting the latest breakthroughs in dental science."
        }
    ];

    const services = [
        {
            title: "Aesthetic Dentistry",
            subtitle: "The Art of Beautiful Smiles",
            treatments: ["Porcelain Veneers", "Professional Whitening", "Smile Makeovers", "Bonding & Contouring"],
            image: "https://images.unsplash.com/photo-1658498613819-6f3ab24df253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBzbWlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDg2Mzg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            title: "Restorative Dentistry",
            subtitle: "Rebuilding with Precision",
            treatments: ["Dental Implants", "Crowns & Bridges", "Full Mouth Reconstruction", "Dentures"],
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50JTIwbW9kZXJufGVufDF8fHx8MTc3MDg2Mzg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            title: "Preventive Care",
            subtitle: "Your Foundation for Health",
            treatments: ["Comprehensive Exams", "Digital X-Rays", "Periodontal Therapy", "Oral Cancer Screening"],
            image: "https://images.unsplash.com/photo-1770321119162-05c18fbcfdb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwY29uc3VsdGF0aW9uJTIwcGF0aWVudHxlbnwxfHx8fDE3NzA4NjM4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
    ];

    const testimonials = [
        {
            name: "Alexandra Morrison",
            role: "Marketing Executive",
            text: "I was nervous about veneers, but Dr. Johnson's meticulous approach and artistic eye gave me the confidence I'd been missing for years. The attention to every detail was remarkable.",
            rating: 5
        },
        {
            name: "David Chen",
            role: "Architect",
            text: "As someone who appreciates precision, I'm impressed by the level of craftsmanship here. This isn't just dentistry—it's dental architecture at its finest.",
            rating: 5
        },
        {
            name: "Sophie Laurent",
            role: "Executive Chef",
            text: "After years of avoiding the dentist, Le Centre changed everything. The environment is calming, the technology is impressive, and the results speak for themselves.",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <motion.nav
                style={{backgroundColor: headerBackground}}
                className="fixed top-0 w-full z-50 transition-all duration-300"
            >
                <motion.div
                    style={{
                        backdropFilter: headerBlur,
                    }}
                    className="border-b border-white/10"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-24">
                            <motion.div
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                className="flex items-center"
                            >
                                <div className="relative">
                                    <div
                                        className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-600 blur-sm opacity-70 rounded-full"></div>
                                    <div
                                        className="relative bg-linear-to-br from-blue-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
                                        <Sparkles className="w-6 h-6 text-white"/>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div className="text-xl font-serif text-gray-900"
                                         style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                        Le Centre Dentistry
                                    </div>
                                    <div className="text-xs tracking-widest text-gray-500 uppercase">Excellence in
                                        Dental Care
                                    </div>
                                </div>
                            </motion.div>

                            {/* Desktop Menu */}
                            <div className="hidden lg:flex items-center space-x-8">
                                <a href="#philosophy"
                                   className="text-gray-700 hover:text-blue-600 transition-colors text-sm tracking-wide">Philosophy</a>
                                <a href="#services"
                                   className="text-gray-700 hover:text-blue-600 transition-colors text-sm tracking-wide">Services</a>
                                <a href="#expertise"
                                   className="text-gray-700 hover:text-blue-600 transition-colors text-sm tracking-wide">Expertise</a>
                                <a href="#testimonials"
                                   className="text-gray-700 hover:text-blue-600 transition-colors text-sm tracking-wide">Testimonials</a>
                                <a href="#contact"
                                   className="text-gray-700 hover:text-blue-600 transition-colors text-sm tracking-wide">Contact</a>
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="relative group"
                                >
                                    <div
                                        className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full blur group-hover:blur-md transition-all"></div>
                                    <div
                                        className="relative bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm tracking-wide">
                                        <Calendar className="w-4 h-4"/>
                                        Book Consultation
                                    </div>
                                </motion.button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden text-gray-700"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <a href="#philosophy"
                               className="block text-gray-700 hover:text-blue-600 text-sm tracking-wide">Philosophy</a>
                            <a href="#services"
                               className="block text-gray-700 hover:text-blue-600 text-sm tracking-wide">Services</a>
                            <a href="#expertise"
                               className="block text-gray-700 hover:text-blue-600 text-sm tracking-wide">Expertise</a>
                            <a href="#testimonials"
                               className="block text-gray-700 hover:text-blue-600 text-sm tracking-wide">Testimonials</a>
                            <a href="#contact"
                               className="block text-gray-700 hover:text-blue-600 text-sm tracking-wide">Contact</a>
                            <button
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm tracking-wide">
                                <Calendar className="w-4 h-4"/>
                                Book Consultation
                            </button>
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
                    <div
                        className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, ease: "easeOut"}}
                        >
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.2, duration: 0.8}}
                                className="inline-block mb-6"
                            >
                                <div
                                    className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-100">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                    <span
                                        className="text-sm text-gray-700 tracking-wide">Transforming Smiles Since 2009</span>
                                </div>
                            </motion.div>

                            <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-8 leading-[1.1]"
                                style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                <span className="text-gray-900 block">Where Science</span>
                                <span className="text-gray-900 block">Meets</span>
                                <span
                                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block">Artistry</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                                At Le Centre Dentistry, we blend advanced clinical expertise with an artist&apos;s eye for
                                detail, creating smiles that are as healthy as they are beautiful.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <motion.button
                                    whileHover={{scale: 1.05, y: -2}}
                                    whileTap={{scale: 0.95}}
                                    className="group relative"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-lg group-hover:blur-xl transition-all opacity-50"></div>
                                    <div
                                        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full flex items-center gap-3">
                                        <span className="tracking-wide">Begin Your Journey</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                                    </div>
                                </motion.button>

                                <motion.button
                                    whileHover={{scale: 1.05, y: -2}}
                                    whileTap={{scale: 0.95}}
                                    className="px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 tracking-wide"
                                >
                                    Explore Services
                                </motion.button>
                            </div>

                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                                <div>
                                    <div className="text-4xl font-serif mb-1"
                                         style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                        <span
                                            className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">17</span>
                                    </div>
                                    <div className="text-sm text-gray-600 tracking-wide">Years Excellence</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-serif mb-1"
                                         style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                        <span
                                            className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">8K+</span>
                                    </div>
                                    <div className="text-sm text-gray-600 tracking-wide">Smiles Crafted</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-serif mb-1"
                                         style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                        <span
                                            className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">99%</span>
                                    </div>
                                    <div className="text-sm text-gray-600 tracking-wide">Satisfaction</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, scale: 0.95}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 1, delay: 0.3}}
                            className="relative"
                        >
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZW50YWwlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA4NjM4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                        alt="Le Centre Dentistry Interior"
                                        className="w-full h-[700px] object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Card */}
                                <motion.div
                                    initial={{opacity: 0, x: -30}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 0.8, duration: 0.8}}
                                    className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="relative">
                                            <div
                                                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 blur-md rounded-xl"></div>
                                            <div
                                                className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                                <Award className="w-7 h-7 text-white"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-serif mb-1"
                                                 style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                                Award Winning
                                            </div>
                                            <div className="text-sm text-gray-600">Recognized for excellence in cosmetic
                                                & restorative dentistry
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Decorative Element */}
                                <div
                                    className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-40"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

    {/* Philosophy Section */}
    <section id="philosophy" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
                backgroundSize: '48px 48px'
            }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                className="text-center mb-20"
            >
                <div className="inline-block mb-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                        <Heart className="w-4 h-4 text-blue-600"/>
                        <span className="text-sm text-blue-600 tracking-wide uppercase">Our Philosophy</span>
                    </div>
                </div>
                <h2 className="text-5xl lg:text-6xl font-serif mb-6"
                    style={{fontFamily: "'Cormorant Garamond', serif"}}>
                    <span className="text-gray-900">The Pillars of Our</span>
                    <br/>
                    <span
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Practice</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Excellence in dentistry requires more than technical skill—it demands passion, innovation, and an
                    unwavering commitment to each patient&apos;s unique journey.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {philosophyPoints.map((point, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: index * 0.1}}
                        className="group"
                    >
                        <div
                            className="relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/30 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
                            <div
                                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-l-2xl transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

                            <div className="relative">
                                <div className="mb-6">
                                    <div className="relative inline-block">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
                                        <div
                                            className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                            <point.icon className="w-8 h-8 text-blue-600"/>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-serif mb-4 text-gray-900"
                                    style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                    {point.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>

            {/* Services Section */}
    <section id="services"
             className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                className="text-center mb-20"
            >
                <div className="inline-block mb-4">
                    <div
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <Sparkles className="w-4 h-4 text-blue-300"/>
                        <span className="text-sm text-blue-200 tracking-wide uppercase">Our Services</span>
                    </div>
                </div>
                <h2 className="text-5xl lg:text-6xl font-serif mb-6 text-white"
                    style={{fontFamily: "'Cormorant Garamond', serif"}}>
                    Comprehensive Dental Solutions
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    From preventive care to complete smile transformations, we offer the full spectrum of dental
                    excellence.
                </p>
            </motion.div>

            <div className="space-y-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: index * 0.1}}
                        className="group"
                    >
                        <div
                            className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                            <div
                                className={`relative overflow-hidden rounded-3xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                            </div>

                            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                <div
                                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
                                    <div className="text-sm tracking-widest text-blue-300 uppercase mb-3">
                                        {service.subtitle}
                                    </div>
                                    <h3 className="text-4xl font-serif mb-6 text-white"
                                        style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                        {service.title}
                                    </h3>

                                    <div className="space-y-3 mb-8">
                                        {service.treatments.map((treatment, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div
                                                    className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                                                <span className="text-gray-200">{treatment}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{x: 5}}
                                        className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors group/btn"
                                    >
                                        <span className="tracking-wide">Learn More</span>
                                        <ArrowRight
                                            className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"/>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>


            {/* THIS IS THE DIVIDE */}



            {/* Expertise Banner */}
    <section id="expertise" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-12 lg:p-16"
            >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }}></div>
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-white"
                            style={{fontFamily: "'Cormorant Garamond', serif"}}>
                            Meet Dr. Sarah Johnson
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            With over 17 years of experience and advanced certifications in cosmetic and restorative
                            dentistry, Dr. Johnson combines clinical mastery with artistic vision to deliver
                            transformative results.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Fellow, Academy of General Dentistry",
                                "Certified in Advanced Aesthetic Dentistry",
                                "Published researcher in dental biomaterials",
                                "Instructor at Pacific Dental Institute"
                            ].map((credential, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div
                                        className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white"/>
                                    </div>
                                    <span className="text-white">{credential}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                        >
                            <span className="tracking-wide">View Full Biography</span>
                            <ArrowRight className="w-5 h-5"/>
                        </motion.button>
                    </div>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1642975967602-653d378f3b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA4NjM4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Dr. Sarah Johnson"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>

            {/* Testimonials Section */}
    <section id="testimonials" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                className="text-center mb-20"
            >
                <div className="inline-block mb-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                        <Star className="w-4 h-4 text-blue-600 fill-blue-600"/>
                        <span className="text-sm text-blue-600 tracking-wide uppercase">Testimonials</span>
                    </div>
                </div>
                <h2 className="text-5xl lg:text-6xl font-serif mb-6"
                    style={{fontFamily: "'Cormorant Garamond', serif"}}>
                    <span className="text-gray-900">Stories of</span>
                    <br/>
                    <span
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transformation</span>
                </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: index * 0.15}}
                        className="group"
                    >
                        <div className="relative h-full">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-5"></div>
                            <div
                                className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-blue-600 fill-blue-600"/>
                                    ))}
                                </div>

                                <p className="text-lg text-gray-700 mb-8 leading-relaxed flex-grow italic">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>

                                <div className="pt-6 border-t border-gray-100">
                                    <div className="font-serif text-xl text-gray-900 mb-1"
                                         style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-500 tracking-wide">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>

            {/* Contact Section */}
    <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
                <motion.div
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="lg:col-span-2"
                >
                    <div className="inline-block mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                            <MapPin className="w-4 h-4 text-blue-600"/>
                            <span className="text-sm text-blue-600 tracking-wide uppercase">Get In Touch</span>
                        </div>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-serif mb-6"
                        style={{fontFamily: "'Cormorant Garamond', serif"}}>
                        <span className="text-gray-900">Begin Your</span>
                        <br/>
                        <span
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                        Schedule a consultation to discover how we can help you achieve the smile you&apos;ve always dreamed
                        of.
                    </p>

                    <div className="space-y-8">
                        <div className="group">
                            <div className="flex items-start gap-4">
                                <div className="relative">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 blur-md opacity-0 group-hover:opacity-50 transition-opacity rounded-xl"></div>
                                    <div
                                        className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 tracking-wide uppercase mb-1">Phone</div>
                                    <div className="text-xl text-gray-900">(612) 503-5975</div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="flex items-start gap-4">
                                <div className="relative">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 blur-md opacity-0 group-hover:opacity-50 transition-opacity rounded-xl"></div>
                                    <div
                                        className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 tracking-wide uppercase mb-1">Email</div>
                                    <div className="text-xl text-gray-900">info@lecentredentistry.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="flex items-start gap-4">
                                <div className="relative">
                                    <div
                                        className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-600 blur-md opacity-0 group-hover:opacity-50 transition-opacity rounded-xl"></div>
                                    <div
                                        className="relative w-14 h-14 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 tracking-wide uppercase mb-1">Hours</div>
                                    <div className="text-gray-900">
                                        <div>Monday: 8:00am - 5:00pm</div>
                                        <div>Tuesday: 8:00am - 5:00pm</div>
                                        <div>Wednesday: 8:00am - 5:00pm</div>
                                        <div>Thursday: 7:00 AM - 3:30 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="lg:col-span-3"
                >
                    <div className="relative">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl transform rotate-1"></div>
                        <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
                            <h3 className="text-3xl font-serif mb-8"
                                style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                Request a Consultation
                            </h3>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm tracking-wide text-gray-700 mb-2 uppercase">First
                                            Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm tracking-wide text-gray-700 mb-2 uppercase">Last
                                            Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className="block text-sm tracking-wide text-gray-700 mb-2 uppercase">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        className="block text-sm tracking-wide text-gray-700 mb-2 uppercase">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm tracking-wide text-gray-700 mb-2 uppercase">Service
                                        Interest</label>
                                    <select
                                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors">
                                        <option>Select a service</option>
                                        <option>Aesthetic Dentistry</option>
                                        <option>Restorative Dentistry</option>
                                        <option>Preventive Care</option>
                                        <option>General Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        className="block text-sm tracking-wide text-gray-700 mb-2 uppercase">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your dental goals..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    type="submit"
                                    className="w-full relative group"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-lg group-hover:blur-xl transition-all opacity-50"></div>
                                    <div
                                        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-xl flex items-center justify-center gap-3 text-lg tracking-wide">
                                        <span>Submit Request</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                                    </div>
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>

            {/* Footer */}
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white"/>
                        </div>
                        <div className="ml-4">
                            <div className="text-2xl font-serif" style={{fontFamily: "'Cormorant Garamond', serif"}}>
                                Le Centre Dentistry
                            </div>
                            <div className="text-xs tracking-widest text-blue-200 uppercase">Excellence in Dental Care
                            </div>
                        </div>
                    </div>
                    <p className="text-blue-200 leading-relaxed max-w-md">
                        Transforming lives through exceptional dental care, combining advanced technology with artistic
                        precision since 2009.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-serif mb-6" style={{fontFamily: "'Cormorant Garamond', serif"}}>Quick
                        Links</h4>
                    <ul className="space-y-3 text-blue-200">
                        <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
                        <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
                        <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-serif mb-6"
                        style={{fontFamily: "'Cormorant Garamond', serif"}}>Connect</h4>
                    <div className="flex gap-3">
                        {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                            >
                                <span className="sr-only">{social}</span>
                                <div className="w-5 h-5 bg-white/60 rounded-full"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-blue-200">
                <p>&copy; 2026 Le Centre Dentistry. All rights reserved. Crafted with precision and care.</p>
            </div>
        </div>
            </footer>
        </div>
    );
}
