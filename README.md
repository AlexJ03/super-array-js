# Installation
```sh
npm i super-array-js
```

# Usage
### maxNum() and minNum()
```sh
import { maxNum, minNum } from "super-array-js/lib";

const arr = [1, 2, 100, -30, 8, 239];

maxNum(arr)  // => 239
minNum(arr)  // => -30
```

### arrayOperation

```sh
import { arrayOperation } from "super-array-js/lib";

const arr = [1, 2, 100, -30, 8, 239];

arrayOperation(arr, "+") // => 320
```

```sh
import { superArray } from "super-array-js/lib";

const arr = [1, 2, 100, -30, 8, 239];
const options = ["reverse"] 

superArray(arr, options) // => [239, 8, -30, 100, 2, 1]
```
> Note: `Options`  can include not only strings but also objects
```sh
import { superArray } from "super-array-js/lib";

const arr = [1, 2, 100, -30, 8, 239];
const options = ["reverse", {filter: (item) => item > 50}, {map: (item) => String(item)}];

superArray(arr, options) // => ["239", "100"]
```
