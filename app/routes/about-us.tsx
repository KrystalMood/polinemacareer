import React from 'react'
import Hero from '~/components/about-us/hero'
import OurHope from '~/components/about-us/our-hope'
import OurMission from '~/components/about-us/our-mission'
import Team from '~/components/about-us/team'
import MainLayout from '~/components/layouts/MainLayout'

export default function AboutUsPage() {
  return (
    <MainLayout>
      <Hero />
      <OurHope />
      <OurMission />
      <Team />
    </MainLayout>
  )
}
