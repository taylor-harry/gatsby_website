import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceSummary from "../components/service"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <ServiceSummary />
  </Layout>
)

export default ServicesPage
