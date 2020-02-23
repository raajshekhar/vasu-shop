import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUpdatedRoute } from './containers/common/action'
import { getCurrentBrand } from './containers/common/reducer';

const App = lazy(() => import("./App.js"));
const Sidebar = lazy(()=>import("./components/Sidebar/Sidebar"));
const Footer = lazy(()=>import("./components/Footer/Footer"));

class MainRoutes extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentBrand: ''
    }
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (state.currentBrand !== nextProps.location) {
      return {...state, currentBrand: nextProps.location}
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.location !== prevProps.location) this.props.setUpdatedRoute(this.props.location.pathname);
  }

  render() {
    const { currentBrand } = this.state;
    return (
      <section id="main-wrapper">
        <Suspense fallback={<div>Loading... </div>}><Sidebar currentBrand={currentBrand} /></Suspense>
        <article id="vertical-vertical-view">
            <Suspense fallback={<div>Loading... </div>}>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/mobile" component={()=><div>Mobile</div>} />
              <Route exact path="/chai-boy" component={()=><div>Chai Boy</div>} />
            </Switch>
          </Suspense>
        </article>
        <Suspense fallback={<div>Loading... </div>}><Footer /></Suspense>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setUpdatedRoute
}, dispatch);

const mapStateToProps = state => ({
  getCurrentBrand: getCurrentBrand(state)
});

MainRoutes.propTypes = {
  setUpdatedRoute: PropTypes.func.isRequired,
  getCurrentBrand: PropTypes.string.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainRoutes));
