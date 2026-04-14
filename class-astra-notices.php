<?php
/**
 * Backward-compatibility shim.
 *
 * The library class has been renamed from Astra_Notices to BSF_Admin_Notices.
 * This file is kept at the original path so existing require_once statements
 * in consumer plugins continue to work without modification.
 *
 * @package BSF Admin Notices
 * @since   1.1.16
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

require_once dirname( __FILE__ ) . '/class-bsf-admin-notices.php'; // phpcs:ignore Modernize.FunctionCalls.Dirname.FileConstant
