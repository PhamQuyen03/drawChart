/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react'
import { AreaChart, YAxis, LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { StyleSheet, View } from 'react-native'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends React.PureComponent {
  render() {
    const dataLine = [-100, 100];
    const data  = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, 20 ];
    const data2 = [ 5, 1, 4, 9, -4, -24, 8, 9, 3, 5, -3, 4, 5, 0, 2 ];
    const contentInset = { top: 10, bottom: 10 };



    return (
        <View style={ { height: 300, flexDirection: 'row' } }>
          {/* <YAxis
              data={ dataLine }
              contentInset={ contentInset }
              svg={{
                  fill: 'grey',
                  fontSize: 10,
              }}
              numberOfTicks={ 10 }
              formatLabel={ value => value }
          />
          <AreaChart
              style={ { flex: 1 } }
              data={ data }
              svg={{ stroke: 'rgba(134, 65, 244, 0.5)' }}
              contentInset={ { top: 20, bottom: 20 } }
              curve={ shape.curveLinear }
          >
            <Grid/>
          </AreaChart>
          <AreaChart
              style={ StyleSheet.absoluteFill }
              data={ data2 }
              svg={{ stroke: 'rgba(34, 128, 176, 0.5)' }}
              contentInset={ { top: 20, bottom: 20 } }
              curve={ shape.curveNatural }
          /> */}
          <YAxis
            data={ dataLine }
            contentInset={ contentInset }
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            numberOfTicks={ 10 }
            formatLabel={ value => value }
          />
          <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={ data }
            svg={{ stroke: 'red' }}
            contentInset={ contentInset }
            curve={ shape.curveLinear }
          >
              <Grid/>
          </LineChart>
          <LineChart
            style={ StyleSheet.absoluteFill }
            data={ data2 }
            svg={{ stroke: 'black' }}
            curve={ shape.curveMonotoneX }
            // contentInset={ contentInset }
          />
                {/* </LineChart> */}
 
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
