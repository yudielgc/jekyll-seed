# jekyll-seed #

Using [Jekyll](https://jekyllrb.com/) for creating static websites fast, grunt for automate the linting and unit testing of JavaScript, as well as minifying it along with css files, and deployment scripts.  

## Requirements ##

- `Ruby` (including development headers, v1.9.3 or above for Jekyll 2 and v2 or above for Jekyll 3)
- `RubyGems`
- `NodeJS`, or another `JavaScript` runtime (`Jekyll 2` and earlier, for `CoffeeScript` support).
- `Python 2.7` (for `Jekyll 2` and earlier)

Installation: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

## Getting Started ##

- Clone git repository 
- Run `npm install`
- Run `npm install grunt-cli -g` to install grunt globally and register it to PATH variable.

### Install ###
- `gem install jekyll`
- `jekyll new my-seed-website`
- `cd my-seed-website`
- `jekyll serve`

### Build and package ###

- Run `grunt` to test and compile. 
- Run `grunt package` to create the packages for all the different environments. 
- In powershell, navigate to `./scripts`. 

### Deployment ###
work in progress...

### Uninstall ###
work in progress...