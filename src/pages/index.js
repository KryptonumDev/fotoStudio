import * as React from "react"
import { graphql } from "gatsby"
import HomeHero from "../components/sections/HomeHero"
import HomeSlider from "../components/sections/HomeSlider"
import HomeHello from "../components/sections/HomeHello"
import HomeLab from "../components/sections/HomeLab"

const IndexPage = ({data}) => {
  const {hero, slider, hello, lab} = data.home;
  return (
    <div className="scrollSnap">
      <HomeHero data={{hero}}/>
      <HomeSlider data={{slider}} />
      <HomeHello data={{hello}}/>
      <HomeLab data={{lab}}/>
      <footer className="footer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore explicabo accusantium culpa, similique autem possimus ipsam atque neque eveniet perferendis in! Facilis sunt molestias autem dicta fuga praesentium consequatur corrupti, laboriosam suscipit accusamus unde blanditiis vel minima velit numquam dolorum tenetur. Eligendi, magni fugit. Aliquid obcaecati autem ipsa delectus quidem? Veniam quos accusantium magnam aperiam consequuntur, inventore facere hic delectus fuga perspiciatis consectetur, illum repudiandae laborum numquam blanditiis! Doloremque ex saepe deserunt repellendus, temporibus dolor mollitia dolore voluptate quidem maiores minus non ut ducimus, sit quasi quaerat eligendi eius, et fugiat nihil? Obcaecati, commodi consequuntur iusto nesciunt sit esse ad ea! Quod veniam, molestias libero consectetur, architecto, repellendus modi at sapiente molestiae ipsa in. Earum sapiente distinctio in, minus, ullam, dicta quae atque fugiat expedita maiores nihil sequi consectetur? Error asperiores laborum non assumenda rerum nobis obcaecati ipsa eos odio fugiat ad in animi quo cum omnis officia vero similique architecto, perspiciatis magni debitis molestiae. Ab, consequuntur! Nam nulla quo pariatur asperiores, vel itaque dignissimos enim perferendis mollitia porro vero nisi cum ipsam molestiae obcaecati aliquid veritatis quam quidem tempora? Ratione, quam dignissimos quas ullam, iusto harum pariatur voluptatem reprehenderit exercitationem, dicta assumenda ipsam. Tenetur velit animi placeat id nihil?</footer>
    </div>
  )
}

export const query = graphql`
  query {
    home: datoCmsHome {
      hero {
        gatsbyImageData(placeholder: NONE)
        alt
      }
      hello {
        gatsbyImageData(placeholder: NONE)
        alt
      }
      lab {
        gatsbyImageData(placeholder: NONE)
        alt
      }
      slider {
        gatsbyImageData(placeholder: NONE)
        alt
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Foto Studio</title>
