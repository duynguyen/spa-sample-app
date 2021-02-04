import React from 'react';
import { AEMText } from './Text';
import Page from './Page';
import SampleContent from './SampleContent';

const AEMPage = () => (
    <main>
        <h2>Sample AEM + SPA</h2>
        <AEMText
          pagePath="/content/wknd-spa-react/test"
          itemPath="/root/responsivegrid/text" />
        <SampleContent />
    </main>
);

export default AEMPage;
