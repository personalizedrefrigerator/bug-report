
# `insertText` plugin API bug
## Issue demonstrated
When calling `await joplin.commands.execute('insertText', '![](:/some-svg-image-resource-id)');` and the rich text editor is open, content similar to
```html
<img src="data:;base64,
		<svg width=" 1700"="" height="1536" xmlns="http://www.w3.org/2000/svg">  " />
```
is added to the note. The `insertText` command inserts the markdown as expected when the markdown editor is open.

## Using this test plugin
1. After cloning this repository, switch to the `joplin-image-inserttext-plugin-bug` branch and run `npm install`.
2. Add the directory containing this repository to the list of development plugins (under "settings > plugins > advanced").
3. Restart Joplin
4. Open the command palette (ctrl+shift+P) search for `insertText with an SVG image resource` and run it in both the rich text and markdown editors.
5. Observe the difference in behavior.


---

# Joplin Plugin

This is a template to create a new Joplin plugin.

The main two files you will want to look at are:

- `/src/index.ts`, which contains the entry point for the plugin source code.
- `/src/manifest.json`, which is the plugin manifest. It contains information such as the plugin a name, version, etc.

## Building the plugin

The plugin is built using Webpack, which creates the compiled code in `/dist`. A JPL archive will also be created at the root, which can use to distribute the plugin.

To build the plugin, simply run `npm run dist`.

The project is setup to use TypeScript, although you can change the configuration to use plain JavaScript.

## Updating the plugin framework

To update the plugin framework, run `npm run update`.

In general this command tries to do the right thing - in particular it's going to merge the changes in package.json and .gitignore instead of overwriting. It will also leave "/src" as well as README.md untouched.

The file that may cause problem is "webpack.config.js" because it's going to be overwritten. For that reason, if you want to change it, consider creating a separate JavaScript file and include it in webpack.config.js. That way, when you update, you only have to restore the line that include your file.
