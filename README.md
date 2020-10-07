# canvas-dancefloor-generator

## Task

[Source](https://github.com/vv1n3k/CanvasAPI-task-dancefloor)

### Requirements

The flow of app initialization and view rendering should be as follow: 
- App bootstraping 
- Async operation to fetch the state (eg. You can simulate API call to recreate canvas with config) 
- UI and Canvas 
 
### Examples addons

- Change square colours on document event like mouseover or onclick
- Prepare simple API to recreate canvas based on provided config (rows and columns quantity)
- You can prepare transform animation


## Installation

```bash
git clone git@github.com:kzadurska/canvas-dancefloor-generator.git
cd canvas-dancefloor-generator
npm ci
```

## Development

* `npm start`
The app will be available at http://0.0.0.0:8080/

## Contributing
### Code quality
#### Manual

* To lint files run `npm run lint`
* To format code run `npm run prettier`

Both accept `:fix` parameter that'll try to automatically fix whatever is possible.

##### Editor

I recommend to set up your code editor of choice to prettify and lint files `on type` or `on save`.

#### Git hooks
I have two git hooks set up to lint and test files

* `Pre-commit` - run prettier and eslint on files staged for commit, add modified/fixed files to commit
* `Pre-push` - run prettier, eslint and jest on all files. Push will fail if any of these fail.

## Deployment
Run `npm run deploy` and go to https://kzadurska.github.io/canvas-dancefloor-generator/