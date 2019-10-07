import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site Files</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>changeTime</th>
              <th>blocks</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.id}</td>
                <td>{node.changeTime}</td>
                <td>{node.blocks}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile {
    edges {
      node {
        id
        changeTime(fromNow: true)
        blocks
        birthTime(fromNow: true)
      }
    }
  }
}
`
