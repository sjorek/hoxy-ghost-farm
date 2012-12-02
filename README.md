hoxy-ghost-farm
===============

# Overview

The hoxy-ghost-farm provides a hoxy-wrapper and a hoxy-plugin. Hoxy is a web-hacking proxy for [node.js](http://nodejs.org/), intended for use by web developers. Using hoxy, you can act as a "man in the middle" and alter HTTP requests and responses as they flow over the network, based on a set of conditional rules. Hoxy otherwise behaves like a standalone proxy server. Hoxy supplements debuggers like Firebug, which let you manipulate the client runtime but not the underlying HTTP conversation.

## Installation

npm install hoxy-ghost-farm

## Usage

ghost-farm --farm=www.example.com --port=8080 --rules=path/to/proxy-rules.txt
