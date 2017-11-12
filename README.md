Redux Clipboard Copy
=============

Clippboard copy [middleware](http://redux.js.org/docs/advanced/Middleware.html) for Redux using [`document.execCommand`](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand).

`document.execCommand` is [not yet supported in all browsers](https://caniuse.com/#feat=document-execcommand), you may need some sort of polifyll or a different lib may work for you.

```js
npm install redux-clipboard-copy --save 
yarn add redux-clipboard-copy --save
```

## Note

**If you use Redux Clipboard copy in CommonJS environment, don’t forget to add `.default` to your import**

```js
var reduxClipboardCopy = require('redux-clipboard-copy').default
```

If you used ES modules, you’re already all good:

```js
import reduxClipboardCopy from 'redux-clipboard-copy';
```

We also support a UMD build:

```js
var reduxClipboardCopy = window.reduxClipboardCopy.default
```

It also requires `.default` at the end.

## Setup

You need to add into your store [enhancers](https://github.com/reactjs/redux/blob/master/docs/api/createStore.md#createstorereducer-preloadedstate-enhancer)

```js
import { createStore, applyMiddleware } from 'redux';
import reduxClipboardCopy from 'redux-clipboard-copy';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(reduxClipboardCopy)
);
```

With this setup you can just dispatch `copy` action as:

```js
import { copy } from 'redux-clipboard-copy';

const value = 'value to be copied!';

dispatch(
  copy({
    payload: { value }
  })
)
```

## API

### `copy`

```js
import { copy } from 'redux-clipboard-copy';

// ...
dispatch(
  copy({
    payload: {
      value: 'to be copied'
    }
  })
);
```

### `failed`

Triggered once `document.execCommand` fails.

```js
import { failed } from 'redux-clipboard-copy';

// ...
dispatch(failed());
```

### `success`

Triggered once `document.execCommand` succeed.

```js
import { success } from 'redux-clipboard-copy';

// ...
dispatch(success());
```

### `COPY`

Action type to handle copy start into reducers

```js
import { COPY } from 'redux-clipboard-copy';

// ...

function reducer(state = {}, action) {
  switch(action.type) {
    case COPY:
      // do something once copy starts
      return state;

    default:
      return state;
  }
}

```

### `SUCCESS`

Action type to handle copy success into reducers

```js
import { SUCCESS } from 'redux-clipboard-copy';

// ...

function reducer(state = {}, action) {
  switch(action.type) {
    case SUCCESS:
      // do something once copy succeeded.
      return state;

    default:
      return state;
  }
}

```

### `FAILED`

Action type to handle copy failure into reducers

```js
import { failure } from 'redux-clipboard-copy';

// ...

function reducer(state = {}, action) {
  switch(action.type) {
    case FAILED:
      // do something once copy fails
      return state;

    default:
      return state;
  }
}

```

## License

MIT
