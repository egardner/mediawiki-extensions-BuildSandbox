<?php

namespace MediaWiki\Extension\BuildSandbox;

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
		$markup = "<div id='sandbox'><p>This message will dissappear once JS initializes</p></div>";
		$markup .= "<div id='vue'><p>This message will dissappear once JS initializes</p></div>";

		$out->setPageTitle( $this->msg( 'buildsandbox-title' ) );
		$out->addHTML( $markup );
		$out->addModules( 'ext.buildSandbox.main' );
		$out->addModules( 'ext.buildSandbox.vue' );
	}

	/**
	 * @return string
	 */
	public function getGroupNames() {
		return 'other';
	}
}
