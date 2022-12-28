import joplin from 'api';

import { tmpdir } from 'os';
import * as path from 'path';
import type FsExtra = require('fs-extra');
const fs = joplin.require('fs-extra') as typeof FsExtra;

joplin.plugins.register({
	onStart: async function() {
		const tmpDir = await fs.mkdtemp(path.join(tmpdir(), 'insertText-bug'));
		process.on('exit', () => fs.rmSync(tmpDir, { recursive: true }));

		let tmpfileIdx = 0;
		const writeNextResourceFile = async (data: string) => {
			const tmpPath = path.join(tmpDir, `resource${tmpfileIdx++}.svg`);
			const tmpFile = await fs.open(tmpPath, 'w');
			await fs.writeFile(tmpFile, data);
			await fs.close(tmpFile);

			return {
				path: tmpPath,
				remove: async () => {
					await fs.remove(tmpPath);
				},
			};
		};

		await joplin.commands.register({
			name: 'minimal-bug-example-insertText',
			label: 'insertText with an SVG image resource',
			iconName: 'fas fa-floppy-disk',
			execute: async () => {
				const exampleData = '<svg xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="50" height="50" fill="red"/></svg>';
				const tmpFile = await writeNextResourceFile(exampleData);

				const query = null;
				const messageData = [{ path: tmpFile.path }];
				const resource = await joplin.data.post(['resources'], query, { title: 'Test' }, messageData);

				await joplin.commands.execute('insertText', `![Test image](:/${resource.id})`);

				await tmpFile.remove();
			},
		});
	},
});
