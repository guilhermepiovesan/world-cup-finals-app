import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './App'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const Client = () => {
  const IP = '192.168.25.13'
  const networkInterface = createNetworkInterface({
    uri: `http://${IP}:8080/graphql`
  })
  const client = new ApolloClient({
    networkInterface
  })
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('client', () => Client);
