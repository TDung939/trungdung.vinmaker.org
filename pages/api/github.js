import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

export default async function handler(req, res) {
    const response = await octokit.request('GET /user');
    const data = response.data;
    
    const publicRepos = data.public_repos;
    const followers = data.followers;
    const following = data.following;

    return res.status(200).json(
        { 
            publicRepos,
            followers,
            following
        });
}
