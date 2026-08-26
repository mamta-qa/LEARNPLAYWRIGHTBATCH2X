//opem browser
//gotoLoginPage()
//enterCredentials
//ClickonLogin

function openbrowser(callback) {
  console.log("opening the browser");
  setTimeout(function () {
    callback();
  }, 1000);
}

function goToLoginPage(callback) {
  seTimeout(function () {
    ("step2: login page loaded");
    callback();
  }, 1000);
}
