# Minecraft Versions

A complete list of all Minecraft versions and their metadata, for Java and Bedrock, releases and snapshots.

## Install

Minecraft-Versions is available [on npm](https://npmjs.com/package/minecraft-vers).

Install locally using `npm install minecraft-vers` to use in a Node project.

Install globally using `npm install -g minecraft-vers` to use the CLI.

## Usage

Node:

```js
const versionData = require('minecraft-vers') // old import syntax
/*or*/
import versionData from 'minecraft-vers' // modern import syntax
```

Command-line:

```cmd
mcdata [<edition>] [<phase>] [<version>] [<n>]
```

### Output format

```jsonc
{
  "<edition>": { // Java | Bedrock | ...
    "<phase>":  { // Release | Beta | ....
      "<version>": [ // 1.17 | 1.16.5 | ...
        {
          "type": "<type>", // release | snapshot
          "parent": "<parent version>|null",
          "date": "<timestamp>",
        }
      ]
    }
  }
}
```

### Examples

```js
const versionData = require('minecraft-vers')

versionData.Java.Release['1.17'][0]
// { "type": "release", "parent": null, "date": "2021-06-08T00:00:00.000Z" }

versionData.Java.Release['20w20a'][0]
// { "type": "snapshot", "parent": "1.16", "date": "2020-05-13T00:00:00.000Z" }

versionData.Java.Release['1.6.3'][1] // multiple if reuploaded
// { "name": "1.6.3", "type": "snapshot", "date": "2013-09-17T00:00:00.000Z" }
```
