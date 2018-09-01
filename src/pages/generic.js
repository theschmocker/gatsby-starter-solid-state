import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import Wrapper from '../components/Wrapper';
import FeaturedItems from '../components/FeaturedItems';
import SpecialLink from '../components/SpecialLink';

const Generic = ({ data }) => (
  <PageWrapper>
    <Header>
      <h2>Generic</h2>
      <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
    </Header>

    <Wrapper>
      <h3 className="major">Lorem ipsum dolor</h3>
      <p>
        Morbi mattis mi consectetur tortor elementum, varius pellentesque velit
        convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque
        ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit
        aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis
        felis ac sagittis semper. Curabitur purus leo donec vel dolor at arcu
        tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget
        ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend
        ligula non velit accumsan cursus. Etiam ut gravida sapien.
      </p>

      <p>
        Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet.
        Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel
        diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex
        ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec commodo,
        vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor
        tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum
        ullamcorper ante tincidunt. Mauris felis nec felis elementum varius.
      </p>

      <h3 className="major">Vitae phasellus</h3>
      <p>
        Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
        Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas,
        purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed
        ac elementum arcu. Quisque placerat auctor laoreet.
      </p>

      <FeaturedItems>
        <article>
          <a href="#" className="image">
            <Img sizes={data.pic04.childImageSharp.sizes}/>
          </a>
          <h3 className="major">Sed feugiat lorem</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla
            dignissim dapibus ultrices.
          </p>
          <SpecialLink>
            Learn more
          </SpecialLink>
        </article>
        <article>
          <a href="#" className="image">
            <Img sizes={data.pic05.childImageSharp.sizes}/>
          </a>
          <h3 className="major">Nisl placerat</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla
            dignissim dapibus ultrices.
          </p>
          <SpecialLink>
            Learn more
          </SpecialLink>
        </article>
      </FeaturedItems>
    </Wrapper>
  </PageWrapper>
);

export default Generic;
