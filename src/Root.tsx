import * as React from 'react';
import {Provider} from 'react-redux';
import store from './com/ffan/redux/store';
import {CounterContainer} from './com/ffan/components/CounterContainer';

export class Root extends React.Component<{}, void> {

  render(): JSX.Element|any {
    return (
      <Provider store={store}>
        <CounterContainer/>
      </Provider>
    );
  }
}

export default Root;