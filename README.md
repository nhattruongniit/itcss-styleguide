# Create style guide css with new CSS Architecture

This project create style guide template. Integrate new CSS Architecture

### Quick start

```bash
# install node js
$ install node.js lasted version

# install the dependencies with npm
$ npm install 
$ npm install gulp

# start the server
$ npm run serve
```

# Getting Started

### We use this below sytanx in sass file:
```
Example: ./sass/_components.buttuons.scss file.

/*
@styleguide

@title Button

Use the button classes on and `<a>`, `<button>`, `<input>` elements.

<button class="button button--large button--red">Red Button</button>

    <button class="button button--large button--red">Red Button</button>

<button class="button button--large button--blue">Red Button</button>

    <button class="button button--large button--blue">Red Button</button>
*/
```

### Step to step:

* Edit any .scss files on the sass folder.
* Save it.
* View output of guide line at  `dist/index.html` folder.

## Technologies apply for this project: 
* [SASS](http://sass-lang.com/)
* [Gulp](https://gulpjs.com/)
* [BEM + ITCSS](https://codepen.io/clindsey/post/bem-and-itcss-for-css-architecture)
* [PostCSS](https://github.com/morishitter/postcss-style-guide)

## Gulp commands:

- `gulp sass`: Process sass files
- `gulp build`: Build the guideline
- `gulp serve`: Run web server to view output of css and guideline result
- `gulp`: Default command, will run `sass` and `build` commands.