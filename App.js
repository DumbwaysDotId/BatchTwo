import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'native-base';

import ExampleMain from './components/example_main/Main';
import ExampleState from './components/example_state/Main';
import ExampleProps from './components/example1_component_props/Main';
import ExampleFlex from './components/example2_flex/Main';
import ExampleNativeBase from './components/example_native_base/Main';
import ExampleLifecycle from './components/example_lifecycle/Main';
import ExampleFetchApi from './components/example_fetch_api/Main'
import ExampleFetchApiCreate from './components/example_fetch_api/Create'
import ExampleFetchApiUpdate from './components/example_fetch_api/Update'

const App = StackNavigator({
  RouteMain: {
    screen: ExampleMain,
    navigationOptions: {
      title: 'DumbWays Batch 2'
    }
  },
  RouteFetchApi: {
    screen: ExampleFetchApi,
    navigationOptions: {
      title: 'Example Fetch Api'
    }
  },
  RouteFetchApiCreate: {
    screen: ExampleFetchApiCreate,
    navigationOptions: {
      title: 'Example Fetch Api Create'
    }
  },
  RouteFetchApiUpdate: {
    screen: ExampleFetchApiUpdate,
    navigationOptions: {
      title: 'Example Fetch Api Update'
    }
  },
  RouteState: {
    screen: ExampleState,
    navigationOptions: {
      title: 'Example State'
    }
  },
  RouteProps: {
    screen: ExampleProps,
    navigationOptions: {
      title: 'Example Props'
    }
  },
  RouteFlex: {
    screen: ExampleFlex,
    navigationOptions: {
      title: 'Example Flex'
    }
  },
  RouteNativeBase: {
    screen: ExampleNativeBase,
    navigationOptions: {
      title: 'Example Native Base'
    }
  },
  RouteLifecycle: {
    screen: ExampleLifecycle,
    navigationOptions: {
      title: 'Example Lifecycle',
      headerRight: (
        <Button primary>
          <Text>More</Text>
        </Button>
      )
    }
  }
}, {
  initialRouteName: 'RouteFetchApi'
});

export default App;
