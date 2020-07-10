import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ServiceSummary from "../components/service"
import LeadCapture from "../components/lead-capture"
import Benefits from "../components/benefits"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ position: `relative`, width: `100%` }}>
      <Image />
      <h2
        style={{
          position: `absolute`,
          width: `90%`,
          bottom: `1rem`,
          left: `0`,
        }}
      >
        <span
          style={{
            color: `white`,
            font: `bold 24px/45px Helvetica, Sans-Serif`,
            letterSpacing: `-1px`,
            background: `rgba(0, 0, 0, 0.7)`,
            padding: `10px`,
          }}
        >
          We build your budget website.
          <span class="spacer" style={{ padding: `0 5px` }}></span>
          <br />
          <span class="spacer" style={{ padding: `0 5px` }}></span>
          You beat your bastard competitors.
        </span>
      </h2>
    </div>
    <div style={{ height: `80px` }}></div>
    <Benefits />
    <div style={{ height: `80px` }}></div>

    <ServiceSummary />
    <div style={{ height: `80px` }}></div>
    <LeadCapture />
  </Layout>
)

export default IndexPage
