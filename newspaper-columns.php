<?php
/**
 * Plugin Name:       Newspaper Columns
 * Plugin URI:        https://forete-press.com/blocks/
 * Description:       Set the number of columns and watch the text flow, just like a newspaper
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Forte Press
 * Author URI:        https://forte-press.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       newspaper-columns
 *
 * @package           fortepress
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function fortepress_newspaper_columns_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'fortepress_newspaper_columns_block_init' );
