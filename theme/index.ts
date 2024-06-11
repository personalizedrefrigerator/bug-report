import { Application } from 'typedoc';
import { CustomTheme } from './CustomTheme';

export const load = (app: Application) => {
	app.renderer.defineTheme('my-theme', CustomTheme);
};
