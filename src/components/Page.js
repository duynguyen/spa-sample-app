import {
    Page, MapTo, withMappable, ResponsiveGrid, Image
} from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from './Text';

export default withMappable(Page);

MapTo('wknd-spa-react/components/text')(Text, TextEditConfig);
MapTo('wcm/foundation/components/responsivegrid')(ResponsiveGrid);
