module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: "Enter your component name. It should be the same as the npm module name"
        },
        description: {
            type: 'string',
            required: false,
            message: "Project/component description",
            default: "My vue component"
        },
        author: {
            type: 'string',
            required: false,
            message: "Author",
            default: ":gitUser:"
        },
        repository: {
            type: 'confirm',
            message: "Do you want to add a github repository ?"
        },
        repositoryConfig: {
            when: "repository",
            type: 'string',
            message: "Type your github repository `{username}/{repository-name}`"
        },
        sass: {
            type: 'confirm',
            message: "Shall we add sass support?"
        }
    },
    installDependencies: true,
    showTip: true,
    post:function(context) {
        // perform your logic
        context.pm
    },
    skipInterpolation: [
        'src/',
        'dev'
    ]
}
