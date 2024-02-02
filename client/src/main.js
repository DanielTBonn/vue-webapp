import './assets/main.css'

import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { 
    ApolloClient, 
    InMemoryCache,
    createHttpLink 
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

import App from './App.vue'

const httpLink = createHttpLink({
    uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
})

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

app.mount('#app')
