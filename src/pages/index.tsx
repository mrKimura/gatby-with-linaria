import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {styled} from '@linaria/react'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Test>AAA</Test>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>


const Test = styled.div`
  background-color: green;
`