import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { debounce } from 'lodash';

import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import Wrapper from '../components/Wrapper';
import SpotlightWrapper from '../components/SpotlightWrapper';
import Spotlight from '../components/Spotlight';
import Content from '../components/Content';
import FeaturedItems from '../components/FeaturedItems';
import SpecialLink from '../components/SpecialLink';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

class IndexPage extends Component {
  state = {
    isScrolled: false,
    isMounted: false,
  };

  constructor(props) {
    super(props);
  }

  bannerRef = React.createRef();

  scrollListener = debounce(() => {
    const { clientHeight } = this.bannerRef.current;
    if (window.scrollY >= clientHeight) this.setState({ isScrolled: true });
    else this.setState({ isScrolled: false });
  }, 66);

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);

    // trigger banner animation
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { data, openMenu } = this.props;
    return (
      <div className={this.state.isMounted ? '' : 'is-preload'}>
        <NavigationBar
          siteTitle={data.site.siteMetadata.title}
          openMenu={openMenu}
          className={this.state.isScrolled ? '' : 'alt'}
        />
        <Banner siteTitle={data.site.siteMetadata.title} ref={this.bannerRef} />
        <SpotlightWrapper>
          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic01.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Magna arcu feugiat</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <SpecialLink to="#">Learn more</SpecialLink>
            </Content>
          </Spotlight>
          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic02.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Tempus adipiscing</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <SpecialLink to="#">Learn more</SpecialLink>
            </Content>
          </Spotlight>

          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic03.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Nullam dignissim</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <SpecialLink to="#">Learn more</SpecialLink>
            </Content>
          </Spotlight>
        </SpotlightWrapper>
        <Wrapper className="alt style1">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <FeaturedItems>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic04.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <SpecialLink>Learn more</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic05.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <SpecialLink>Learn more</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic06.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <SpecialLink>Learn more</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic07.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <SpecialLink>Learn more</SpecialLink>
            </article>
          </FeaturedItems>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </Wrapper>
      </div>
    );
  }
}

export default IndexPage;
