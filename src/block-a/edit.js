import { useBlockProps } from '@wordpress/block-editor';
import {TextControl} from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {text} = attributes;
	return (
		<div { ...useBlockProps() }>
			<TextControl
			label="Text Field"
			value={ text }
			onChange={ ( value ) => setAttributes( {text: value} ) }
			/>
		</div>
	);
}
