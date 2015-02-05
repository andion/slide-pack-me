# SlidePack-Me 

An oldstyle bookmarklet to render any [slidepack](http://trabe.github.io/slide-pack) markdown on your browser as a presentation.

## Usage

Just drag this to your bookmarks bar or create a new bookmark to 
```
 javascript:<the contents of slide-pack-me.min.js>
```

## Work in progress

This is a work in progress and barely a prototype. 

### It only works
* If you are viewing a rawgit.com markdown slidepack presentation.
  * Loading javascript from different *'raw'* sites on a bookmarklet raises "Content-Security-Policy" errors.
  * I'm thinking about 2 possible solutions here:
    * Load the scripts from a copy on the same (of the three most used) raw server.
    * Always use rawgit.com and depending on it (<-probably this should do).
      * To do this just redirect first to rawgit and then execute the script.
* In Chrome. As FireFox tries to download the md file (as chrome should do!).
  * Solution: dunno... maybe avoid using a bookmarklet and start using a site?

### TO-DO (apart from bugs)

* Scrap the md file searching for tags. Use as slide-pack container the appropiate tag and avoid errors :)
* Make a script that generates a /dist/bookmarklet or something instead of a *"hand-made"* minified version.

### Known Bugs

1. It does not load highlightjs for some reason

## Contributing

Just don't lose your time and contribute to the wonderful [slidepack](http://trabe.github.io/slide-pack/) instead



