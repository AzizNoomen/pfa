module.exports = function(req, res, next) {
    const { email, name, password, jury, superviseur,admin} = req.body;
  
    function validEmail(userEmail) { 
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
    if (req.path === "/sign-up") {
      console.log(!email.length);
      if (![name,email, password].every(Boolean)) {
        return res.json("Missing Credentials"); 
      } else if (!validEmail(email)) { 
        return res.json("Invalid Email");
      }
    } else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.json("Invalid Email"); 
      }
    }
  
    next();
};