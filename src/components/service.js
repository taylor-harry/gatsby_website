import React from "react"

const ServiceSummary = () => (
  <div
    style={{
      maxWidth: `100%`,
      height: `auto`,
      backgroundColor: `#FFE7D5`,
      padding: `2rem`,
      marginBottom: `1.45rem`,
      display: "grid",
      textAlign: `center`,
      marginLeft: `auto`,
      marginRight: `auto`,
      gridTemplateAreas: `
            ". title ."
            "pic-1 pic-2 pic-3"
            "text-1 text-2 text-3"
            "desc-1 desc-2 desc-3"
            ". action ."
            `,
    }}
  >
    <h2
      style={{
        gridArea: "title",
        paddingBottom: `1rem`,
        paddingTop: `1rem`,
        borderStyle: `solid`,
        borderColor: `black`,
        borderRadius: `10px`,
      }}
    >
      OUR SERVICES
    </h2>
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
        gridArea: "pic-1",
      }}
    >
      <img src={require("../images/prototype.svg")} />
    </div>
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
        gridArea: "pic-2",
      }}
    >
      <img src={require("../images/responsive.svg")} />
    </div>
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
        gridArea: "pic-3",
      }}
    >
      <img src={require("../images/globe.svg")} />
    </div>
    <h3 style={{ gridArea: "text-1" }}>DESIGN</h3>
    <h3 style={{ gridArea: "text-2" }}>DEVELOP</h3>
    <h3 style={{ gridArea: "text-3" }}>DEPLOY</h3>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
        gridArea: "desc-1",
      }}
    >
      We generate ideas to meet all your business needs and create visually
      stunning renditions of your vision.
    </p>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
        gridArea: "desc-2",
      }}
    >
      We use the most suitable cutting-edge technologies to build your website,
      with excellent usability no matter the device.
    </p>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
        gridArea: "desc-3",
      }}
    >
      We will help you launch your website for the world to see.
    </p>
    <a
      style={{
        borderRadius: `5px`,
        backgroundColor: `coral`,
        fontFamily: `Arial, Helvetica, sans-serif`,
        fontSize: `1.5rem`,
        padding: `10px 0px 10px 0px`,
        fontWeight: `bold`,
        color: `white`,
        gridArea: "action",
      }}
      href="/services"
    >
      Request a free quote
    </a>
  </div>
)

export default ServiceSummary
