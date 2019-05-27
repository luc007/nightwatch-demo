const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const seleniumServer = require('selenium-server');


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
            selenium: {
                launch_url: 'https://www.walmart.ca/en',
                start_process: true,
                server_path: seleniumServer.path,
                port: 4444,
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path,
                    'webdriver.gecko.driver': geckodriver.path
                  },
            },
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
                elementScrollBehavior: 1,
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
                javascriptEnabled: true,
                acceptSslCerts: true,
                elementScrollBehavior: 1
            }
        }
    }
};