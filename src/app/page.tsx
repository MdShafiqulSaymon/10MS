'use client'

import CourseHero from '@/components/CourseHero'
import CourseInfo from '@/components/CourseInfo'
import Instructor from '@/components/Instructor'
import Curriculum from '@/components/Curriculums/Curriculum'
import WhatYouLearn from '@/components/WhatYouLearn/WhatYouLearn'
import FAQ from '@/components/FAQ/FAQ'
import RelatedCourses from '@/components/RelatedCourses/RelatedCourses'
import CourseStructure from '@/components/CourseStructure/CourseStructure'
import CourseExclusiveFeatures from '@/components/FeatureCourse/CourseExclusiveFeatures'
import CourseDetails from '@/components/CourseDetails/CourseDetails'
import { useIELTSStore } from '@/store/useIELTSStore'
import SeoHead from '@/components/SeoHead'

export default function HomePage() {
  const { data } = useIELTSStore()

  const seo = data?.data.seo
  const instructorData = data?.data.sections[2]
  const courseData = data?.data.sections[3]
  const learningData = data?.data.sections[5]
  const exclusiveFeatures = data?.data.sections[8]
  const courseDetails = data?.data.sections[7]
  const faqData = data?.data.sections[15]

  return (
    <>
      {/* ✅ Dynamic SEO meta tags */}
      <SeoHead seo={seo} />

      <CourseHero />
      <div className="container mx-auto px-12 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <Instructor instructorData={instructorData} />
            <CourseStructure courseData={courseData} />
            <WhatYouLearn courseData={learningData} />
            <CourseExclusiveFeatures courseData={exclusiveFeatures} />
            <CourseDetails courseData={courseDetails} />
            <Curriculum />
            <FAQ faqData={faqData} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 -mt-80 sticky top-[64px]">
            <CourseInfo />
          </div>
        </div>
        <RelatedCourses />
      </div>
    </>
  )
}
