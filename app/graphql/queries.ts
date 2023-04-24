import { fetchAPI } from "app/library/lib";

const generateAllPostPages = `query AllPosts {
    posts(first: 300) {
      edges {
        node {
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
          id
          excerpt
          slug
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              name
              firstName
              lastName
               databaseId
            }
          }
        }
      }
    }
  }
  `;

const allPosts = `query AllPosts {
    posts(first: 50) {
      edges {
        node {
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
          id
          excerpt
          slug
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              name
              firstName
              lastName
            }
          }
        }
      }
    }
  }
`;

const singlePost = `query getSinglePost($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      databaseId
      categories {
        edges {
          node {
            name
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      excerpt
      content
      slug
      id
      date
      author {
        node {
          name
          firstName
          lastName
          id
        }
      }
    }
  }
  `;

const paginatedAllPosts = `query getPaginatedAllPosts($offset: Int) {
    posts(where: {offsetPagination: {size: 6, offset: $offset}}) {
      edges {
        node {
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
          id
          excerpt
          slug
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              name
              firstName
              lastName
               databaseId
            }
          }
        }
      }
    }
  }
  `;

const postByTag = `query getPostsbyTag($tag: String) {
    posts(where: {tag: $tag}) {
      edges {
        node {
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          id
          excerpt
          slug
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              name
              firstName
              lastName
               databaseId
            }
          }
        }
      }
    }
  }`;

const postsByCategory = `query getPostsbyCategory($category: String) {
    posts(where: {categoryName: $category}) {
      edges {
        node {
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
          id
          excerpt
          slug
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              name
              firstName
              lastName
               databaseId
            }
          }
        }
      }
    }
  }
  `;
// -----------------------------------------------------------------

export async function getSinglePost(slug: string) {
  const data = await fetchAPI(singlePost, {
    variables: { id: slug },
  });
  return data?.post;
}

export async function getPosts() {
  const data = await fetchAPI(allPosts, {
    variables: {},
  });
  return data?.posts?.edges;
}

export async function getGenerateAllPostPages() {
  const data = await fetchAPI(generateAllPostPages, {
    variables: {},
  });
  return data?.posts?.edges;
}

export async function getPostsbyTag(tag: string) {
  const data = await fetchAPI(postByTag, {
    variables: { tag },
  });
  return data?.posts?.edges;
}

export async function getPostsByCategory(category: string) {
  const data = await fetchAPI(postsByCategory, {
    variables: { category },
  });
  return data?.posts?.edges;
}

export async function getPaginatedPosts(offset: number) {
  const data = await fetchAPI(paginatedAllPosts, {
    variables: { offset },
  });
  return data?.posts?.edges;
}
