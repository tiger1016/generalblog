import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const blogData = useStaticQuery(graphql `
        query RecentPostQuery {
            allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
                totalCount
                edges {
                    node {
                        fields {
                            slug
                            dateSlug
                        }
                        frontmatter {
                            date(formatString: "LL")
                            format
                            title
                            video_link
                            quote_text
                            quote_author
                            link
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 510, maxHeight: 560, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                            images {
                                childImageSharp {
                                    fluid(maxWidth: 510, maxHeight: 560, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }      
    `);
    const blogs = blogData.allMarkdownRemark.edges;
    return blogs;
}