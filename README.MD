# Astra Notices
Easily Create Admin Notices.

### How to use this library
1. Require the file `class-astra-notices.php` in your project.
2. On action `admin_notices` register notices by calling method `Astra_Notices::add_notice()`

**Example usege** 
```
add_action(
	'admin_notices',
	function() {
		Astra_Notices::add_notice(
			array(
				array(
					'id'                         => '',      // Optional, Notice ID. If empty it set `astra-notices-id-<$array-index>`.
					'type'                       => 'info',  // Optional, Notice type. Default `info`. Expected [info, warning, notice, error].
					'message'                    => '',      // Optional, Message.
					'show_if'                    => true,    // Optional, Show notice on custom condition. E.g. 'show_if' => if( is_admin() ) ? true, false, .
					'repeat-notice-after'        => '',      // Optional, Dismiss-able notice time. It'll auto show after given time.
					'display-notice-after'       => false,      // Optional, Dismiss-able notice time. It'll auto show after given time.
					'class'                      => '',      // Optional, Additional notice wrapper class.
					'priority'                   => 10,      // Priority of the notice.
					'display-with-other-notices' => true,    // Should the notice be displayed if other notices  are being displayed from Astra_Notices.
				)
			)
		);
	}
);
```

