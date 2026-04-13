# BSF Admin Notices

An easy-to-use PHP library to add dismissible admin notices in the WordPress admin. _Previously named `Astra_Notices`._

### How to use this library
1. Drop `class-bsf-admin-notices.php`, `notices.js`, and `notices.css` into your plugin or theme.
2. `require_once` the PHP file.
3. Register your notices on `admin_init` by calling `BSF_Admin_Notices::add_notice()`.

**Default parameters**
```php
array(
    'id'                         => '',      // Required, Notice ID. Id can be like: `bsf-admin-notices-id-<$pluginslug>`.
    'type'                       => 'info',  // Optional, Notice type. Default `info`. Expected [info, warning, notice, error].
    'message'                    => '',      // Optional, Message.
    'show_if'                    => true,    // Optional, Show notice on custom condition. E.g. 'show_if' => if( is_admin() ) ? true, false, .
    'repeat-notice-after'        => '',      // Optional, Dismiss-able notice time. It'll auto show after given time.
    'display-notice-after'       => false,   // Optional, Dismiss-able notice time. It'll auto show after given time.
    'class'                      => '',      // Optional, Additional notice wrapper class.
    'priority'                   => 10,      // Priority of the notice.
    'display-with-other-notices' => true,    // Should the notice be displayed if other notices are being displayed from BSF_Admin_Notices.
    'is_dismissible'             => true,    // Optional, Whether the notice is dismissible.
    'capability'                 => 'manage_options', // User capability required to see this notice.
)
```

**Example usage**
```php
add_action(
    'admin_init',
    function() {
        BSF_Admin_Notices::add_notice(
            array(
                'id'                         => 'your-notice-id',
                'type'                       => '',
                'message'                    => sprintf(
                    '<div class="notice-image">
                        <img src="%1$s" class="custom-logo" alt="Sidebar Manager" itemprop="logo"></div>
                        <div class="notice-content">
                            <div class="notice-heading">
                                %2$s
                            </div>
                            %3$s<br />
                            <div class="bsf-admin-notice-actions">
                                <a href="%4$s" class="bsf-admin-notice-close button-primary" target="_blank">
                                %5$s
                                </a>
                            <span class="dashicons dashicons-calendar"></span>
                                <a href="#" data-repeat-notice-after="%6$s" class="bsf-admin-notice-close">
                                %7$s
                                </a>
                            <span class="dashicons dashicons-smiley"></span>
                                <a href="#" class="bsf-admin-notice-close">
                                %8$s
                                </a>
                            </div>
                        </div>',
                    $image_path,
                    __( 'Hello! Seems like you have used Header Footer Elementor to build this website — Thanks a ton!', 'header-footer-elementor' ),
                    __( 'Could you please do us a BIG favor and give it a rating on WordPress? This would boost our motivation and help other users make a comfortable decision while choosing the Header Footer Elementor.', 'header-footer-elementor' ),
                    'https://wordpress.org/support/plugin/header-footer-elementor/reviews/',
                    __( 'Ok, you deserve it', 'header-footer-elementor' ),
                    MONTH_IN_SECONDS,
                    __( 'Nope, maybe later', 'header-footer-elementor' ),
                    __( 'I already did', 'header-footer-elementor' )
                ),
                'repeat-notice-after'        => MONTH_IN_SECONDS,
                'display-notice-after'       => 1296000, // Display notice after 15 days.
                'priority'                   => 18,
                'display-with-other-notices' => false,
            )
        );
    }
);
```
