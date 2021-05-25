import * as React from "react"

import Layout from "../components/layout"
import Image from "../components/Image"
import IndexContent from "../components/Contents/index-content"
import RoomsContent from "../components/Contents/rooms-content"


const IndexPage = () => {

  return(
    <Layout>
      <div>
        <Image/>
        <IndexContent/>
        <RoomsContent/>
      </div>
    </Layout>
  )
};

export default IndexPage
