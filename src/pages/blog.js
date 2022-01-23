import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle='Blog'>
            <ul>
            {
                data.allFile.nodes.map(node => (
                <li key={node.name}>{node.name}</li>
                ))
            }
            </ul>
        </Layout>
    );
}

export default BlogPage;

export const query = graphql`
query {
    allFile {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
`