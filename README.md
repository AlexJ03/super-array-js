# Installation
```sh
npm i super-array-js
```

# Usage
### maxNum() and minNum():
```sh
import { maxNum, minNum } from "super-array-js/lib";

const arr = [1, 2, 100, -30, 8, 239];

maxNum(arr)  // => 239
minNum(arr)  // => -30
```

### arrayOperation:

```sh
import { arrayOperation } from "super-array-js/lib";

const arr = [1, 2, 100, -30, 8, 239];

arrayOperation(arr, "+") // => 320
```

### superArray:
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


### removeDuplicates:

```sh
import { removeDuplicates } from "super-array-js/lib";

const arr = [10, 13, 20, 10, 10, 21, 13];
removeDuplicates(arr); // => [10, 13, 20, 21]
```
### removeDuplicates with params:
```sh
import { removeDuplicates } from "super-array-js/lib";

const arr = ["hello", "HELLO"];
removeDuplicates(arr); // => ["hello", "HELLO"]
removeDuplicates(arr, {i: true}) // =>  ["hello"]
```

### removeType:
```sh
import { removeType } from "super-array-js/lib";

const arr = [1, 2, "3", true, "Hello"];
removeType(arr, "number"); // => ["3", true, "Hello"]
```

### superSort:
```sh
import { superSort } from "super-array-js/lib";

const arr1 = [1, 2, 3];
const arr2 = ["Hello", "Max", "A"];

superSort(arr1, {sort: ">"}); // => [1, 2, 3]
superSort(arr1, {sort: "<"}); // => [3, 2, 1]

superSort(arr2, {sort: ">", value: "length"}) // => ["A", "Max", "Hello"]
```

### superSort in objects:
```sh
import { superSort } from "super-array-js/lib";

const arr2 = [{name: "Alex", age: 17}, {name: "Max", age: 31}];

superSort(arr2, {sort: "<", value: "age"}); // => [{name: "Max", age: 31}, {name: "Alex", age: 17}]

```





















