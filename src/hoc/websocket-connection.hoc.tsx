import * as React from 'react';
import { connect } from 'react-redux';
import { wsConnect } from '../store';

class WebsocketConnection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, host } = this.props;
    if (dispatch) {
      dispatch(wsConnect(host))
    }
  }


  render() { 
    return (
      <>
        {this.props.children}
      </>
    );
  }
}
 
export default connect()(WebsocketConnection);
