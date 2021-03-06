/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';

import { 
	PanelBody, 
	RangeControl
} from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();
	
	return (
		<div {...blockProps}>
			
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ attributes.columns }
						onChange={ ( value ) => setAttributes( { columns: value } ) }
						 min={ 2 }
						 max={ 6 }
					/>
					<RangeControl
						label={ __( 'Minimum Column Width' ) }
						value={ attributes.minWidth }
						onChange={ ( value ) => setAttributes( { minWidth: value } ) }
						min={ 100 }
						max={ 600 }
					/>
				</PanelBody>
				
			</InspectorControls>
			<div  className="yo"
				style={{
					columns: attributes.columns.toString() + ' ' + attributes.minWidth + 'px'
				}}
			>
				<InnerBlocks />
			</div>
			
			</div>
	);
}
