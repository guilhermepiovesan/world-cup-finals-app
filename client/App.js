import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  constructor() {
    super()
    this.state = {
      year: 2002,
    }
    this.updateYear = this.updateYear.bind(this)
  }

  updateYear(year) {
    this.setState({
      year
    })
  }

  render() {
    const query = gql`query WorldCupFinalQuery($year: Int!) {
                        worldCupFinal(year: $year) {
                          year
                          winner
                          loser
                          score
                        }
                      }`

    const WorldCupFinal = ({ data }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Year: {data.worldCupFinal && data.worldCupFinal.year}</Text>
        <Text>Winner: {data.worldCupFinal && data.worldCupFinal.winner}</Text>
        <Text>Loser: {data.worldCupFinal && data.worldCupFinal.loser}</Text>
        <Text>Score: {data.worldCupFinal && data.worldCupFinal.score}</Text>
      </View>
    )

    const ViewWithData = graphql(query, {
      options: { variables: { year: this.state.year } }
    })(WorldCupFinal)

    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Find World Cup Finals
        </Text>
        <TextInput onChangeText={this.updateYear} style={styles.input} />
        <ViewWithData />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    backgroundColor: '#ddd',
    height: 50,
    margin: 20,
  },
})

export default App