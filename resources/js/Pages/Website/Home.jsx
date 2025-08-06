import { CallToAction } from '@/Components/Website/CallToAction'
import { Faqs } from '@/Components/Website/Faqs'
import { Footer } from '@/Components/Website/Footer'
import { Header } from '@/Components/Website/Header'
import { Hero } from '@/Components/Website/Hero'
import { Pricing } from '@/Components/Website/Pricing'
import { PrimaryFeatures } from '@/Components/Website/PrimaryFeatures'
import { SecondaryFeatures } from '@/Components/Website/SecondaryFeatures'
import { Testimonials } from '@/Components/Website/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
