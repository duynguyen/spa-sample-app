import React from 'react';
import { AEMText } from './Text';
import SampleContent from './SampleContent';

const AEMPage = () => (
    <main>
        <h2>Sample AEM + SPA</h2>
        <AEMText
          pagePath="/content/editorxpdevelopment/us/en"
          itemPath="/root/responsivegrid/text" />
        <SampleContent />
    </main>
);

export default AEMPage;
