"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzYzYWZiMzMwMjJjZWE5ZTYxMDY2YzQiLCJpYXQiOjE2Njk0Nzk0NDUsImV4cCI6MTY2OTU2NTg0NX0.NBKKmwe3mHhdKj_sdNdmNe3_aBaazoGUM8xLYbNzRks";
var TOKEN_SECRET = "dfasdjrqwu3409234dfadadfowerq3432frwij23490oi";
var decoded = jwt.decode(token);
console.log(decoded);
