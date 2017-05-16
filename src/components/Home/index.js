import Banner from './banner';
import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onLoad: (tab, payload) =>
      dispatch({ type: 'HOME_PAGE_LOADED', tab, payload}),
});

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ? agent.Articles.feed() : agent.Articles.all();

    this.props.onLoad(tab, articlesPromise);
    console.log(tab, 'Component will Mount from Home. Articles shouldt load');
  }

  render() {
    return (
        <div className="home-page">

          <Banner appName={this.props.appName} />

          <div className="container page">
            <div className="row">
              <MainView />

              <div className="col-md-3">
                <div className="sidebar">

                  <p>Popular Tags</p>

                </div>
              </div>
            </div>
          </div>

        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);