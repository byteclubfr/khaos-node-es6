"use strict";

export default function (who = "world") {
  setTimeout(() => console.log("Hello, %s", who));
};
