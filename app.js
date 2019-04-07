//init github
const github = new GitHub;
//init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');



searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText != ''){
        //Make HTTP Call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show alert, user not found!
                ui.showAlert('user not found', 'alert alert-danger');

            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }else{
        //Clear profile
        ui.clearProfile();
    }
});