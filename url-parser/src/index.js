const defaultRunMode = "REST_SERVER";

const init = () => {
    const runMode = process.env.RUN_MODE || defaultRunMode;

    console.log(`Application running in ${runMode} mode`);
}

init();