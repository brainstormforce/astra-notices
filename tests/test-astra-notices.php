<?php
/**
 * Test Astra Notices
 *
 * @package Astra_Notices
 */

/**
 * Test to verify the notice can be dismissed by the users.
 */
class TestAstraNotices extends WP_Ajax_UnitTestCase {

    /**
	 * Test that the notice using the same hook with same priority.
	 */
	public function test_actions() {
        $this->assertSame( 30, has_action( 'admin_init', array( Astra_Notices::get_instance(), 'show_notices' ) ) );
    }
}


