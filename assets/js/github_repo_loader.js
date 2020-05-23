
function http_get(theUrl) {
    // based on https://stackoverflow.com/a/4033310
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function add_top5_repos() {
    request_url = "https://api.github.com/orgs/Telecommunication-Telemedia-Assessment/repos?sort=created";
    console.log(request_url);
    res = JSON.parse(http_get(request_url));
    console.log(res);
    var result_div = document.getElementById("top-5-projects");
    var result_list = document.createElement("ul");

    res.filter(repo => !repo["fork"]).slice(0, 5).forEach(
        function(repo) {
            console.log(repo["name"], repo["html_url"], repo["description"]);
            var list_element = document.createElement("li");
            list_element.innerHTML = "<a href='" + repo["html_url"] + "' ><font id='reponame'> " + repo["name"] + "</font></a>"; //" " + repo["description"] + "";

            result_list.append(list_element);

        }
    )

    result_div.append(result_list);

    //console.log(res);
}


document.addEventListener("DOMContentLoaded", function(){
    add_top5_repos();
});