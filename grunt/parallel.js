module.exports={
    dev: {
        options: {
            grunt: true,
            stream: true
        },
        tasks: ['node-inspector', 'watch', 'shell:forever']
    }
};