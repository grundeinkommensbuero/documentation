# Frontend

## Frontend Info

### Color schemes
The file style/colorSchemes.module.less contains css classes for our color schemes. Those can then be used as a mixin inside stylesheets or as a class on its own in html. This way you can set and reuse the colors for any component. Ideally the css variables and colors don't need to be overwritten. The color scheme of the Section component can be set by using the color prop. By default it is white. If the Section is defined in contentful (e.g. Section with Components) you can set the color there. 
