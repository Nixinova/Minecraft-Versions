# Changelog

The ID attached to each [tagged version](https://github.com/Nixinova/Minecraft-Versions/tags) is the year and week the data was last updated.

Updates that just sync new versions of Minecraft are not given changelog entries.

## 0.4.4
- [CLI] Fixed versions like '1.10' being processed as '1.1'.

## 0.4.3
- [Data] Fixed old Pocket Edition Alpha versions.

## 0.4.2
- [CLI] Fixed a crash occurring when the edition or phase part was spelled incorrectly ([#3](https://github.com/Nixinova/Minecraft-Versions/issues/3)).

## 0.4.1
- [CLI] Added a proper help menu.
- [API] Fixed type definitions.

## 0.4.0
- [Data] Added Bedrock development versions.

## 0.3.1
- [CLI] Fixed command-line usage not working.

## 0.3.0
- [Data] Added Bedrock Release and Alpha full versions.

## 0.2.1
- [Data] Added Combat Test versions.
- [Data] Changed parent version strings to consistently refer to the version ID.
- [Data] Fixed a few incorrect versions.

## 0.2.0
- [CLI] Added help message.
- [CLI] Added `[<param>]` argument to display stored data from a given version such as `type` or `date`.
- [CLI] Added `--full` argument to display the full list of versions when only an edition or phase is given, which is now hidden by default.
- [Data] Added Java Classic, Indev, Infdev, Alpha and Beta versions.
- [CLI] Fixed version index `0` not being parsed.

## 0.1.3
- [CLI] Fixed input case sensitivity.

## 0.1.2
- [API] Fixed import and export not being specified correctly.

## 0.1.1
- [CLI] Changed input to be case-insensitive.
- [CLI] Fixed command-line usage not working

## 0.1.0
- [API] Added API for retrieving versions.
- [CLI] Added command-line interface.
- [Data] Added Java Release versions.
