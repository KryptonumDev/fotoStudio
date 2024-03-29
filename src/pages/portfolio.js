import * as React from "react"
import { graphql, useScrollRestoration } from "gatsby"
import SectionHero from "../components/sections/SectionHero"
import PortfolioPhotography from "../components/sections/PortfolioPhotography"
import PortfolioPricing from "../components/sections/PortfolioPricing"
import TheyTrusted from "../components/sections/TheyTrusted"
import Footer from "../components/organisms/Footer"
import PageIndicator from "../components/organisms/PageIndicator"
import { Seo } from "../components/Seo"
import { inject } from '@vercel/analytics';

const PortfolioPage = ({data}) => {
  inject();
  const scrollRestoration = useScrollRestoration(`PortfolioPage`)
  const {hero, reportage, analog, product, pricing} = data.portfolio;
  return (
    <div className="scrollSnap" {...scrollRestoration}>
      <PageIndicator>
        <SectionHero
          heading="Portfolio"
          copy={['Fotografia to mój sposób na życie, ale i pasja, która trwa niezmiennie od 40 lat.', 'Kocham uwieczniać niepowtarzalne chwile i tworzyć z nich wspomnienia, które zostają na długie lata.']}
          button={{to: '/kontakt', text: 'Kontakt'}}
          image={hero}
        />
        <PortfolioPhotography
          id="zobacz"
          slider={reportage}
          heading='Reportażowa'
          content={['Fotografia reportażowa to sposób na uwiecznienie historii. Ślub, wesele, komunia i inne uroczystości - dzięki sesji reportażowej te wyjątkowe chwile zostaną z Tobą na wiele lat.','Moje portfolio usług obejmuje również portrety, a także profesjonalne sesje wizerunkowe, dzięki którym łatwiej zareklamujesz siebie, nie tylko w cyfrowym świecie.']}
          button={{to: '/fotografia-reportazowa', text: 'Reportażowe'}}
        />
        <PortfolioPhotography
          slider={analog}
          heading='Analogowa'
          content={['Kiedy zaczynałem przygodę z fotografią, nie było aparatów cyfrowych. Moje pierwsze kroki jako fotograf stawiałem dzięki kliszy.','Nadal oferuję sesje zdjęciowe robione za pomocą starych metod. Zajmuję się także wywoływaniem zdjęć z kliszy oraz cyfryzacją starych fotografii. Fotografia analogowa wciąż ma wiele do zaoferowania i bardzo chętnie więcej Ci o niej opowiem.']}
          button={{to: '/fotografia-analogowa', text: 'Analogowe'}}
        />
        <PortfolioPhotography
          slider={product}
          heading='Produktowa'
          content={['Jeśli chcesz zareklamować swoje produkty w sieci, profesjonalne zdjęcia to konieczność. Produktowa sesja zdjęciowa świetnie sprawdzi się zarówno na Twojej stronie, jak i różnego rodzaju serwisach sprzedażowych. Chętnie pomogę Ci wyeksponować produkty, które masz w swojej ofercie.']}
          button={{to: '/fotografia-produktowa', text: 'Produktowe'}}
        />
        <PortfolioPricing data={pricing} />
        <TheyTrusted />
        <Footer />
      </PageIndicator>
    </div>
  )
}

export const query = graphql`
  query {
    portfolio: datoCmsPortfolio {
      hero {
        gatsbyImageData
        alt
      }
      reportage {
        gatsbyImageData
        alt
      }
      analog {
        gatsbyImageData
        alt
      }
      product {
        gatsbyImageData
        alt
      }
      pricing {
        gatsbyImageData
        alt
      }
    }
  }
`

 
export default PortfolioPage;

export const Head = () => (
  <Seo
    title="Portfolio"
  >
  </Seo>
)