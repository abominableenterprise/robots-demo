// Export through a shared namespace so index.html also works via file://.
// Add a crew member here; the page creates their card automatically.
globalThis.robotRollCall = {
  robots: [
    { name: "Pip", job: "Grows good ideas (and tiny plants).", color: "mint", greeting: "Hey, bud! Let's grow something good." },
    { name: "Bolt", job: "Fixes the little things that matter.", color: "peach", greeting: "High five! You've made my circuits smile." },
    { name: "Echo", job: "Finds the perfect song for your day.", color: "lilac", greeting: "Hello, hello! You're music to my ears." },
    { name: "Crumb", job: "Keeps the cookie jar well stocked.", color: "yellow", greeting: "Hi, friend! Saved you the last cookie." },
    { name: "Sparky", job: "Fixes the other robots and keeps the crew rolling.", color: "yellow", greeting: "Hi, friend! I'll have you fixed up in a spark." }
  ]
};
