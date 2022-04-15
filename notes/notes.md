# Notes

## Asciinema

### [Installation](https://asciinema.org/docs/installation)

Ubuntu
```
sudo apt-add-repository ppa:zanchey/asciinema
sudo apt-get update
sudo apt-get install asciinema
```

### Usage

```sh
# start recording
asciinema rec

# To end recording
ctrl + D
# then <enter> or ctrl + c to save locally

# play recording
asciinema play /tmp/tmp7vlbo44b-ascii.cast
```

### Authenticate and Upload

You need to create an account on `https://asciinema.org/`.

All uploads are private by default.

```
asciinema auth
asciinema upload /tmp/tmpth73puac-ascii.cast
```

### Convert to SVG

```sh
npm install -g svg-term-cli
# id is the id generated for the cast after upload
svg-term --cast <id> --out why-swc.svg
```

## Eslint

[How to use Prettier with ESLint](https://www.robinwieruch.de/prettier-eslint/)

[How to make ESLint work with Prettier avoiding conflicts and problems](https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi)

[Integrating with Linters · Prettier](https://prettier.io/docs/en/integrating-with-linters.html)

[What is linting and how can it save you time?](https://www.freecodecamp.org/news/what-is-linting-and-how-can-it-save-you-time/)

[Linting best practices](https://webapp.io/blog/linting-best-practices/)

[Compare the Top 3 Style Guides and Set Them Up With ESLint](https://betterprogramming.pub/comparing-the-top-three-style-guides-and-setting-them-up-with-eslint-98ea0d2fc5b7)

```sh
npm i -D eslint
npm init @eslint/config
npm i -D prettier
npm i -D eslint-plugin-prettier
npm i -D eslint-config-prettier
```

## JsonPlaceholder

[{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

[Mockend](https://mockend.com/)

## .npmrc

`~/.npmrc`
```
--init-author-name=Alexander R. Torrijos
--init-author-email=artorrijos@gmail.com
--init-author-url=https://stormwild.github.io/
--init-license=MIT
```

## Webpack

```
npm i -D webpack webpack-cli
npm i -D webpack-dev-server
npm i -D html-loader css-loader style-loader swc-loader
npm i -D html-webpack-plugin
```