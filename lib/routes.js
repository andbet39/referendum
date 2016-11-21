FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Question'});
    }
});

FlowRouter.route('/result', {
    name: 'result',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Result'});
    }
});
