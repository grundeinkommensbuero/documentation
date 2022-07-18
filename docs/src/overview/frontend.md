# Frontend

## Frontend Info

### Color schemes
The file style/colorSchemes.module.less contains css classes for our color schemes. Those can then be used as a mixin inside stylesheets or as a class on its own in html. This way you can set and reuse the colors for any component. Ideally the css variables and colors don't need to be overwritten. The color scheme of the Section component can be set by using the color prop. By default it is white. If the Section is defined in contentful (e.g. Section with Components) you can set the color there. 


### SVG colors with svgr

The SVGR Library automatically convertrs svg files into React components. It is configured as file loader, so you only need to import it like below.

Find the configuration in the next config file. For switching colors, there is a rule, that in all svgs imported with the svgr-loader "#000" will be replaced with what is passed as the prop color.

Usage:
1. Add a static .svg file and change e.g. the "fill" attribute you want to edit to fill="#000".
2. Import svg and use as Component like this:
```ts
import SomeComponent from './path-to.svg';

// ... inside the Component:
return <SomeComponent color="yellow" />

// "yellow" will replace the "#000" in the svg file
```

More replacments can be configured in the next.config.js, but I found it to be a bit tricky to figue out strings that work well. I had the best results when using a hex color string with '' around the key, like this: 
https://github.com/grundeinkommensbuero/next-prototype/blob/a8b64a57089267622261d9e7a85f9d30a06fd297/next.config.js#L32