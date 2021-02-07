import { Page, MapTo, withMappable, ResponsiveGrid } from '@adobe/aem-react-editable-components';
import Text, { TextEditConfig } from './Text';
import Image, { ImageEditConfig } from "./Image/Image";

export default withMappable(Page);

MapTo('wcm/foundation/components/responsivegrid')(ResponsiveGrid);
MapTo('editorxpdevelopment/components/content/text')(Text, TextEditConfig);
MapTo('editorxpdevelopment/components/content/image')(Image, ImageEditConfig);

