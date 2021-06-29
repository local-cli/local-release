#!/usr/bin/env node
const main = require("../index.js")
main().catch((err) => {
  console.error(err);
});