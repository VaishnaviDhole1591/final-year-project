'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'hi'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations dictionary
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.schemes': 'Schemes',
    'nav.network': 'Network',
    'nav.events': 'Events',
    'nav.forum': 'Forum',
    'nav.resources': 'Resources',
    'nav.login': 'Log in',
    'nav.signup': 'Sign up',
    'nav.dashboard': 'Dashboard',
    'nav.settings': 'Settings',
    'nav.logout': 'Log out',
    
    // Common
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.apply': 'Apply',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.viewAll': 'View All',
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.loading': 'Loading...',
    'common.noResults': 'No results found',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    
    // Home Page
    'home.hero.title': 'Empowering MSMEs with Government Schemes',
    'home.hero.subtitle': 'Discover, apply, and track government schemes designed for Micro, Small, and Medium Enterprises across India.',
    'home.hero.cta': 'Explore Schemes',
    'home.hero.secondary': 'Join Network',
    'home.features.title': 'Why Choose EnterNet?',
    'home.features.schemes': 'Government Schemes',
    'home.features.schemesDesc': 'Access 30+ government schemes for MSMEs with detailed eligibility and application guidance.',
    'home.features.network': 'Entrepreneur Network',
    'home.features.networkDesc': 'Connect with fellow entrepreneurs, mentors, and investors across India.',
    'home.features.resources': 'Business Resources',
    'home.features.resourcesDesc': 'Access guides, templates, and tools to grow your business.',
    'home.stats.schemes': 'Government Schemes',
    'home.stats.entrepreneurs': 'Entrepreneurs',
    'home.stats.funding': 'Funding Facilitated',
    'home.stats.states': 'States Covered',
    
    // Schemes Page
    'schemes.title': 'Government Schemes for MSMEs',
    'schemes.subtitle': 'Discover funding opportunities, subsidies, and support programs for your business',
    'schemes.search.placeholder': 'Search schemes by name, industry, or funding type...',
    'schemes.filter.industry': 'Industry',
    'schemes.filter.location': 'Location',
    'schemes.filter.fundingType': 'Funding Type',
    'schemes.filter.category': 'Category',
    'schemes.filter.allIndustries': 'All Industries',
    'schemes.card.eligibility': 'Eligibility',
    'schemes.card.benefits': 'Benefits',
    'schemes.card.applyNow': 'Apply Now',
    'schemes.card.viewDetails': 'View Details',
    'schemes.detail.howToApply': 'How to Apply',
    'schemes.detail.applicationSteps': 'Application Steps',
    'schemes.detail.relatedSchemes': 'Related Schemes',
    'schemes.detail.visitWebsite': 'Visit Official Website',
    
    // Network Page
    'network.title': 'Entrepreneur Network',
    'network.subtitle': 'Connect with entrepreneurs, mentors, and investors',
    'network.connect': 'Connect',
    'network.message': 'Message',
    'network.viewProfile': 'View Profile',
    
    // Events Page
    'events.title': 'Upcoming Events',
    'events.subtitle': 'Workshops, webinars, and networking events for entrepreneurs',
    'events.register': 'Register',
    'events.registered': 'Registered',
    'events.free': 'Free',
    'events.online': 'Online',
    'events.offline': 'Offline',
    
    // Forum Page
    'forum.title': 'Community Forum',
    'forum.subtitle': 'Discuss, share, and learn from the community',
    'forum.newTopic': 'New Topic',
    'forum.reply': 'Reply',
    'forum.replies': 'Replies',
    'forum.views': 'Views',
    
    // Resources Page
    'resources.title': 'Business Resources',
    'resources.subtitle': 'Guides, templates, and tools for your business',
    'resources.download': 'Download',
    'resources.guides': 'Guides',
    'resources.templates': 'Templates',
    'resources.tools': 'Tools',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.overview': 'Overview',
    'dashboard.applications': 'My Applications',
    'dashboard.savedSchemes': 'Saved Schemes',
    'dashboard.profile': 'Profile',
    'dashboard.settings': 'Settings',
    
    // Auth
    'auth.login.title': 'Welcome Back',
    'auth.login.subtitle': 'Sign in to your account',
    'auth.login.email': 'Email',
    'auth.login.password': 'Password',
    'auth.login.forgotPassword': 'Forgot password?',
    'auth.login.noAccount': "Don't have an account?",
    'auth.signup.title': 'Create Account',
    'auth.signup.subtitle': 'Join the entrepreneur community',
    'auth.signup.name': 'Full Name',
    'auth.signup.email': 'Email',
    'auth.signup.password': 'Password',
    'auth.signup.confirmPassword': 'Confirm Password',
    'auth.signup.hasAccount': 'Already have an account?',
    
    // Footer
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': 'All rights reserved.',
    
    // Language
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.switch': 'Switch Language',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.schemes': 'योजनाएं',
    'nav.network': 'नेटवर्क',
    'nav.events': 'कार्यक्रम',
    'nav.forum': 'फोरम',
    'nav.resources': 'संसाधन',
    'nav.login': 'लॉग इन',
    'nav.signup': 'साइन अप',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.settings': 'सेटिंग्स',
    'nav.logout': 'लॉग आउट',
    
    // Common
    'common.search': 'खोजें',
    'common.filter': 'फ़िल्टर',
    'common.apply': 'लागू करें',
    'common.cancel': 'रद्द करें',
    'common.submit': 'जमा करें',
    'common.save': 'सहेजें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.view': 'देखें',
    'common.viewAll': 'सभी देखें',
    'common.learnMore': 'और जानें',
    'common.readMore': 'और पढ़ें',
    'common.loading': 'लोड हो रहा है...',
    'common.noResults': 'कोई परिणाम नहीं मिला',
    'common.back': 'वापस',
    'common.next': 'अगला',
    'common.previous': 'पिछला',
    
    // Home Page
    'home.hero.title': 'सरकारी योजनाओं से MSMEs को सशक्त बनाना',
    'home.hero.subtitle': 'भारत भर में सूक्ष्म, लघु और मध्यम उद्यमों के लिए डिज़ाइन की गई सरकारी योजनाओं को खोजें, आवेदन करें और ट्रैक करें।',
    'home.hero.cta': 'योजनाएं देखें',
    'home.hero.secondary': 'नेटवर्क से जुड़ें',
    'home.features.title': 'EnterNet क्यों चुनें?',
    'home.features.schemes': 'सरकारी योजनाएं',
    'home.features.schemesDesc': 'विस्तृत पात्रता और आवेदन मार्गदर्शन के साथ MSMEs के लिए 30+ सरकारी योजनाओं तक पहुंच।',
    'home.features.network': 'उद्यमी नेटवर्क',
    'home.features.networkDesc': 'पूरे भारत में साथी उद्यमियों, सलाहकारों और निवेशकों से जुड़ें।',
    'home.features.resources': 'व्यावसायिक संसाधन',
    'home.features.resourcesDesc': 'अपने व्यवसाय को बढ़ाने के लिए गाइड, टेम्पलेट और टूल्स तक पहुंच।',
    'home.stats.schemes': 'सरकारी योजनाएं',
    'home.stats.entrepreneurs': 'उद्यमी',
    'home.stats.funding': 'फंडिंग सुविधा',
    'home.stats.states': 'राज्य कवर',
    
    // Schemes Page
    'schemes.title': 'MSMEs के लिए सरकारी योजनाएं',
    'schemes.subtitle': 'अपने व्यवसाय के लिए फंडिंग अवसर, सब्सिडी और सहायता कार्यक्रम खोजें',
    'schemes.search.placeholder': 'नाम, उद्योग या फंडिंग प्रकार से योजनाएं खोजें...',
    'schemes.filter.industry': 'उद्योग',
    'schemes.filter.location': 'स्थान',
    'schemes.filter.fundingType': 'फंडिंग प्रकार',
    'schemes.filter.category': 'श्रेणी',
    'schemes.filter.allIndustries': 'सभी उद्योग',
    'schemes.card.eligibility': 'पात्रता',
    'schemes.card.benefits': 'लाभ',
    'schemes.card.applyNow': 'अभी आवेदन करें',
    'schemes.card.viewDetails': 'विवरण देखें',
    'schemes.detail.howToApply': 'आवेदन कैसे करें',
    'schemes.detail.applicationSteps': 'आवेदन चरण',
    'schemes.detail.relatedSchemes': 'संबंधित योजनाएं',
    'schemes.detail.visitWebsite': 'आधिकारिक वेबसाइट पर जाएं',
    
    // Network Page
    'network.title': 'उद्यमी नेटवर्क',
    'network.subtitle': 'उद्यमियों, सलाहकारों और निवेशकों से जुड़ें',
    'network.connect': 'जुड़ें',
    'network.message': 'संदेश',
    'network.viewProfile': 'प्रोफाइल देखें',
    
    // Events Page
    'events.title': 'आगामी कार्यक्रम',
    'events.subtitle': 'उद्यमियों के लिए वर्कशॉप, वेबिनार और नेटवर्किंग कार्यक्रम',
    'events.register': 'पंजीकरण करें',
    'events.registered': 'पंजीकृत',
    'events.free': 'मुफ्त',
    'events.online': 'ऑनलाइन',
    'events.offline': 'ऑफलाइन',
    
    // Forum Page
    'forum.title': 'समुदाय फोरम',
    'forum.subtitle': 'समुदाय से चर्चा करें, साझा करें और सीखें',
    'forum.newTopic': 'नया विषय',
    'forum.reply': 'जवाब दें',
    'forum.replies': 'जवाब',
    'forum.views': 'दृश्य',
    
    // Resources Page
    'resources.title': 'व्यावसायिक संसाधन',
    'resources.subtitle': 'आपके व्यवसाय के लिए गाइड, टेम्पलेट और टूल्स',
    'resources.download': 'डाउनलोड',
    'resources.guides': 'गाइड',
    'resources.templates': 'टेम्पलेट',
    'resources.tools': 'टूल्स',
    
    // Dashboard
    'dashboard.welcome': 'वापसी पर स्वागत है',
    'dashboard.overview': 'अवलोकन',
    'dashboard.applications': 'मेरे आवेदन',
    'dashboard.savedSchemes': 'सहेजी गई योजनाएं',
    'dashboard.profile': 'प्रोफाइल',
    'dashboard.settings': 'सेटिंग्स',
    
    // Auth
    'auth.login.title': 'वापसी पर स्वागत है',
    'auth.login.subtitle': 'अपने खाते में साइन इन करें',
    'auth.login.email': 'ईमेल',
    'auth.login.password': 'पासवर्ड',
    'auth.login.forgotPassword': 'पासवर्ड भूल गए?',
    'auth.login.noAccount': 'खाता नहीं है?',
    'auth.signup.title': 'खाता बनाएं',
    'auth.signup.subtitle': 'उद्यमी समुदाय में शामिल हों',
    'auth.signup.name': 'पूरा नाम',
    'auth.signup.email': 'ईमेल',
    'auth.signup.password': 'पासवर्ड',
    'auth.signup.confirmPassword': 'पासवर्ड की पुष्टि करें',
    'auth.signup.hasAccount': 'पहले से खाता है?',
    
    // Footer
    'footer.about': 'हमारे बारे में',
    'footer.contact': 'संपर्क करें',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
    'footer.copyright': 'सर्वाधिकार सुरक्षित।',
    
    // Language
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.switch': 'भाषा बदलें',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('enternet-language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('enternet-language', lang)
    // Update html lang attribute
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
