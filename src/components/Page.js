import {
    Page, MapTo, withMappable, ResponsiveGrid
} from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from './Text';
import Image, {ImageEditConfig} from "./Image/Image";

export default withMappable(Page);

MapTo('wknd-spa-react/components/text2')(Text, TextEditConfig);
MapTo('wcm/foundation/components/responsivegrid')(ResponsiveGrid);
MapTo('wknd-spa-react/components/image')(Image, ImageEditConfig);

