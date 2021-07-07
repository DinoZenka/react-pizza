import React from 'react';
import ContentLoader from "react-content-loader"

const PizzaLoader = (props) => (
  <ContentLoader
    speed={2}
    width={285}
    height={465}
    viewBox="0 0 285 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="298" rx="7" ry="7" width="261" height="97" />
    <circle cx="139" cy="124" r="110" />
    <rect x="10" y="252" rx="5" ry="5" width="259" height="29" />
    <rect x="12" y="405" rx="5" ry="5" width="97" height="43" />
    <rect x="132" y="404" rx="28" ry="28" width="139" height="46" />
  </ContentLoader>
)

export default PizzaLoader;