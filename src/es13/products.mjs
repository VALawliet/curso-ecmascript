

import fetch from "node-fecth";

const uwu = await fetch('https://api.escuelajs.co/api/v1/products');

const products = await uwu.json();

export { products };
