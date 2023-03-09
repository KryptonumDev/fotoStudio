import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import SectionHero from "../components/sections/SectionHero"
import ContactForm from "../components/sections/ContactForm"
import ContactDetails from "../components/sections/ContactDetails"
import Reviews from "../components/sections/Reviews"
import AboutSlider from "../components/sections/AboutSlider"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from "../components/Seo"
import { inject } from '@vercel/analytics';

const ContactPage = ({data}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`ContactPage`)
  const {hero, details} = data.contact;
  const { slider } = data.about;
  return (
    <div className="scrollSnap" {...scrollRestoration}>
      <PageIndicator>
        <SectionHero
          heading="Kontakt"
          copy={['Porozmawiajmy o Twoich pomysłach na sesję zdjęciową']}
          image={hero}
        />
        <ContactForm />
        <ContactDetails data={{details, contact: data.footer}} />
        <AboutSlider
          heading="Fotografie"
          button={{text: 'Portfolio', link: '/portfolio'}}
          data={slider}
        />
        <Reviews />
        <TheyTrusted />
        <Footer />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    contact: datoCmsContact {
      hero {
        gatsbyImageData(placeholder: NONE)
        alt
      }
      details {
        gatsbyImageData(placeholder: NONE)
        alt
      }
    }
    about: datoCmsAboutMe {
      slider {
        gatsbyImageData(placeholder: NONE, width: 400)
        alt
      }
    }
  }
`
 
export default ContactPage;

export const Head = () => (
  <Seo
    title="Kontakt"
  >
  </Seo>
)
