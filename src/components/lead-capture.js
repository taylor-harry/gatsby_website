import React from "react"

const LeadCapture = () => (
  <div
    style={{
      paddingTop: `5% `,
      paddingBottom: `5% `,
      height: `auto`,
      width: `100%`,
    }}
  >
    <div
      style={{
        backgroundColor: `#DFF1FF`,
        borderStyle: `dotted`,
        borderRadius: `20px`,
        padding: `30px 100px 30px 100px`,
        width: `80%`,
        maxWidth: `830px`,
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
        display: `grid`,
        gridGap: `5px`,
        gridTemplateAreas: `
      "title "
      "text-1"
      "inst-1 "
      "input"
      "button"
      `,
      }}
    >
      <h2 style={{ textAlign: `center`, fontSize: `3rem` }}>TAKE 10% OFF</h2>
      <h4 style={{ textAlign: `center` }}>Your budget website</h4>
      <p style={{ textAlign: `center` }}>
        Enter your email below to get started
      </p>
      <input
        type="text"
        placeholder="Enter Your Email Here...."
        id="name"
        name="name"
        required
        minlength="3"
        maxlength="245"
        size="20"
        style={{
          borderRadius: `10px`,
          height: `2.6rem`,
          width: `80%`,
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      ></input>
      <button
        style={{
          backgroundColor: `#214875`,
          color: `#DFF1FF`,
          borderColor: `#214875`,
          borderRadius: `10px`,
          width: `70%`,
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: `10px`,
        }}
      >
        Yes, I Want This Exclusive Deal!
      </button>
    </div>
  </div>
)

export default LeadCapture
