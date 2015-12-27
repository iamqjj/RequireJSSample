requirejs.config({
    baseUrl: 'js/subjs',
    paths: {
        main: '../../main'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);