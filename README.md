# shouldideploy.today

This project is a parody of [shouldideploy.today](https://shouldideploy.today).
Also I've used this to practice deploying an website, as I got rusted with the years.

## Getting started

* Run:
    * `npm i` — install deps.
    * `npm run dev` start dev server
    * `now dev` if you need local serveless function (requires now)

* Build:
    * `npm run build` build the static next.js website into the `out` folder.

* Deploy with 'firebase' (you'll need to have a project or create a new one):
    * Install firebase
    * Make sure you have run the build command and there is an `out` folder.
    * Run `firebase init` command:
        * Select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys` option.
        * When promted with `What do you want to use as your public directory?` answer with `out`.
        * Don't let Firebase overrite your files.
    * Run `firebase deploy` command.


## Credits
Favicon created by [Amanda Hua](https://thenounproject.com/icon/quit-5562075/)