<div align="center">
  <a href="https://gitlab.com/conexasaude/design-system/hero">
    <img src="src/assets/logo-conexa.png" width="300px" />
  </a>
</div>

<br/>

<div align="center">
<h1>Conexa React Boilerplate</h1>
</div>

<br>

Base project to Conexa's React web apps development

<br>

# Dependencies 💁

- [Node LTS](https://nodejs.org/en/download/)
- This project uses [Yarn 2](https://yarnpkg.com/) to package management. Please make sure you are using the [latest version](https://yarnpkg.com/getting-started/install).

<br/>

# Important ❗

This project uses `@conexasaude` packages. If you intend to keep it, read the [authentication section](#auth-)

<br>

# IDE & Extensions 🔧

- [Visual Studio Code](https://code.visualstudio.com/)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

<br>

# Auth 🔑

To use `@conexasaude` packages, you need to authenticate on registry. Follow these steps:

1. Run:

```bash
yarn config set 'npmRegistries["https://gitlab.com/api/v4/packages/npm/"].npmAuthToken' "<your_token>" --home
```

- `<your_token>` is your personal gitlab access token.

  To get your access token:

  - Access: [Personal tokens](https://gitlab.com/profile/personal_access_tokens)
  - Check the items on Scopes
  - Click 'create personal access token'
  - Copy the generated token

<br/>

You should now be able to install the packages in your project.

For more information: [Gitlab registry auth documentation](https://docs.gitlab.com/ee/user/packages/npm_registry/#instance-level-npm-endpoint)

<br>

# Deploy - CI/CD 🚀

To use the provided CI/CD config, declare the following variables on the Gitlab Project Settings:

- BUCKET_HML = `<Aws S3 bucket for the homologation environment>`
- BUCKET_PROD = `<Aws S3 bucket for the production environment>`
- ID_CLOUD_HML = `<Aws Cloudfront id for the homologation environment>`
- ID_CLOUD_PROD = `<Aws Cloudfront id for the production environment>`

For more information: [How to add custom CI/CD variables](https://docs.gitlab.com/ee/ci/variables/#create-a-custom-variable-in-the-ui)

<br/>

# Custom Environment Variables

By default, React Script can read .env files:

- yarn start: .env.local
- yarn start:hml: .env.homolog
- yarn build: .env.production
- yarn build:hml: .env.homolog

Observations:
Keep .env.local ! The file .env is compiled on build, replacing .env.production;

For more information, read the documentation: <br>
(https://create-react-app.dev/docs/adding-custom-environment-variables/)

<br/>

# Scripts 🏃

### Install dependencies

```bash
yarn
```

<!-- ### Run tests and watch for development

```bash
yarn test:dev
```

### Run tests

```bash
yarn test
``` -->

### Compiles and hot-reloads for development

```bash
yarn start
```

### Compiles and minifies for production

```bash
yarn build
```

### Run lint

```bash
yarn lint
```

### Pretty files

```bash
yarn pretty
```
