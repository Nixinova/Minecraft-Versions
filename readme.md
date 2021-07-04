# Minecraft Versions

A complete list of all Minecraft versions and their metadata, for Java and Bedrock, releases and snapshots.

## Install

Minecraft-Versions is available [on npm](https://npmjs.com/package/minecraft-vers).

Install locally using `npm install minecraft-vers@latest` to use in a Node project.

Install globally using `npm install -g minecraft-vers@latest` to use the CLI.

## Usage

Node:

```js
const versionData = require('minecraft-vers') // old import syntax
/*or*/
import versionData from 'minecraft-vers' // modern import syntax
```

Command-line:

```cmd
mcdata [--full] <edition> <phase> [<version>] [<index>] [<param>]
```

### Output format

```jsonc
{
  "<edition>": { // Java | Bedrock | ...
    "<phase>":  { // Release | Beta | ....
      "<version>": [ // 1.17 | 1.16.5-rc1 | ...
        {
          "name": "<in-game name>",
          "type": "release|snapshot",
          "parent": "null|<parent>|{phase:<phase>,version:<parent>}", // null | '1.16.3' | {phase: Release, version: 1.0.0} | ...
          "date": "<timestamp>",
        }
      ]
    }
  }
}
```

### Examples

Command-line:

```cmd
$ mcdata Java Beta 1.8
[{ "name": "Beta 1.8", "type": "release", "parent": null, "date": 2011-09-14 }]
```

Node:

```js
const versionData = require('minecraft-vers')

console.log(versionData.Java.Release['1.17'])
// [{ "name": "1.17", "type": "release", "parent": null, "date": 2021-06-08 }]

console.log(versionData.Java.Beta['1.8-pre1'][0])
// { "name": "Beta 1.8 Pre-release", "type": "snapshot", "parent": "Beta 1.8", "date": 2011-09-08 }

console.log(versionData.Java.Release['1.6.3'][1].type)
// "snapshot"
```

## Data source

[Omniarchive index](https://docs.google.com/spreadsheets/d/1OCxMNQLeZJi4BlKKwHx2OlzktKiLEwFXnmCrSdAFwYQ/htmlview), excluding speculative (yellow-shaded) versions.

## License

This data is released into the public domain and can be used for any purpose.
