const browsers = {
    CHROME: "chrome",
    FF: "firefox",
    Edge: "Edge",
    SAFARI: "safari"
};

let browser = browsers.CHROME;

function execute() {
    switch (browser) {
        case browsers.CHROME:
            console.log("execute on Chrome")
            break;
        case browsers.FF:
            console.log("execute on Firefox")
            break;
        case browsers.Edge:
            console.log("execute on Edge")
            break;
        case browsers.SAFARI:
            console.log("execute on Safari")
            break;
    }

}
console.log(execute());
