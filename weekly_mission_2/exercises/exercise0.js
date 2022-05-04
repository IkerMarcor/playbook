/*
* Repo
* ---------------------
* - name 
* - author
* - lenguage
* - numberOfCommits
* - stars
* - forks
* - issues_open
* - issues_close
* ---------------------
* + getTotalIssues()
* + getGeneralInfo()
* ---------------------
*/

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

/*
* Issue
* ---------------------
* - title 
* - repositoryNameAssociated
* - status
* - numberOfComments
* - labels
* - author
* - dateCreated
* - lastUpdated
* ---------------------
* + getTitleAndAuthor()
* + getGeneralInfo()
* ---------------------
*/
const issue = {
    title: "06 Live 3 Semana 2 [Jueves 14 de Abril]",
    repositoryNameAssociated: "LaunchX-InnovaccionVirtual/MissionNodeJS",
    status: "Open",
    numberOfComments: 61,
    labels: ["FINALIZADO","LIVE 3","Semana-2"],
    author: "carlogilmar",
    dateCreated: "04-14-2022",
    lastUpdated: "20 days ago",
    getTitleAndAuthor: function(){
      return `Date: ${this.dateCreated} Author: ${this.author}`
    },
    getGeneralInfo: function(){
      return `The Issue ${this.title} was created by ${this.author}`
    }
   }
   
console.log("\nNombre del issue: " + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

/*
* PullRequest
* ---------------------
* - title 
* - branchName
* - dateCreated
* - status
* - repositoryNameAssociated
* ---------------------
* + getStatus()
* + getTitleAndAutor()
* ---------------------
*/

const pullRequest = {
    title: "Mi primer PR!!!!",
    branchName:{
        origin:"main",
        destination:"main"
    },
    dateCreated: "04-11-2022",
    status: "Open",
    repositoryNameAssociated: "visualpartenership/launch-x-explorers",
    author: "IkerMarcor",
    getStatus: function(){
        return `The status of the PR ${this.title} is ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `Date: ${this.dateCreated} Author: ${this.author}`
    }
   }
   
console.log("\nNombre del PR: " + pullRequest.title)
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())