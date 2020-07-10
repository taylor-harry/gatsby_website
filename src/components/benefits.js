import React from "react"

const Benefits = () => (
  <div
    style={{
      maxWidth: `90%`,
      //backgroundColor: `#FFE7D5`,
      padding: `10px`,
      marginBottom: `1.45rem`,
      display: "grid",
      textAlign: `center`,
      marginLeft: `auto`,
      marginRight: `auto`,
      gridTemplateAreas: `
          "pic-1 pic-2 pic-3"
          "text-1 text-2 text-3"
          "desc-1 desc-2 desc-3"
          ". action ."
          `,
    }}
  >
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <img src={require("../images/medal.svg")} />
    </div>
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <img src={require("../images/money.svg")} />
    </div>
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <img src={require("../images/24-hours.svg")} />
    </div>
    <h3>Add instant credibility</h3>
    <h3>Attract new customers</h3>
    <h3>Stay in control of your brand</h3>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
      }}
    >
      56% of people stated that they won’t trust a business without a website.
      Having a good website instantly boosts your credibility as a legitimate
      business.
    </p>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
      }}
    >
      81% of people research a business or service online prior to making a
      purchase decision. If you don’t have a website, you have no chance at
      capturing a share of this market.
    </p>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
      }}
    >
      A website shapes the online perception of your business in a way that your
      social media channels cannot provide. You can position yourself in the
      market to get the exact type of customers you’re looking for.
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

export default Benefits
