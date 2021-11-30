import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Pagination from "./Pagination";
import ShallowRenderer from 'react-test-renderer/shallow';
// import {shallow} from enzyme;
// import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.creatElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Pagination/>, container);
  });
  expect(container.textContent).toBe("PREVIOUSNEXT");

});
