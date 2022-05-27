let nome
let email
let id

const auth = window.sessionStorage.getItem('auth')

/* A adição dessa função que "escuta" um evento permite que verifiquemos se a página foi carregada */
document.onreadystatechange = async function () {
    if (document.readyState == "complete") {
        $.ajax({
            url: "http://localhost:3001/User/Verify/Infos",
            headers: {"Authorization": `Bearer ${auth}`},
            success: function(resul) { 
                console.log(resul)
                nome = resul.name
                email = resul.email,
                id = resul.id
                document.getElementById('userNameNavBar').innerHTML = `${nome}`
                checkUser()
            }
        }).fail(function(err) {
            console.log(err.responseJSON.message);
            window.location.href = '../view/login.html'
        })
    }
}

let User

async function checkUser() {

    console.log(id)

    await $.ajax({
        url: "http://localhost:3001/User/User",
        type: "POST",
        data: { 
            id: id
        },
        headers: {"Authorization": `Bearer ${auth}`},
        success: function(resul) { 
            User = resul.user
        }
    }).fail(function(err) {
        console.log(err.responseJSON.message)
    })

    document.getElementById('descricaoUser').innerHTML = User.name
}

function logOut() {
    window.sessionStorage.removeItem('auth')
    window.location.href = '../view/Login.html'
}