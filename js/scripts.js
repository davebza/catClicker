var catData = {
    cats:[
        {
            name: "Tiddles",
            clickCount: 0,
            imgsrc:"tiddles.jpg"
        },
        {
            name: "Fluffy",
            clickCount: 0,
            imgsrc:"fluffy.jpg"
        },
        {
            name: "Mouser",
            clickCount: 0,
            imgsrc:"mouser.jpg"
        },
        {
            name: "Napoleon",
            clickCount: 0,
            imgsrc:"napoleon.jpg"
        },
        {
            name: "Osiris",
            clickCount: 0,
            imgsrc:"osiris.jpg"
        },
    ]
};

var controller = {
    getCats: function(){
        return catData.cats;
    }
};

var detailView = {
    listMaker: function(){
        var catList = controller.getCats();
        for (var i = 0; i < catList.length; i++){
            $('#catList').append('<li id="'+catList[i].name+'">'+catList[i].name+'</li>');
        }
    }

};

detailView.listMaker();
