# Quick Todo App

Me learning lit-element. I followed the lit-element PWA tutorial by [Vaadin](https://vaadin.com/learn/tutorials/lit-element) but didn't use vaadin components, instead I build my own, I found that better for more control over the behaviour but also for understanding and learning.

# Requirements
- **`nodeJS`**
- **`npm`**
- [**`lit-element`**](https://lit-element.polymer-project.org/) [npm-link](https://www.npmjs.com/package/lit-element)
- [**`firebase`**](https://firebase.google.com/docs/cli) (only for hosting)

### Install
```bash
npm install
```

### Development
```bash
npm run dev # runs webpack dev server on port 8080
```

### Production
App is live: https://dcts-todo.web.app/ (hosted by firebase hosting)
```bash
# deploy in 2 steps
npm run prod    # bundle and build production files with webpack
firebase deploy # deploys content of /dist folder to firebase

# script (runs both steps)
npm run deploy
```

# To Do List (for the todo list app)
- [ ] a lot... Goal is to launch a PWA quick todo app that stores todos on the phone locally even without internet connection. No login, no signup.
- [ ] OR: fil out todo list online on your desktop device, then scan QR code to move the list to your phone.
