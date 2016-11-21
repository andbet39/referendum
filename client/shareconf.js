ShareIt.configure({
    sites: {                // nested object for extra configurations
        'facebook': {
            'appId': '217119428726688'	// use sharer.php when it's null, otherwise use share dialog
        },
        'twitter': {},
    },
    classes: "large btn", // string (default: 'large btn')
                          // The classes that will be placed on the sharing buttons, bootstrap by default.
    iconOnly: false,      // boolean (default: false)
                          // Don't put text on the sharing buttons
    applyColors: false,     // boolean (default: true)
                          // apply classes to inherit each social networks background color
    faSize: '2',            // font awesome size
    faClass: 'square'		  // font awesome classes like square
  });
