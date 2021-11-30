import {jest} from '@jest/globals';
import Hoc from './Hoc';
import React, { useState, useEffect } from "react";
import { ReactDOM } from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";




let container = null;
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



// it("renders with or without a name", () => {
//   act(() => {
//     render(<Hoc/>, container);
//   });
//   expect(container.textContent).toBe("Hey, stranger");

//   act(() => {
//     render(<Hello name="Jenny" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Jenny!");

//   act(() => {
//     render(<Hello name="Margaret" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Margaret!");
// });



