import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import PhotographyHero from "../components/sections/PhotographyHero"
import PhotographyGallery from "../components/sections/PhotographyGallery"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from "../components/Seo"
import { inject } from '@vercel/analytics';

const PhotographyPage = ({data: {photography}}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`PhotographyPage`);
  return (
    <div className="scrollSnap" style={{scrollSnapType:"none"}} {...scrollRestoration}>
      <PageIndicator>
        <PhotographyHero data={photography} />
        <PhotographyGallery data={photography.gallery} />
        <TheyTrusted />
        <Footer />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    photography: datoCmsPhotography(slug: {eq: $slug}){
      name
      slug
      hero {
        gatsbyImageData(placeholder: NONE)
        alt
      }
      heroCopy
      gallery {
        heading
        galleryLeft {
          gatsbyImageData(placeholder: NONE)
          alt
        }
        galleryRight {
          gatsbyImageData(placeholder: NONE)
          alt
        }
      }
    }
  }
`
 
export default PhotographyPage;

export const Head = ({data: {photography}}) => (
  <>
    <Seo />
    <title>{photography.name} - Adam Chrapek</title>
  </>
)
