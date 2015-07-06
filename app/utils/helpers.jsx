import axios from 'axios';

function getUserInformation (username) {
    return axios.get(`https://api.github.com/users/${username}`);
}

function getRepositories (username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

export default {
    getGitHubInformation (username) {
        return axios.all([getUserInformation(username), getRepositories(username)])
            .then((arr) => {
                return {
                    biography: arr[0].data,
                    repositories: arr[1].data
                };
            });
    }
};
