# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# github

```bash
git init
git add -A
git commit -m 'Added my project'
git remote add origin git@github.com:rigorvdheijden/svelte5-dev-portofolio.git
git push -u -f origin main
```

# Sanity

Local version: http://localhost:3333

Sanity studion is deployed to: https://rigor-svelte5-dev-portofolio.sanity.studio/

> Do not forget to set the CORS origins under the api tab

## Extract type info from schema

Add a new schema file to schemaTypes folder and define the schema.

```bash
nxp sanity schema extract
nxp sanity typegen generate
```

## Deploy sanity studio

Deloy the sanity studio.

```bash
npx sanity deploy
```
