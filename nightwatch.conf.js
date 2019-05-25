const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
    custom_commands_path: "",
    custom_assertions_path: "",
    page_objects_path: "./page_objects",

    test_workers: {
        enabled: true,   
        workers: 'auto'
    },

    test_settings: {
        default: {
            screenshots: {
                enabled: true,        
                on_failure: true,
                path: './screenshots'   
            },
            webdriver: {
                launch_url: 'http://walmart.ca',
                start_process: true,
                server_path: chromedriver.path,
                port: 5555,
                cli_args: ['--port=5555']
            }
        },
        'skip_testcases_on_fail': true,

        chrome: {
            webdriver: {
                server_path: chromedriver.path
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: [
                        '--disable-web-security',
                        '--ignore-certificate-errors',
                        '--test-type'
                    ]
                }
            }
        },

        firefox: {
            webdriver: {
                server_path: geckodriver.path
            },
            desiredCapabilities: {
                browserName: 'firefox',
                marionette: true
            }
        }
    }
};