import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';

function PortfolioPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, portfolio, language } = metaData;
  const { projects, timestamps } = portfolio;
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Bio author={author} language={language} />
      <TimeStampSection timestamps={timestamps} />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default PortfolioPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }
        portfolio {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
