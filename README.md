# Tenstars Retention Widget Examples

Simplified app examples that show how to integrate the Tentstars Retention Widget into your app in several ways based on your preferred stack.

**Need more examples?**

Request them at [francesc@tenstars.co](mailto:francesc@tenstars.co)

## Plain HTML + Javascript Example

This is the simplest possible setup. The only thing that's required is to pass the subscription id of your customer into the widget's triggering button.

In this example we read the subscription id from an input that can be changed.

- [SEE CODE](./html+javascript/index.html)

Or clone it and run it!

```
git clone git@github.com:tenstarsapp/retention-examples.git
```

The open `retention-examples/html+javascript/index.html` in your favorite browser.

## React Example

This example uses a React wrapper around the standard Tenstars snippet of code used in the plain HTML+Javascirpt Example.

[SEE CODE](./react/CancelSubscriptionButton.jsx)

Or clone it and run it!

```
git clone git@github.com:tenstarsapp/retention-examples.git
cd retention-examples/react
yarn install && yarn dev
```

And then open [http://localhost:1234](http://localhost:1234)
