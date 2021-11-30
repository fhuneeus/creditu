import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Table from "./Table";

let container = null;

const player1 = {avatar:"avatar", id:22, nickname:"matt", balance:234};
// const player2 = {avatar:"avatar2", id:25, nickname:"john", balance:99234};
const listPlayers = [player1];
console.log(listPlayers);

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
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
    render(<Table players={listPlayers}/>, container);
  });
  expect(container.textContent).toBe("AVATARIDNICKNAMEBALANCE22matt234");

});
