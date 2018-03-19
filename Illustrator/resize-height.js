//$.bp()
mySelection = activeDocument.selection;
if (mySelection.length>0){
 if (mySelection instanceof Array){
  goal=mySelection[mySelection.length-1];
  for (i=0; i<(mySelection.length-1); i++){
   obj=mySelection[i];
   if(obj.typename=='TextArtItem'){
    outl=obj.duplicate();
    outline=outl.createOutline();   
    ratio=100/(outline.height/goal.height);
    outline.remove();
   }else{
    ratio=100/(obj.height/goal.height);
   }
   obj.resize(ratio,ratio,true,true,true,true,ratio)
  }
 }
}else{}