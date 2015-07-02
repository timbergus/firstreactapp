var axios = require('axios');

function getUserInformation (username) {
    return axios.get('https://api.github.com/users/' + username);
}

function getRepositories(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos');
}

module.exports = {
    getGitHubInformation: function (username) {
        return axios.all([getUserInformation(username), getRepositories(username)])
            .then(function (arr) {
                return {
                    biography: arr[0].data,
                    repositories: arr[1].data
                }
            });
    }
};
