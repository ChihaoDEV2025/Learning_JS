"use strict";

class AccessController {
  signUp = async (req, res, next) => {
    try {
      console.log("[P]::signUp::", req.body);

      /* 200: ok
            201: created
        */

      return res.status(201).json({
        code: "2001", //dev definition number and depend on each team
        metadata: { userid: 1 },
      });
    } catch (e) {
      next(e);
    }
  };
}

module.exports = new AccessController();
