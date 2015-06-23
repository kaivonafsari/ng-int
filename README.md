# ng-int
You found the repo.  Now try to install it.  
We hope our directions are good.  Don't forget to read the rest of the readme.
##getting started
1. Prerequisites
  1. Make sure you have registered your SSH keys with github. Here is the [link on how to set this up]
     (https://help.github.com/articles/generating-ssh-keys/)
  1. Install [Homebrew](http://brew.sh/).
    * You can first veify you have it in the console ```$ brew```
    * to install brew ```$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
    * once installed, run ```$ brew doctor``` and ```$ brew update```. This will check that all is good and bring down a fresh catalog of packages

  2. Install [Node.js](http://nodejs.org/) using homebrew with ```$ brew install node```
  3. Install [Bower](http://bower.io/) using homebrew with ```$ brew install bower```
  4. Install [Grunt](http://gruntjs.com/) using npm (Node Package Manager) ```$ npm install -g grunt```. The -g means globally.
2. Make sure you have a code directory in your home folder ```$ cd ~/``` and then ```$ mkdir code```. For easy access in the your finder side bar ```$ open ~/``` then drag the code folder to the sidebar so the line shows up between existing folders and let go.
3. Switch to the code directory and the clone this repo ```git clone git@github.com:lumiata/lumiata-interview.git```
4. Setup a new remote repo where you see fit to store your project on github
5. You should have a new folder in your code folder called AngularSeedProject. Rename this to whatever you want(e.g., fooProject)
6. Switch to this directory and run git remote delete origin ```git remote remove origin```
7. Add your new repo to the origin ```git remote add origin git@github.com:lumiata/lumiata-interview.git``` (NOTE you need to put in the address of the repo you created in step 5.
8. Push up this proejct to your repo ```git push origin```
9. Install the dependencies with ```npm install``` and then ```bower install```
10. Start the app! ```grunt serve```
11. Run unit\e2e tests ```npm test```

##general information
1. We are using the RequireJS AMD.  Even the ES6 files are transpiled into an amd friendly format before running.  
2. If you want to write ES6, your file must follow the format `<myfilename>.es6.js`
3. We are using html2js, which compiles all your html templates into an angular module.  Check `grunt/html2js.js` and the `html2js` docs for more information.
4.  Because of html2js, all html templates must be formatted as `<myfilename>.template.html`.

##algorithms
1. A working version of Djikstras algorithm is available in `src/algorithms/`.  If you're feeling exceptional, you can also build your own.

##unit testing
1. We are using [Jasmine](http://jasmine.github.io/) for unit testing. Your tests belong in ```test\unit\<MODULE_NAME>\*Spec.js```. They must follow the ```*Spec.js naming scheme```
