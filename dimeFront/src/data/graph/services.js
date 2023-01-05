import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8055/graphql', // Replace with the URL of your Directus GraphQL API
  }),
  cache: new InMemoryCache(),
});

async function fetchPosts() {
  try {
    const response = await client.query({
      query: gql`
        query {
          linkTabs {
            id
            name
            tab
            control
          }
        }
      `,
    });
    const tabs = response.data.linkTabs;
    console.log(tabs);
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();
