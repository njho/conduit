import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import Home from './components/Home';

const mapStateToProps = state => ({
    appName: state.common.appName,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
    onRedirect: () =>
    dispatch({type: 'REDIRECT'})
})

class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.redirectTo) {
                this.context.router.replace(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        return (
            <div>
                <Header appName={this.props.appName}/>
                {this.props.children}
            </div>
        );
    }
}

App.contextTypes={
    router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);