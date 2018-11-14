# IFA Research - Amerasia

## Table of Contents

* [Setup guide](#setup-guide)
  * [Running the app locally](#running-the-app-locally)
  * [Editing/Writing new code](#editingwriting-new-code)
    * [Folder Structure](#folder-structure)
* [Updating the data on the Map with debug mode](#updating-the-data-on-the-Map-with-debug-mode)
* [Updating other pages](#updating-other-pages)
* [Adding new pages](#adding-new-pages)
  * [Adding new links to the navigation bar](#adding-new-links-to-the-navigation-bar)
* [Building and deploying](#building-and-deploying)
* [Tiling and updating the Map image](#tiling-and-updating-the-map-image)

This project was scaffolded using `create-react-app` (CRA).
Please refer to the [CRA docs](https://github.com/sagar-sm/ifa-amerasia/blob/master/config/README.md) here for additional instructions.

## Setup guide

### Running the app locally

1. [Download and install Node JS v10+](https://nodejs.org/en/) on your machine.

2. Clone or download this repository as a zip file.
    * For cloning, open the Terminal, `cd` into a directory of your choice (in our case the home folder on macOS: `cd ~`) and run <br/>
    `git clone https://github.com/sagar-sm/ifa-amerasia.git`
    * Alternatively you can also download the zip from Github and save it in a location of your choice.
    * For simplicity, this README file assumes that you have cloned or downloaded this 
repository in your home folder at `~/ifa-amerasia/`.

3. Running this app is easy,
    <br>In your terminal:
    * `cd ~/ifa-amerasia`: changes the directory to the location you've downloaded/cloned this repository.
    * `npm install`: reads the list of 3rd party libraries from file `package.json` and downloads them into a folder called `node_modules` 
    * `npm start`: Builds and starts the app at `localhost:3000` on a development server locally.
    * Visit [localhost:3000](localhost:3000) in your browser to see the app running.
    * Hit <kbd>Control + C</kbd> on your Terminal window to stop the development server.
    
### Editing/Writing new code
* It is strongly recommended that you use either [Webstorm](https://www.jetbrains.com/webstorm/) 
or [Visual Studio Code](https://code.visualstudio.com/) to write/edit code in this app.
 
* You can apply for a free education license for Webstorm [here](https://www.jetbrains.com/student/).
Visual Studio Code is free.

### Folder Structure
    
After successfully setting up, your project should look like this:

```
ifa-amerasia/
  README.md
  node_modules/
  package.json
  public/              -> Public assets like images
    index.html
    favicon.ico
  config/
  scripts/
  build/               -> Contains built files to be uploaded to the server
  src/                 -> Contains all your code
    articles/          -> Contains all your headless HTML articles
    components/        -> Contains all the React components
      - NavBar.js      -> Code for navigation bar
      - MapPage.js     -> Code for main Map page/home paeg.
      - MapDebugPage.js-> Code for Debug Mode page
      - AboutPage.js
      - AccessibilityPage.js 
      - CreditsPage.js
      - SampleNewPage.js
    base.css           -> base css file
    data.js            -> file containing all the data points
    App.js         
    index.js
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.
 
## Updating the data on the Map with debug mode

All the data that is displayed on your map is sourced from this file: `src/data.js`.
To update the data on your map, you will need to use the special debug mode page.
It can be found on `localhost:3000/#debug`. Don't forget the `#`.

You can use it to find the coordinates of the new data point you want to add.

Inside the `data.js` file, copy and paste a point as per the comments, 
and edit the contents as per your liking.

To add new HTML articles, you should create an HTML file inside the `/articles` directory.
Within `data.js` you can refer to your newly created file as `require('./articles/asia.html')`.

Please note that the HTML article files need to be headless. 
i.e. without `<html>`, `<head>` or `<body>` tags. Take a look at the included sample articles for examples.


## Updating other pages
* You can directly change the content of `AboutPage.js` or `CreditsPage.js`.
The `return` value of the `render(){...}` function supports all valid HTML (JSX).
* Just make sure that you define classes on your HTML containers with 
the `className` propert instead of `class`.

```diff
- <div class="hello-world">...</div>      // incorrect
+ <div className="hello-world">...</div>  // correct ✅
```

* You can add reusable styles/class names within the base.css file.
* Additionally you can define specific styles as inline styles or by creating css files.
* If you create a new css file called `AboutPage.css` within `src/components` for some specific styles on `AboutPage.js`,
please be sure you import that file in `AboutPage.js` by adding this line at the top of the file
```
import './AboutPage.css'
```

## Adding new pages
* Copy paste an existing page like the `AboutPage.js`. 
* Rename the file to what you want. e.g. `MyNewPage.js`
* Rename the `class` definition, inside the file...
```js
export class MyNewPage exports React.Component {
  ...
}
``` 

### Adding new links to the navigation bar

Add the following for the desktop navigation bar with the other links:
```jsx
<Grid item>
  <Link to={'/my-new-page'} className={classes.navLink}>
    <Typography variant={'button'}>MY NEW PAGE</Typography>
  </Link>
</Grid>
```

Additionally, add the following for the mobile navigation menu with the other links:
```jsx
<Link to={'/my-new-page'} className={classes.navLink}>
  <MenuItem onClick={this.closeNavMenu}>
    <Typography variant={'button'}>MY NEW PAGE</Typography>
  </MenuItem>
</Link>
```

## Building and deploying
Run:
1. `cd ~/ifa-amerasia`  : or a directory location of your choice
2. `npm install`        : download and install all the libraries, if you haven't already
3. `npm run build`      : builds the app for production
4. Copy everything from the `/build` directory on to an FTP server of your choice. 

## Tiling and updating the map image

To tile an image you will have to install `sharp-cli` globally on your machine:<br>
`npm install sharp-cli -g`

This will download and install the [sharp](https://sharp.dimens.io/en/stable/) library on your machine.
You only have to do this **once** and not every time you want to tile an image.

> Note that the image resolution pixel limit for sharp is 268402689 (width * height) pixels. 
This is a high enough resoultion for our map. If the image you are tiling is too large you might have to resize
so that image `width * height` is less than 268402689. You can do so using Photoshop, Preview or 
through the command line with `imagemagick`

`magick convert -resize 84% out.jpg out_small.jpg`

### Tile it!
To tile the image, 
1. `cd /directory/containing/your/large/image/`
2. `sharp tile 512 -i ImageName.jpg -o ./vopel`.
3. Copy the `/vopel` directory and the `vopel.dzi` generated by this command,
and paste it into the `public/map` folder of your app. 
