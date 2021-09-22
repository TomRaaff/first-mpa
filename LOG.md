#### Day 1 
created the project, copied it from my template project. Afterwards, I installed 
my library, but ran into build problems immediately. Apparently Rollup wasn't configured
to be able to handle Dependencies, so I had to fix that first. Now, it works and the 
fun can begin.

No. It can't. I seem to run into another weird bug. 
Apparently, rollup doesn't do sharing of node-modules resources. Which means that
every file contains ALL of it's dependencies. That means that dependencies are duplicated
and that means that we have two instances of the componentID variable, therefore: id's will
be overwritten. That means that components will be overwritten whenever a rerender occurs.

Desired solution: configure rollup in such a way that node_modules files are just returned 
in an http request, rather than bundled with the rest of the JS-code.

### Day 2
I decided not to fix the rollup-problem, as it actually isn't a problem. I approached it
wrong. I'm still going to be loading just 1 js-file for every page. Just not for every 
component. Otherwise there will be far too much code duplication, as all of my files would 
use the component code, for example...
So, instead, I'll write one js-file for every page. 

I resumed working on the design system page. First-up: the html.
I thought that implementing the design system would be a bit faster, since the thinking
was already done by the guys from the [Figma video](linktoyoutube here). But it still
takes a while to set up. I'm pretty happy to see where my folder strucure is taking me though.
It looks very comprehensible so far.

### Day 3
I added a component for the colors-part of the designsystem page. It doesn't contain any logic, but it works nicely.
I also improved the styling a lot. Fixed a lot of styling issues and added more parts to the style guid.


### Day 4
Presentation preparation day. Fixed small details.
No presentations...

### Day 5
Built the first draft for thr webshop.
questions:
- how do you handle component rerenders? Answer: avoid them
- how do you share data/state across pages? Answer: localStorage
- how do you add parameters to a pageload?  Answer: url query parameters

TODO: tryout parcel instead of rollup.
Docs: https://parceljs.org/recipes.html
Here's why: https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9

### Day 3453
I'm using Parcel now. Thank god!! It does everything I'd want. And blazingly fast.

### Day 298
learned about BEM. Trying to implement it as well. Notice my css isn't as nice as 
I hoped it would be. It's based on html elements too much, rather than on classes.
It's still okay though.

- implemented a QuantityComponent as two buttons and an input.
- implemented a RatingComponent
- implemented the productListPage
- implemented the DetailsPage.
  routing turned out to be very easy.
- styling took a lot of time though.
- Had to update the library with the deepClone() and mergeObjects()

### 8 sept
The details page is almost done. Today I got into the problem of sharing data across
components and files. communication from child -> parent component is really messy.
So for now I avoid it. 
I've set up a system around localStorage to handle all data that needs to be passed
around. Maybe localstorage is a bit heavy for that though.

### 11 Sept
I've noticed that all pages share a similar set-up. They all need to:
- do spinner stuff
- fetch data
- assign values to the html
- assign click handlers
Doing all of that stuff manually, is kind of messy too. And kind of annoying. So I took
an idea of the set-up of Angular modules and tried to build a set-up function that
should be able to handle the setting up of the page.

Initially, I wanted the fetching of data to be handles by the setup as well,
but that turned out to be impractical. Or I haven't found the right way yet.

### 15 Sept
I've found a solution to one of the communication puzzles. I still needed a way
for child components to speak to their parent components and I've found it.
In their constructors you can now add event listeners that are callable from within
the child component. They aren't actually events, they are just functions that are
passed in as input.

