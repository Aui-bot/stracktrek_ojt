const compass = (degree)=>{
  
   if (typeof degree !== "number" || degree < 0 || degree > 360) {
    console.log("Please enter a valid degree between 0 and 360.");
    return;
  }
  
  let compass = degree;
  
  let direction = '';
  if (compass == 0 || compass == 360) {
    direction = "North"
  } else if(compass < 90 && compass > 0){
    direction = `${compass}° North of East`;
  } else if(compass == 90){
    direction = "East";
  } else if(compass > 90 && compass < 180){
    direction = `${180 - compass}° South of East`;
  } else if(compass == 180){
    direction = "South";
  } else if(compass < 270 && compass > 180){
    direction = `${compass - 180}° South of West`;
  } else if(compass == 270){
    direction = "West";
  } else if(compass > 270 && compass < 360){
    direction = `${360 - compass}°North of West`;
  }
  
  return direction;
}

console.log(compass(180));
console.log(compass(222));  
console.log(compass(90));
console.log(compass(50));




