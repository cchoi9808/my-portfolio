// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomQuote() {
  const quotes =
      ['Do or do not there is no try', 'I know', 'My the Force be with you', 'Never tell me the odds'];

  // Pick a random greeting.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('greeting-container');
  quoteContainer.innerText = quote;
}

/**
* Fetches Hello Chelsea from the server and adds it to the DOM
 */
async function gettingRandomGreetingUsingAsyncAwait() {
    const response = await fetch('/data').then(response => response.json()).then(greeting);
    const greeting = await response.text();
    console.log(greeting);
    document.getElementById('testTrialGreeting-container').innerText = greeting;
}
