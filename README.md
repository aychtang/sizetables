# sizetables
Measure text width using pure functions with no DOM dependency.

The aim of this project is to provide lightweight methods to generate "sizetables" for a given font and set of characters. A sizetable is simply a one to one mapping where the keys are characters, and the values are the estimated width of that character for a given font size and family.

It should be possible to generate and cache sizetables on the fly as they are required. This can lead to a solution for determining optimal text sizing + layouts for any given width.

With a sizetable it becomes simple to make a good estimation of the width of an arbitrary string if we assume it will be rendered using the same font size and family as the table we use was generated with.

I've already applied this concept in some of my work on generated layouts and labelling at Silk, it seems to work well.
