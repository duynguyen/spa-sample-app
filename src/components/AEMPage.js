import React from 'react';
import { AEMText } from './Text';
import Page from './Page';
import SampleContent from './SampleContent';

const AEMPage = () => (
    <main>
        <h2>Sample AEM + SPA</h2>
        <Page pagePath="/content/wknd-spa-react/test" />
        <SampleContent />

        <h4>Leaf component from AEM</h4>
    </main>
);

export default AEMPage;
