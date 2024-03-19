import type { ContentScriptContext, MarkdownEditorContentScriptModule } from 'api/types';
import type { EditorView } from '@codemirror/view';

export default (context: ContentScriptContext): MarkdownEditorContentScriptModule => {
	return {
		plugin: editorControl => {
			if (editorControl.cm6) {
				// Running in CM6
				editorControl.registerCommand('scroll-to-line', (lineNumber: number) => {
					const editor: EditorView = editorControl.editor;

					// Bounds checking
					if (lineNumber <= 0) {
						lineNumber = 1;
					}
					if (lineNumber >= editor.state.doc.lines) {
						lineNumber = editor.state.doc.lines;
					}

					// Scroll
					const lineInfo = editor.state.doc.line(lineNumber);
					editor.dispatch(editor.state.update({
						selection: { anchor: lineInfo.from },
						scrollIntoView: true,
					}));
				});
			} else {
				// Write a CM5 version here.
			}
		},
	};
};