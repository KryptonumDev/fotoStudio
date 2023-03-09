import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import SectionHero from "../components/sections/SectionHero"
import PrivacyPolicyContent from "../components/sections/PrivacyPolicyContent"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from "../components/Seo"
import { inject } from '@vercel/analytics';

const PrivacyPolicyPage = ({data}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`PrivacyPolicyPage`)
  const {details} = data.privacyPolicy;
  return (
    <div className="scrollSnap" style={{scrollSnapType:"none"}} {...scrollRestoration}>
      <PageIndicator>
        <SectionHero
          heading="Polityka Prywatności"
          image={details}
        />
        <PrivacyPolicyContent />
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

 
export default PrivacyPolicyPage;

export const Head = () => (
  <Seo
    title="Polityka Prywatności"
  >
  </Seo>
)