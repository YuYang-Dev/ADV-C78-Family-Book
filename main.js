var images = ["YY.jpg", "Fluff.jpg", "Floof.jpg"];
var names = ["Tan Yu Yang (me)", "Fluffles", "Floofles"];

var index = 1;

// haha why need to define so many variables when you can just use the array with the index itself the example given could have been much shorter :)
// it would be better if you used the array's length instead because if you put a specific number like that in the hints it may not be helpful as the person doing it may have a different amount of family members so this way is far simpler and better
function Next()
{
    if (index > images.length - 1 && index > names.length -1)
        index = 0;
    
    document.getElementById("MemberLabel").innerHTML = names[index];
    document.getElementById("FamilyMemberImg").src = images[index];

    index++;
}
// I suggest changing the hints a little ( refer to above comment)
