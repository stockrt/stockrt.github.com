function addToFavorites(title, url) {
    if (document.all)
        window.external.AddFavorite(url, title);
    else if (window.sidebar)
        window.sidebar.addPanel(title, url, "")
}
//function newWindow(url) {
//    popupWindow = window.open(url,'popUpWindow','height=600,width=600,left=50,top=50,resizable=yes,scrollbars=1,toolbar=no,menubar=no,location=no,directories=no,status=no');
//}
