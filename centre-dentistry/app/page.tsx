'use client';

import {useState} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {
    Menu,
    X,
    Sparkles,
    Calendar,
    ArrowRight,
    Award
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
                                        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 blur-sm opacity-70 rounded-full"></div>
                                    <div
                                        className="relative bg-gradient-to-br from-blue-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
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
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur group-hover:blur-md transition-all"></div>
                                    <div
                                        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm tracking-wide">
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
                                At Le Centre Dentistry, we blend advanced clinical expertise with an artist's eye for
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
        </div>
    );
}
