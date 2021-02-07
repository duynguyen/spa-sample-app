import React from 'react';
import Page from './Page';
import SampleContent from './SampleContent';
import { AEM_PAGE_PATH } from '../AEM_Const';

const style = {
    backgroundColor: 'rgb(142 218 214)',
    margin: '10px auto',
    padding: '10px 50px',
    font: '18pt/1.5 Courier',
    maxWidth: '800px'
};

const AEMPage = () => (
    <main>
        <h2>Sample AEM + SPA</h2>
        <div style={style}>
            <h4>Content from AEM</h4>
            <Page pagePath={AEM_PAGE_PATH} />
        </div>
        <SampleContent />
        <h4>SPA footer.</h4>
    </main>
);

export default AEMPage;
