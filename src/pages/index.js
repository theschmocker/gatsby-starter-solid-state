import React, { Component } from 'react';
import Link from 'gatsby-link';

import { debounce } from 'lodash';

import Banner from '../components/Banner';
import SpotlightWrapper from '../components/SpotlightWrapper';
import Spotlight from '../components/Spotlight';
import Content from '../components/Content';
import Header from '../components/header';
import SpecialLink from '../components/SpecialLink';

class IndexPage extends Component {
  state = {
    isScrolled: false,
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
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { data, openMenu } = this.props;
    return (
      <React.Fragment>
        <Header
          siteTitle={data.site.siteMetadata.title}
          openMenu={openMenu}
          className={this.state.isScrolled ? '' : 'alt'}
        />
        <Banner ref={this.bannerRef} />
        <SpotlightWrapper>
          <Spotlight>
            <a href="#" className="image">
              <img src="images/pic01.jpg" alt="" />
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
              <img src="images/pic02.jpg" alt="" />
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
              <img src="images/pic03.jpg" alt="" />
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
      </React.Fragment>
    );
  }
}

export default IndexPage;
