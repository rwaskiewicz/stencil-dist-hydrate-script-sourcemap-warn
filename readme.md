## Overview

This repository demonstrates a bug in Stencil v3.2.1 where using the
`dist-hydrate-script` output target results in the following warning
when building the project:

```
[ WARN  ]  Bundling Warning SOURCEMAP_ERROR
           Error when using sourcemap for reporting an error: Can't resolve original location of error.
```

## Reproducing with this Repo
1. Clone the repository locally
2. `npm ci`
3. `npm run build`
4. Observe the following output:
```
> dist-hydrate-script-sourcemap-warn@0.0.1 build
> stencil build --docs

[58:06.7]  @stencil/core
[58:06.8]  v3.2.1 🎙
[58:07.6]  build, dist-hydrate-script-sourcemap-warn, prod mode, started ...
[58:07.6]  transpile started ...
[58:08.6]  transpile finished in 938 ms
[58:08.6]  generate custom elements + source maps started ...
[58:08.6]  generate hydrate app started ...
[58:08.9]  generate custom elements + source maps finished in 377 ms
[58:08.9]  generate hydrate app finished in 378 ms

[ WARN  ]  Bundling Warning SOURCEMAP_ERROR
           Error when using sourcemap for reporting an error: Can't resolve original location of error.

[58:08.9]  build finished in 1.33 s
```
