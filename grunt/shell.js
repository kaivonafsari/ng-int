var chrome = '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome';

module.exports = {
    console: {
        command: function(msg) {
            return 'echo ' + msg;
        }
    },
    github: {
        command: function() {
            var url = 'github.com/$REPO/tree/$BRANCH';
            var branch = 'BRANCH=$(git branch | grep "*" | awk -F " " \'{print $2}\')';
            var repo = "REPO=$(git remote -v | grep 'push' | awk 'NR==1' | awk -F ':' '{print $2}' | awk -F ' ' '{print $1}' | sed 's/.git//')";
            var command = 'COMMAND="@CHROME @URL"'
                .replace('@CHROME', chrome).replace('@URL', url);

            return [branch, repo, command, 'eval $COMMAND'].join('&&');
        }
    },
    clean: {
        command: function() {
            var command = 'git status | grep "nothing to commit, working directory clean" | awk -F " " \'{print $6}\'';
            return command;
        },
        options: {
            callback: function(err, stdout, stderr, cb) {
                console.log(stdout);
                if (stdout.trim() != 'clean')
                    throw "commit all changes before issuing a pull request";

                cb();
            }
        }
    },
    push: {
        command: function() {
            var branch = 'BRANCH=$(git branch | grep "*" | awk -F " " \'{print $2}\')';
            return [branch, 'git push origin $BRANCH'].join('&&');
        }
    },
    pullrequest: {
        command: function() {
            var url = 'github.com/$REPO/compare/develop...$BRANCH';
            var branch = 'BRANCH=$(git branch | grep "*" | awk -F " " \'{print $2}\')';
            var repo = "REPO=$(git remote -v | grep 'push' | awk 'NR==1' | awk -F ':' '{print $2}' | awk -F ' ' '{print $1}' | sed 's/.git//')";
            var command = 'COMMAND="@CHROME @URL"'
                .replace('@CHROME', chrome).replace('@URL', url);

            return [branch, repo, command, 'eval $COMMAND'].join('&&');
        }
    },
    jira: {
        command: function() {
            var url = 'lumiata.atlassian.net/browse/$BRANCH';
            var branch = 'BRANCH=$(git branch | grep "*" | awk -F " " \'{print $2}\')';
            var command = 'COMMAND="@CHROME @URL"'
                .replace('@CHROME', chrome).replace('@URL', url);

            return [branch, command, 'eval $COMMAND'].join('&&');
        }
    },
    trim: {
        command: function() {
            return [
                'git checkout develop',
                'git pull origin develop',
                'git branch | grep -v develop | xargs git branch -d'].join('&&')
        }
    },
    eslint: {
        command: function(type) {
            var commands = {
                'server': 'eslint -c server/.eslintrc server/*.js',
                'app': 'eslint -c .eslintrc app/src'
            };
            return commands[type];
        }
    },
    forever: {
        command: 'ENV=development forever -w -c "node --debug" --watchDirectory "server"     server/express.js'
    },
    killnodez: {
        command: 'kill -9 $(lsof | grep node |  awk -F " " \'{print $2}\')'
    }

};
