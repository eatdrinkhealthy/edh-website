import React from "react";
import PropTypes from "prop-types";
import { createStore, combineReducers } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({ form: formReducer });
const store = createStore(rootReducer);

const Provider = ({ story }) => <ReduxProvider store={store}>{story}</ReduxProvider>;

Provider.propTypes = {
  story: PropTypes.element.isRequired,
};

export default Provider;
