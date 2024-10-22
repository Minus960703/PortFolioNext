import { ExperienceProps, getExperienceList } from '@/api/About/experience';
import { AboutExpArea, AboutIntroArea, AboutMoreArea, AboutInterestArea } from '@/components';
import React from 'react'

async function AboutPage() {
  const experienceList: ExperienceProps[] = await getExperienceList(); // Supabase에서 데이터 가져오기

  return (
    <section className='about'>
      <h1>ABOUT</h1>
      <AboutIntroArea />
      <AboutInterestArea />
      <AboutExpArea experienceList={experienceList} />
      <AboutMoreArea />
    </section>
  )
}

export default AboutPage;