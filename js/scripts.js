var catData = {
    cats:[
        {
            name: "Tiddles",
            clickCount: 0,
            imgsrc:""
        },
        {
            name: "Fluffy",
            clickCount: 0,
            imgsrc:""
        },
        {
            name: "Mouser",
            clickCount: 0,
            imgsrc:""
        },
        {
            name: "Napoleon",
            clickCount: 0,
            imgsrc:""
        },
        {
            name: "Osiris",
            clickCount: 0,
            imgsrc:""
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
            $('#catList').append('<li>'+catList[i].name+'</li>');
        }
    }

};
