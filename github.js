class GitHub {
    constructor(){
        this.client_id = 'f1f66340f9c0cca581f4';
        this.client_secret = '074859776d0d2ee8db0b06838d84bc429381c2de';
        this.repos_count = 5;   //max of repos
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        //return an object {}
        return {
            profile, //same as profile: profile
            repos
        }
    }
}