/**
 * BSF Admin Notices dismiss handler.
 *
 * @package BSF Admin Notices
 */

( function( $ ) {

	/**
	 * Dismiss helper for BSF Admin Notices.
	 *
	 * @since 1.0.0
	 * @class BsfAdminNotices
	 */
	BsfAdminNotices = {

		/**
		 * Initializes click handlers.
		 *
		 * @since 1.0.0
		 * @method init
		 */
		init: function()
		{
			this._bind();
		},

		/**
		 * Binds events for notice dismissal.
		 *
		 * @since 1.0.0
		 * @access private
		 * @method _bind
		 */
		_bind: function()
		{
			$( document ).on('click', '.bsf-admin-notice-close', BsfAdminNotices._dismissNoticeNew );
			$( document ).on('click', '.bsf-admin-notice .notice-dismiss', BsfAdminNotices._dismissNotice );
		},

		_dismissNotice: function( event ) {
			event.preventDefault();

			var repeat_notice_after = $( this ).parents('.bsf-admin-notice').data( 'repeat-notice-after' ) || '';
			var notice_id = $( this ).parents('.bsf-admin-notice').attr( 'id' ) || '';

			BsfAdminNotices._ajax( notice_id, repeat_notice_after );
		},

		_dismissNoticeNew: function( event ) {
			event.preventDefault();

			var repeat_notice_after = $( this ).attr( 'data-repeat-notice-after' ) || '';
			var notice_id = $( this ).parents('.bsf-admin-notice').attr( 'id' ) || '';

			var $el = $( this ).parents('.bsf-admin-notice');
			$el.fadeTo( 100, 0, function() {
				$el.slideUp( 100, function() {
					$el.remove();
				});
			});

			BsfAdminNotices._ajax( notice_id, repeat_notice_after );

			var link   = $( this ).attr( 'href' ) || '';
			var target = $( this ).attr( 'target' ) || '';
			if( '' !== link && '_blank' === target ) {
				window.open(link , '_blank');
			}
		},

		_ajax: function( notice_id, repeat_notice_after ) {

			if( '' === notice_id ) {
				return;
			}

			$.ajax({
				url: ajaxurl,
				type: 'POST',
				data: {
					action              : 'bsf-admin-notice-dismiss',
					nonce               : bsfAdminNotices._notice_nonce,
					notice_id           : notice_id,
					repeat_notice_after : parseInt( repeat_notice_after ),
				},
			});

		}
	};

	$( function() {
		BsfAdminNotices.init();
	} );
} )( jQuery );
