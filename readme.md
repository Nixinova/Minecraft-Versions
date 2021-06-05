# Minecraft Versions

A complete list of all Minecraft versions, Java and Bedrock, release and snapshot.

## Output
```jsonc
{
  "<edition>": { // Java | Bedrock | ...
    "<phase>":  { // Release | Beta | ....
      "<version>": { // 1.17 | 1.16.5 | ...
        "type": "<type>", // release | snapshot | ...
        "parent": "<parent version>|null",
        "date": "<timestamp>",
      }
    }
  }
}
```

### Example
```jsonc
{
  "Java": {
    "Release": {
      "1.17": { "type": "release", "parent": null, "date": "2021-06-08T00:00:00.000Z" },
      "1.17-rc1": { "type": "release", "parent": null, "date": "2021-06-04T00:00:00.000Z" }
      // ... other versions
    },
    "Beta": {
      "1.8.1": { "type": "release", "parent": null, "date": "2021-09-15T00:00:00.000Z" },
      // ... other versions
    }
    // ... other phases
  }
  // ... other editions
}
```
