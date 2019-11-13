# Tech Support Cheat Sheet

Dear various parents, grandparents, co-workers, and other ‘not computer people’.

Save your favourite IT geek some trouble, try to solve your computer problem with the following process.

[https://schalkburger.io/project/support/](https://schalkburger.io/project/support/)

## Requirements

This script requires the following dependencies:

- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/) 4.3.1 

## Initializing the Carousel

You need to initialize the [Bootstrap Carousel](https://getbootstrap.com/docs/4.3/components/carousel/#via-javascript) component to make the Interactive Support function work:

```js
('.carousel').carousel({
    interval: false,
})
```