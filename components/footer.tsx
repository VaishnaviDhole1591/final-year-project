'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
]

export function Footer() {
  const { t, language } = useLanguage()

  const footerLinks = {
    platform: [
      { name: t('nav.schemes'), href: '/schemes' },
      { name: t('nav.network'), href: '/network' },
      { name: t('nav.events'), href: '/events' },
      { name: t('nav.resources'), href: '/resources' },
    ],
    company: [
      { name: t('footer.about'), href: '/about' },
      { name: language === 'en' ? 'Careers' : 'करियर', href: '/careers' },
      { name: t('footer.contact'), href: '/contact' },
      { name: language === 'en' ? 'Blog' : 'ब्लॉग', href: '/blog' },
    ],
    legal: [
      { name: t('footer.privacy'), href: '/privacy' },
      { name: t('footer.terms'), href: '/terms' },
      { name: language === 'en' ? 'Cookie Policy' : 'कुकी नीति', href: '/cookies' },
    ],
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">EnterNet</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {language === 'en' 
                ? 'The Future of Entrepreneur Networks. Connect, discover government schemes, and grow your business.'
                : 'उद्यमी नेटवर्क का भविष्य। जुड़ें, सरकारी योजनाएं खोजें, और अपना व्यवसाय बढ़ाएं।'
              }
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {language === 'en' ? 'Platform' : 'प्लेटफॉर्म'}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {language === 'en' ? 'Company' : 'कंपनी'}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {language === 'en' ? 'Legal' : 'कानूनी'}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EnterNet. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
