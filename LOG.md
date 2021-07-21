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


