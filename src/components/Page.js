import {
    Page, MapTo, withMappable, ResponsiveGrid
} from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from './Text';

export default withMappable(Page);

MapTo('editorxpdevelopment/components/content/text')(Text, TextEditConfig);
MapTo('wcm/foundation/components/responsivegrid')(ResponsiveGrid);
