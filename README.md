ethicalswitch
=============

Getting up and running:
```
brew install node
```
- You might need to add the following line to your .bash_profile or .bashrc, so that npm executables are found.

```
export PATH=$PATH:/usr/local/share/npm/bin
```
- If you did add it, then

```
source .bash_profile
```
- install the angular generator, which will bring in yeoman, grunt and bower.

```
npm install -g generator-angular
```
- install angular-ui with bower

```
bower install
```
- install grunt-cli

```
npm install -g grunt-cli
```
- node install

```
npm install
```
- You should now be able to run all the things.

```
grunt test                        # test your app
grunt serve                       # preview your app
grunt                             # build the application for deployment
```
