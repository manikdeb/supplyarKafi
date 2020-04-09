import React , { Component } from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';

import CarouselBanner from './Carousel/Carousel';
import Categories from './Categories/Categories';
import BestPrices from './BestPrices/BestPrices';
import NewArrivals from './NewArrivals/NewArrivals';
import Features from './Features/Features';

const Styles = styled.div`
  .jumbo {
        background-color: #f8f8f8;
  }
`;

class Home  extends Component  {
    render(){
        return(
            <Styles>
                <Jumbo fluid className="jumbo">
                    <CarouselBanner />
                    <Categories />
                    <NewArrivals />
                    <BestPrices />
                    <Features />
                </Jumbo>
            </Styles>
        );
    }
}

export default Home;