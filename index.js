function takeANumber(current_line_of_people, new_person_name) {
  current_line_of_people.push(new_person_name)
  return `Welcome, ${new_person_name}. You are number ${current_line_of_people.length} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!"
  } 
  else {
   return`Currently serving ${katzDeliLine.shift()}.`
  }
  }
  
  
  function currentLine(array) {
    if (array.length === 0) {
      return "The line is currently empty."
    } 
    else {
     var index = 0
     var new_string = "The line is currently:"
     while (index <  array.length) {
     new_string += ` ${index + 1}. ${array[index]},`
     index += 1
     }
     new_string = new_string.slice(0, -1)
     return new_string
    }
  }