# Layers
Layers create separate versions of the API, designed to create a continuous pathway that gradually peels back layers of abstraction.

# Layer 0
Layer 0 is the layer the library itself is written in. The HTML5 canvas and 2d rendering context are interacted with directly via their APIs.

# Layer 1
Layer 1 is the default layer exported by the library, and historically the only layer. The coder interacts via an object-oriented API, using the `new` keyword and method and property accesses on objects.

# Layer 2
Layer 2 removes object-oriented aspects, but still uses an imperative coding style where a coder creates objects. Property accesses are replaced with global getter methods.

# Layer 3
Layer 3 creates programs in a declarative style rather than an imperative one, with a built-in `draw` function that loops. 