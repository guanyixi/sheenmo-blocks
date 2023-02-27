# Sheenmo Blocks
Sheenmo Blocks is a WordPress plugin boilerplate for creating multiple blocks.

## Compiling
First time: run `npm install` to install node modules.

* npm start
* npm run build

## Add New Block
* In a seperate folder, run `npx @wordpress/create-block block-name`.
* In the plugin /src/ directory, create a folder /block-name/.
* Move the files under /src/ folder you just created to the plugin /src/ folder.
* Add the new block in your plugin file:

```
function create_block_sheenmo_blocks_block_init() {
	register_block_type( __DIR__ . '/build/block-a' );
	register_block_type( __DIR__ . '/build/block-b' );
    register_block_type( __DIR__ . '/build/block-name' ); // Add your new block here
}
add_action( 'init', 'create_block_sheenmo_blocks_block_init' );
```

## Replace Examples
* You can use the above method to replace the example blocks block-a and block-b.
* Remember to update the plugin file init.