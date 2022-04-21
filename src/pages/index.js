import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import CustomerSupport from 'sections/customer-support';
import Feature from 'sections/feature';
import VideoOne from 'sections/video-one';
import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';
import { PopupWidget } from "react-calendly";
import { FaAlignCenter } from 'react-icons/fa';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        {/* <Layout> */}
          {/* <PopupWidget url="https://tidycal.com/mathieu-houlle/un-projet-web" text={"Prendre rendez-vous"}/>   */}
          <SEO title="Workoda" />
          {/* <Banner />
          <Services />
          <BoostAgencies />
          <VideoOne />
          <Testimonials />
          <CustomerSupport />
          <Feature />
          <CallToAction /> */}
		  <h1 style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><span style={{color: 'red'}}>W</span>ork in progress...</h1>
        {/* </Layout> */}
      </StickyProvider>
    </ThemeProvider>
  );
}
