import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import SectionHero from "../components/sections/SectionHero"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from "../components/Seo"
import { inject } from '@vercel/analytics';

const PrivacyPage = ({data}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`PrivacyPage`)
  const {details} = data.privacyPolicy;
  return (
    <div className="scrollSnap" style={{scrollSnapType:"none"}} {...scrollRestoration}>
      <PageIndicator>
        <SectionHero
          heading="Polityka Prywatności"
          image={details}
        />
        <Footer />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    privacyPolicy: datoCmsContact {
      details {
        gatsbyImageData(placeholder: NONE)
        alt
      }
    }
  }
`

 
export default PrivacyPage;

export const Head = () => (
  <Seo
    title="Polityka Prywatności"
  >
  </Seo>
)