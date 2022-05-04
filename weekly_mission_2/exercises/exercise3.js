// Facebook ¿Que veo?
/**
* Perfil de usuario
* - Detalles
* - Publicaciones
* - Fotos
* - Amigos
*/
class Fb_user{
    constructor(name,intro,posts,photos,friends){
        this.name = name
        this.intro = intro
        this.posts = posts
        this.photos = photos
        this.friends = friends
    }
    sayHelloUser(){
        return `${this.name} says: Hey! explorer :)`
    }
}

const pedro = new Fb_user("pedro",{bio:"Studied at CBTIS",hobbies:["Listening to Music", "Eating"],featured:4},2, 0, 3)
console.log(pedro)
console.log(pedro.sayHelloUser())

/**
* Inicio
* - Publicaciones
* - Menu de Inicio
* - Accesos directos
* - Contactos
* - Historias
* - Reels
*/
class Home{
    constructor(posts,menu_home,shortcuts,contacts,stories,reels){
        this.posts = posts
        this.menu_home = menu_home
        this.shortcuts = shortcuts
        this.contacts = contacts
        this.stories = stories
        this.reels = reels
    }
}

const pedro_home = new Home("Infinite",["Friends","Groups","Marketplace","Watch","Memories"], 7, 3, 18,"Infinite")
console.log(pedro_home)

/**
* Watch
* - Menu Watch
* - Tu lista
* - Videos
* - Recomendados para ti
*/
class Watch {
    constructor(menu_watch,watchlist,posts,recomended){
        this.menu_watch = menu_watch
        this.watchlist = watchlist
        this.posts = posts
        this.recomended = recomended
    }
}

const pedro_watch = new Watch(["Home","Live","Music","Shows","Saved Videos"],["Aprende aleman","NASA","Babo"],"Infinite",5)
console.log(pedro_watch)

/**
* Marketplace
* - Publicaciones
* - Menu Marketplace
* - Filtros
* - Categorías
*/
class Marketplace {
    constructor(posts,menu_mp,filters,categories){
        this.posts = posts
        this.menu_mp = menu_mp
        this.filters = filters
        this.categories = categories
    }
}

const pedro_mp = new Marketplace("Infinite",["Browse all","Live shopping","Notifications","Inbox","Buying", "Selling"],["Bacanora, Sonora - Within 60 km"],5)
console.log(pedro_mp)

/**
* Grupos
* - Menu Grupo
* - Sugerencias
* - Grupos unidos
*/

class Groups {
    constructor(menu_groups,suggestions,activity,my_groups){
        this.menu_groups = menu_groups
        this.suggestions = suggestions
        this.activity = activity
        this.my_groups = my_groups
    }

}

const pedro_groups = new Groups(["Your feed","Discover","Your notifications"],["Python camp","MMA Group","Aprender a programar desde cero"],"Infinite",15)
console.log(pedro_groups)