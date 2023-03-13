import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import SectionHero from "../components/sections/SectionHero"
import AboutSlider from "../components/sections/AboutSlider"
import AboutCooperation from "../components/sections/AboutCooperation"
import AboutCooperationProcess from "../components/sections/AboutCooperationProcess"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from '../components/Seo'
import { inject } from '@vercel/analytics';

const AboutPage = ({data}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`AboutPage`)
  const {hero, slider, cooperation, slider2} = data.about;
  return (
    <div className="scrollSnap" {...scrollRestoration}>
      <PageIndicator>
        <SectionHero
          heading="Cześć, tu Adam"
          copy={['Pasją do fotografowania zaraziłem się wiele lat temu. Na początku robiłem zdjęcia wszędzie, gdzie działo się coś ważnego. Dziś, choć w swojej pracy korzystam z nowoczesnego sprzętu i innowacyjnych rozwiązań, uważam, że to miłość do fotografowania tworzy dobre ujęcie.', 'Każda sesja zdjęciowa to szansa na uchwycenie niepowtarzalnego momentu i towarzyszącej mu wyjątkowej atmosfery. Nie mogę się doczekać naszej wspólnej sesji!']}
          image={hero}
        />
        <AboutSlider
          id="zobacz"
          heading="Zobacz, co możemy stworzyć"
          button={{text: 'Portfolio', link: '/portfolio'}}
          data={slider}
        />
        <AboutCooperation data={cooperation} />
        <AboutCooperationProcess />
        <AboutSlider
          heading="Fotografia reportażowa"
          button={{text: 'Kontakt', link: '/kontakt'}}
          data={slider2}
        />
        <TheyTrusted />
        <Footer />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    about: datoCmsAboutMe {
      hero {
        gatsbyImageData(placeholder: BLURRED)
        alt
      }
      slider {
        gatsbyImageData(placeholder: BLURRED, width: 400)
        alt
      }
      cooperation {
        gatsbyImageData(placeholder: BLURRED)
        alt
      }
      slider2 {
        gatsbyImageData(placeholder: BLURRED, width: 400)
        alt
      }
    }
  }
`

export default AboutPage

export const Head = () => (
  <Seo
    title="O mnie"
  >
  </Seo>
)
