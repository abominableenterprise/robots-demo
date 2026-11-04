# Robot Roll Call

A tiny demo app that The Robots, an AI bot platform, edits live: ask for a change, get a pull request, an AI review, and an automatic merge.

**[Meet the robots →](https://abominableenterprise.github.io/robots-demo/)**

## Try it locally

Open `index.html` in your browser. No install, server, or build step needed.
Pick a robot and press **Say hi** to get a wave and a greeting.
The page follows your system's light or dark appearance.

## Make a change

- `robots.js` holds the crew data, shared through `globalThis.robotRollCall`
  so it works even when opening the page directly from disk.
- `app.js` creates the cards and handles greetings.
- `style.css` sets the colors, layout, and wave animation.

To add a friend, add a robot to `robots.js` with a name, job, greeting,
and one of the existing colors: `mint`, `peach`, `lilac`, or `yellow`.

## Run the tests

With a current Node.js version installed:

```sh
npm test
```

Or run `node --test` directly. There are no dependencies to install.

## License

[MIT](LICENSE) © Abominable Enterprise LLC.
