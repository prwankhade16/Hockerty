import React from "react";

function Newarrivals() {
  return (
    <div>
      <ul class="dropdown layer_1 visible">
        <li class="menu_title main  by_product" rel="by_product">
          <span class="title dropdown ">by product</span>
          <ul class="dropdown layer_2">
            <li
              class="menu_collection main  new_arrival_collection"
              rel="new_arrival_collection"
            >
              <a href="/en-us/men/suits/new-arrivals">
                <span class="title final ">New Suits Arrivals</span>
              </a>
            </li>
            <li
              class="menu_collection main  new_arrival_collection"
              rel="new_arrival_collection"
            >
              <a href="/en-us/men/shirts/new-arrivals">
                <span class="title final ">New dress shirt fabrics</span>
              </a>
            </li>
            <li
              class="menu_collection main  new_arrival_collection"
              rel="new_arrival_collection"
            >
              <a href="/en-us/men/blazers/new-arrivals">
                <span class="title final ">Blazers New season</span>
              </a>
            </li>
            <li
              class="menu_collection main  new_arrival_collection"
              rel="new_arrival_collection"
            >
              <a href="/en-us/men/coats/new-coats">
                <span class="title final ">New Coats</span>
              </a>
            </li>
            <li
              class="menu_collection main  new_arrival_collection"
              rel="new_arrival_collection"
            >
              <a href="/en-us/men/suits/wedding-suits">
                <span class="title final ">Wedding Suits 2022</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="menu_title main  lookbook" rel="lookbook">
          <span class="title dropdown ">Lookbook</span>
        </li>
      </ul>
    </div>
  );
}

export default Newarrivals;
