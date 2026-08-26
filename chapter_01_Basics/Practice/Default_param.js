function retry(testName, maxRetries = 3, delay = 1000) {
  console.log(`Retrying ${testName} up to $(maxRetries} times,${delay}ms`);
}

retry("Login test", 5, 2000);
retry("login test");
