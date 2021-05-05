<?php

namespace MediaWiki\Extension\BuildSandbox;
use Html;
use ResourceLoader;

class SpecialBuildSandbox extends \SpecialPage {

	public function __construct() {
		parent::__construct( 'BuildSandbox' );
	}

	/**
	 * Set up the special page
	 * @param string $sub
	 */
	public function execute( $sub ) {
		$out = $this->getOutput();
		$config = $out->getConfig();
		$markup = "<div id='sandbox'><p>This message will dissappear once JS initializes</p></div>";
		$out->setPageTitle( $this->msg( 'buildsandbox-title' ) );
		$out->addHTML( $markup );

		if ( $config->get( 'BuildSandboxDevelopmentMode' ) ) {
			// Vite dev mode with HMR support
			$out->addHTML( '<script type="module" src="http://localhost:3000/@vite/client"></script>' );
			// Add <script type="module" src="http://localhost:3000/main.js">, but only after mediawiki.base loads
			$out->addHTML( Html::element( 'script', [],
				ResourceLoader::makeInlineCodeWithModule( 'mediawiki.base', <<<JAVASCRIPT
					var script = document.createElement( 'script' );
					script.src = 'http://localhost:3000/main.js';
					script.type = 'module';
					document.body.appendChild( script );
JAVASCRIPT
			) ) );
		} else {
			$out->addModules( 'ext.buildSandbox.main' );
		}
	}

	/**
	 * @return string
	 */
	public function getGroupNames() {
		return 'other';
	}
}
