# Make @vercel/og work on cloudflare workers

The [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) provided by Vercel is intended to be used on Vercel Edge Functions, so it cannot be run on Cloudflare Workers as is.

However, both Vercel Edge Functions and Cloudflare Workers are edge runtimes based on V8 isolate and should be able to run the same code.  
So I patched @vercel/og to work with Cloudflare Worker.

## Install and start dev server

Install packages.
```bash
$ yarn install
```

Start dev server.
```bash
$ yarn dev
```

Access http://127.0.0.1:8787

![](./docs/hello_world.png)


http://127.0.0.1:8787/?t=Your+title+with+emoji+%F0%9F%98%84__breaks+line+by+double+underscore

![](./docs/sample.png)

## Development

You can use the @vercel/og library as is. Please refer to the official documentation for detailed usage.

https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation#usage

## Publish

```bash
$ yarn deploy
```

