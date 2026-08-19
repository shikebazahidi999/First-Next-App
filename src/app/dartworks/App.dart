

// // trim( , indexOf, substring, split, replaceAll toLowerCase lenth)
// void main(){

// string MyName = "Shikeba";
// MyName.toUpperCase();
// if(MyName.contains("i")&&MyName.startWith("shi")&&MyName.endsWith("ba")&&MyName.lenth>3){
//     print("hello miss $MyName");

// }
// print(MyName.substring(0,6));
// if(MyName.contains("k")){
//     print(MyName.indexOf("k"));
// }

// }

void main(){
//     List<String> studentsList = ["Sahar","Fariba","Samira","Frishta","Maryam","zahra","kubra"];
//     // lenght ,remove , removeAt it removes the items with there index number
//     for(int i =0; i<studentsList.length; i++){
//         if(studentsList[i].contains("t")){
//  studentsList.remove(studentsList[i]); 
//         }
      
//     }
//     studentsList.removeAt(4);

//     // add it adds one item at the last of the list, addAll it adds items at the last of list , isEmpty
//     if(studentsList.isEmpty){
//          studentsList.addAll(["Shikeba","shahnaz","nigin","parisa"]);
        
//     }else{
//          studentsList.add("Ali");
//     };
//     // insert it adds an item in a clear index number,  insertAll we can add  items as we want in a clear index number
//     if(studentsList.length<10){
        
//             studentsList.insertAll(1,["zahra","ali"]);
//     } else{
//         studentsList.insert(2,"Ali");
//     }

// // last ایشاره به آخرین آیتم در داخل لیست میکند , first ایشاره به اولین ایتم در داخل لیست میکند
    
//     if(studentsList.first.contains("a")){
//         print(studentsList.first.toUpperCase());
//     }else{
//         print(studentsList.last.toLowerCase());
//     }

//     // indexOf shows the item's index number, reversed reverses the items in list
//     if(studentsList.indexOf("Sahar")==0){
//         var resuilt = studentsList.reversed.toList();
//         print(resuilt);
//     }
//     // removeWhere it removes those items that can be matched with the condition inside it and it acts as a loop and it takes a arrow function indide it for making loop and a parametr
//     studentsList.removeWhere((student)=> student.contains("ba"));
    

//     print(studentsList);


    // retainWhre نگهداری کردن هر چیزی که به شرط صطق کند را نگه میدارد و بقیه که صطق نمیکند را پاک کن برعکس removeWhere عمل میکند
    List<num> numbersList = [12,23,56,77,89,99,14];
    numbersList.retainWhere((items)=>items%2==0);
    print(numbersList);
    // contains & clear. clear: همه ی  لیست را خالی میکند
    List<String> students = ["Ali","mohammad","Sughra","Atifa","Shahnaz"];
    if(students.contains("Sughra")){
        print(students.clear);
    };
     // contains شامل بودن را چک میکند که آیتم داخل لیست موجود است یا خیر
    //lastIndexOf از طرف آخر چک میکند و نمبر اندیکس آن آیتم را نشان میدهد
    List<String> girls = ["Samira","Fatima","Gull Bahar","Maryam","Samira"];
    if(girls.lastIndexOf("Samira")==4){
        print(girls);
    }
    
    // indexWhere مثل لوپ عمل میکند نظز به شرط هرچی صطق کرد نمبر اندیکس اولین آیتم که پیدا کرد آن را نشان نیدهد و بازگشتی تمام اندیکس ها اگر پیدا نشد -1 هست
   var resyilt = girls.indexWhere((items)=>items.contains("t"));
   print(resyilt);

    // any چک میکند اولین آیتم را که پیدا کند  بازگشتی آن درست میشود و بازگشتی این همیشه boluon است و به مهزی که به true رسید استاپ میشه
    bool bestgirl = girls.any((g)=>g.toLowerCase().contains("m")) ;
    print("$bestgirl you have got the best name in our class congratulations");


    // every باید تمام آیتم به شرط صطق کند اگه اولین آیتم که پیدا شد که به شرط ثطق نمیکند استاپ میشود
   bool allgirls= girls.every((items)=>items.contains("a"));
   print(allgirls);


}