import React, { useRef } from "react";
import styled from "styled-components";

const links = [
  {
    name: 'Ślub',
    href: '/slub'
  },
  {
    name: 'Chrzest',
    href: '/slub'
  },
  {
    name: 'Komunia',
    href: '/slub'
  },
  {
    name: 'Oferta stacjonarna',
    href: '/slub'
  },
  {
    name: 'Biznesowa',
    href: '/slub'
  },
  {
    name: 'Produktowa',
    href: '/slub'
  },
  {
    name: 'Analogowa',
    href: '/slub'
  },
  {
    name: 'Kontakt',
    href: '/slub'
  },
]

const PricingLinks = ({data}) => {
  const component = useRef();
  const handleExpand = (e) => {
    e.preventDefault();
    component.current.classList.add('active');
    const width = window.innerWidth;
    const height = window.innerHeight;
    component.current.style.transformOrigin = `${e.clientX / width * 100}% ${e.clientY / height * 100}%`;
  }
  const handleExpandClose = () => {
    component.current.classList.remove('active');
  }
  return (
    <StyledLinks className="links sec" id="zobacz">
      <div className="max-width">
        <div className="links-wrapper">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={e => handleExpand(e)}
            >{link.name}</a>
          ))}
        </div>
      </div>
      <div className="component" ref={component}>
        <div className="component-wrapper">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reprehenderit odit mollitia laboriosam delectus unde, quae deserunt laudantium dignissimos quisquam, error cumque? Autem nam, distinctio vero non sapiente est vitae officiis quam qui aliquid asperiores dolore veritatis recusandae nobis officia! Sapiente tempora illum exercitationem voluptate blanditiis impedit quos, ipsum maiores explicabo nemo quia dolorum sunt consequatur officiis libero ipsa numquam doloremque voluptatum sequi? Tempora voluptas id pariatur illum impedit harum dolorum quasi dolore deleniti. Illum facere amet aspernatur, voluptate quis vitae eligendi nisi omnis, inventore nostrum ea dolore tenetur esse quia architecto illo? Vel saepe deleniti magni eius quasi, ab eos accusantium nobis cumque eaque temporibus dicta autem repellat fugiat fugit harum voluptate eveniet minima ex totam expedita architecto placeat distinctio. Repudiandae iste ipsa, totam a quia veritatis molestias cum impedit adipisci distinctio quam officiis sequi debitis aperiam nesciunt! Alias suscipit mollitia itaque. Enim cumque doloribus, laudantium eius perferendis autem consectetur mollitia corporis excepturi. Nobis corporis dignissimos maxime, aliquid reiciendis quisquam itaque quo amet sequi eaque incidunt harum numquam libero ut repellat nesciunt. Id asperiores culpa eum amet pariatur fugiat cum, obcaecati placeat fugit quam natus sunt rem at aliquid soluta ipsum, illo officiis suscipit laudantium temporibus numquam! Exercitationem labore sequi est ratione libero at dolorum adipisci. Minima, aspernatur in voluptate placeat error impedit, excepturi asperiores dignissimos atque cum possimus sequi rerum. Architecto quibusdam minima dolor consequuntur alias. Odit temporibus natus laborum quas accusamus cumque deserunt obcaecati placeat quia eveniet eum ipsam, assumenda omnis vel quo? Quaerat, laborum sint? Minima fugiat, similique, nisi quaerat totam tenetur vel tempora obcaecati culpa ut illum, nesciunt nam beatae voluptatem! Eaque est nesciunt distinctio eius vero ullam, natus quaerat commodi laborum a saepe esse eligendi nostrum fugit at nobis labore cum atque amet eos iusto maiores consequuntur accusamus enim. Facere cum expedita, magni harum natus voluptatem ut amet? Perspiciatis quasi officiis provident delectus quo ipsa corporis, accusamus eligendi quisquam quas, alias pariatur dolorem suscipit saepe exercitationem, quia ea praesentium. Dolore nulla ex placeat similique voluptatem doloremque ipsum suscipit, illum optio quas recusandae qui eaque possimus earum corporis blanditiis reiciendis nam quasi sequi maxime minus, velit doloribus? Cum praesentium mollitia dolor pariatur rerum quaerat ad doloribus inventore, ipsum, enim, consectetur.
          <button onClick={handleExpandClose}>Close</button>
        </div>
      </div>
    </StyledLinks>
  );
}

const StyledLinks = styled.section`
  display: flex;
  align-items: center;
  .max-width {
    height: auto;
  }
  --margin: .3rem;
  .links-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--margin) * -1);
    a {
      text-align: center;
      padding: 5% 2%;
      font-size: ${42/16}rem;
      font-family: var(--serif-font);
      flex-shrink: 0;
      width: calc(25% - 2*var(--margin));
      margin: var(--margin);
      border: 1px solid var(--white);
      transition: background-color .1s, color .1s;
      &:hover {
        background-color: var(--white);
        color: var(--bg);
      }
    }
  }
  .component {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    z-index: 10;
    transition: transform .8s .1s cubic-bezier(0.7, 0, 0.84, 0), background-color .3s;
    transform: scale(0);
    &.active {
      transition: transform .8s cubic-bezier(0.16, 1, 0.3, 1), background-color .8s .5s cubic-bezier(0.16, 1, 0.3, 1);
      transform: scale(1) !important;
      background-color: var(--bg);
    }
    overflow-y: auto;
    padding: 21px 17px;
    .component-wrapper {
      border: 1px solid #fff;
      width: 100%;
      min-height: 100%;
      padding: 21px 17px;
    }
  }
`
 
export default PricingLinks;