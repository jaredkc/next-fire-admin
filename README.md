# Next.js + Firebase

This is an example project using Next.js and Firebase. It is built to be used as an admin-style application regarding the UI and who can access it.

## Firebase base feature utilized:

- [x] Hosting
- [ ] Authentication
- [ ] Functions
- [ ] Github workflows to automatic builds and deploys

These features can be set up by simply using the Firebase CLI. Run `firebase init` and follow the prompts to setup these features and any others needed.

## Hosting Next.js on Firebase

Firebase annouced support for hosting dynamic frameworks on October 19, 2022. At this time it is an experimental feature than you need to enable. Learn more [here](https://firebase.google.com/docs/hosting/frameworks-overview) or read the [blog post announcement](https://firebase.blog/posts/2022/10/whats-new-at-Firebase-Summit-2022).

```sh
firebase experiments:enable webframeworks
```

---

## Next.js + Tailwind CSS Example + TypeScript

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

### How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app -ts --example with-tailwindcss with-tailwindcss-app
```
