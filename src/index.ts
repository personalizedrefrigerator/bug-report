import joplin from 'api';
import { ContentScriptType } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		const contentScriptId = 'scroll-to-line';
		await joplin.contentScripts.register(
			ContentScriptType.CodeMirrorPlugin,
			contentScriptId,
			'./contentScript.js'
		);

		const dialogHandle = await joplin.views.dialogs.create('line-prompt-dialog');
		await joplin.views.dialogs.setHtml(dialogHandle, `
			<form name="mainForm">
				<label for="line-input">Line number:</label>
				<input type="number" id="lineInput" name="lineInput" value="1"/>
			</form>
		`);

		await joplin.commands.register({
			name: 'scrollToLine',
			label: 'Scroll to line',
			execute: async () => {
				const result = await joplin.views.dialogs.open(dialogHandle);
				if (result.formData) {
					joplin.commands.execute('editor.execCommand', {
						name: 'scroll-to-line',
						args: [ parseInt(result.formData.mainForm.lineInput) ],
					});
				}
			},
		});
	},
});
