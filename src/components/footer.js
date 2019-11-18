import React from 'react';

import {rhythm} from '../utils/typography';

function Footer() {
    return (
        <footer
            style={{
                marginTop: rhythm(2.5),
                paddingTop: rhythm(1),
            }}
        >
            <a
                href="https://github.com/dooven"
                target="_blank"
                rel="noopener noreferrer"
            >
                github
            </a>{' '}
            &bull;{' '}
            <a
                href="https://www.linkedin.com/in/daven-paul-casia/"
                target="_blank"
                rel="noopener noreferrer"
            >
                linkedin
            </a>
        </footer>
    );
}

export default Footer;
