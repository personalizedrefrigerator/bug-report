import { DefaultTheme, Renderer, JSX } from 'typedoc';

// See https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md

/**
 * Provides a custom TypeDoc theme that includes a large .js file
 * in `head.end`.
 * 
 * This file is included in the documentation for purposes of demonstration. Really,
 * it's `@internal`.
 */
export class CustomTheme extends DefaultTheme {
	public constructor(renderer: Renderer) {
		super(renderer);

		this.loadRendererHooks(renderer);
	}


	private loadRendererHooks(renderer: Renderer) {
		renderer.hooks.on('head.end', (_event) => {
			return (
				// Try with different libraries:
				//<script src="https://cdn.jsdelivr.net/npm/js-draw@1.20.3/dist/bundle.js" integrity="sha256-XJN7539P8FaFEZDXUEgMlp9ERBdhME2Gk7EoSZN2v3I=" crossOrigin="anonymous"></script>
				<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossOrigin="anonymous"></script>
			);
		});
	}
}
