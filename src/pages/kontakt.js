import * as React from "react"
import { graphql } from "gatsby"
import ContactHero from "../components/sections/ContactHero"
import ContactDetails from "../components/sections/ContactDetails"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"

const ContactPage = ({data}) => {
  const {hero, details} = data.contact;
  return (
    <div className="scrollSnap">
      <PageIndicator>
        <ContactHero data={hero} />
        <ContactDetails data={{details, contact: data.footer}} />
        <TheyTrusted />
        <Footer data={data.footer} />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    contact: datoCmsContact {
      hero {
        gatsbyImageData
        alt
      }
      details {
        gatsbyImageData
        alt
      }
    }
    footer: datoCmsFooter {
      email
      address
      addressMaps
      phone1
      phone2
      instagram
      facebook
    }
  }
`
 
export default ContactPage;