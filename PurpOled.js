function premiumCheck() {
  var premUsers = ["634d9def73acb4401e1b86ea" /*Siri*/, "635052d4d4bcb701744b0a7e" /*ByteLazer*/, "634588e61ef4e51aa212c24f"/*Ghost*/, "63424b22cedbe6dc1bf62bf1" /*pinkkix*/, "6391ff0de9c431e1fea5448f" /*KlA*/, "63517ec9a4a8f1b9b2872501" /*PuupetBoy*/, "63536df87c9dbb50fc24aa91" /*Fwankwo*/]
    if ( premUsers.includes(localStorage.getItem("userID") /* account._id */) ) {
      return true;
  }
return false
}

      function premiumDisplay(theme) {
        if (premiumCheck() == true) {
        switch (theme) {
          case "PurpOled":
            setCSSVar("--leftSideBarColor", "#eb34c0");
            setCSSVar("--pageColor", "#5321b0");
            setCSSVar("--contentColor", "#000000");
            setCSSVar("--contentColor2", "#000000");
            setCSSVar("--contentColor3", "#000000");
            setCSSVar("--borderColor", "#5321b0");
            setCSSVar("--fontColor", "#ffffff"); 
            setCSSVar("--themeColor", "#5321b0");
          break;
  }
}}
 
